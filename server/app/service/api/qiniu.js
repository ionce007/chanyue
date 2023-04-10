"use strict";
const BaseService = require("./base");
const qiniu = require('qiniu');
const config = require('../../config/config.js')
const axios = require('axios');
const qetag = require('../../utils/qetag')

class QiniuService extends BaseService {

  static model = 'qiniu'

  constructor(props) {
    super(props);
  }

  // 生成上传token
  static async _getToken(){
    let accessKey = config.qiniuOss.accessKey;
    let secretKey = config.qiniuOss.secretKey;
    let bucket = config.qiniuOss.bucket
    let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    // 上传凭证
    let options = {
        scope: bucket,
        // 超时时间
        expires: 7200,
        returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)","age":$(x:age)}'
    };
    let putPolicy = new qiniu.rs.PutPolicy(options);
    return putPolicy.uploadToken(mac);
  }

  // 生成唯一上传名字
  static async _createFileName(file){
    return new Promise(resove=>{
      // 唯一文件名 七牛etag+时间戳
      let date= new Date();
      let year = date.getFullYear();
      let month = (date.getMonth()+1).toString().padStart(2,'0');
      let day = date.getDate().toString().padStart(2,'0');
      qetag(file,function(_etag){
        let key = `${year}/${month}/${day}/${_etag}_${new Date().getTime()}`;
        resove(key)
      })
    })
  }

  // 获取上传token
  static async getUploadToken() {
    try {
      const result = {
        "token":await this._getToken(),
      };
      return result;
    } catch (error) {
      console.error(error)
    }
  }

  // 查询bucket 对应的域名
  static async getBucketDomain(){
    let requestUrl = `https://uc.qiniuapi.com/v2/domains?tbl=${config.qiniuOss.bucket}`
    let accessKey = config.qiniuOss.accessKey;
    let secretKey = config.qiniuOss.secretKey;
    let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

    let xQiniuDate = qiniu.util.formatDateUTC(new Date(), 'YYYYMMDDTHHmmssZ')
    let headers =  {
      'Content-Type':'application/x-www-form-urlencoded',
      'X-Qiniu-Date':xQiniuDate
    };
    // 生成AccessToken
    let accessToken = qiniu.util.generateAccessTokenV2(
        mac,
        requestUrl,
        'GET',
        headers['Content-Type'],
        null,
        headers
    );
    // console.log('accessToken',accessToken)
    
    let result = await axios({
      method:'get',
      url:requestUrl,
      headers:{
        'Host':'uc.qiniuapi.com',
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization':accessToken,
        'X-Qiniu-Date':xQiniuDate
      }
    }).then((res)=>{
      let bucketDomain = res?.data[0] || ''
      // console.log('bucketDomain',bucketDomain)
      return {
        'bucketDomain':`http://${bucketDomain}`
      }
    }).catch(err=>{
      return {
        qiniuErr:err
      }
    })
    return result
  }

  static async upload(file){
  
   
    let key = await this._createFileName(file)
    // console.log('key',key)
    let uploadToken = await this._getToken();
    let _config = new qiniu.conf.Config();
    console.log('_config',_config)
    let localFile = file.path;
    // config.zone = qiniu.zone.Zone_z0;
    let formUploader = new qiniu.form_up.FormUploader(_config);
    let putExtra = new qiniu.form_up.PutExtra();
    // file
    putExtra.fname =file.filename;
    // putExtra.crc32 = 3497766758;
    putExtra.metadata = {
        // 'x-qn-meta-name': 'qiniu'
    };
    let result = new Promise(async resove=>{

      let bucketInfo = await this.getBucketDomain();
      let bucketDomain = bucketInfo.bucketDomain

      formUploader.putFile(
        uploadToken,
        key, 
        localFile, 
        putExtra, 
        function (respErr,respBody, respInfo) {
          if (respErr) {
              throw respErr;
          }
          resove({
            code:respInfo.statusCode ,
            data:respBody
          })
      });
    })
    return result



  }
}

module.exports = QiniuService;
