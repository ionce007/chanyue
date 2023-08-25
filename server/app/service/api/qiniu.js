"use strict";
const BaseService = require("./base");
const qiniu = require('qiniu');
const config = require('../../config/config.js')

class QiniuService extends BaseService {


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

}

module.exports = QiniuService;
