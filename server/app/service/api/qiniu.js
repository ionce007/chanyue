"use strict";
const BaseService = require("./base");
const path = require("path");
const knex = require("../../config/config.knex.js");
const { delImg } = require("../../extend/helper.js");
const qiniu = require('qiniu');
const config = require('../../config/config.js')



class QiniuService extends BaseService {

  static model = 'qiniu'

  constructor(props) {
    super(props);
  }

  // 获取上传token
  static async getUploadToken(body) {
    try {
      var accessKey = config.qiniuOss.accessKey;
      var secretKey = config.qiniuOss.secretKey;
      var bucket = config.qiniuOss.bucket
      var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
     
      // 上传凭证
      var options = {
          scope: bucket,
          // 超时时间
          expires: 7200
      };
      var putPolicy = new qiniu.rs.PutPolicy(options);
      console.log(putPolicy.uploadToken(mac));
      const result = {
        "token":putPolicy.uploadToken(mac),
        // "putPolicy":putPolicy
      };
      return result;
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = QiniuService;
