"use strict";
const BaseService = require("./base");
const qiniu = require('qiniu');
const config = require('../../config/config.js')
const axios = require('axios');

class QiniuService extends BaseService {

  static model = 'qiniu'
  constructor(props) {
    super(props);
  }

  // 生成上传token
  static async _getToken(){
    const {accessKey,secretKey,bucket} = config.qiniuOss;
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


  //七牛云上传
  static async upload(file){
    let date= new Date();
    let year = date.getFullYear();
    let month = (date.getMonth()+1).toString().padStart(2,'0');
    let day = date.getDate().toString().padStart(2,'0');
    // upload
    let key = `/upload/${year}/${month}/${day}/${new Date().getTime()}_${file.originalname}`
    //上传token
    let uploadToken = await this._getToken();
    let _config = new qiniu.conf.Config();
    let localFile = file.path;
    let formUploader = new qiniu.form_up.FormUploader(_config);
    let putExtra = new qiniu.form_up.PutExtra();
    putExtra.fname = file.filename;
    putExtra.metadata = {};
    return new Promise(async resove=>{
      formUploader.putFile(
        uploadToken,
        key, 
        localFile, 
        putExtra, 
        function (err,res, resp) {
          if (err) {
              throw err;
          }
          resove({
            code:resp.statusCode ,
            data:res
          })
      });
    })
  }
}

module.exports = QiniuService;
