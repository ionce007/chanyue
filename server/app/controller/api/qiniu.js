'use strict';
const BaseController = require('./base');
const dayjs = require('dayjs');
const path = require('path');
const { success, fail } = require('../../extend/api.js');
const QiniuService = require('../../service/api/qiniu.js');
const {filterBody} = require('../../extend/helper.js');

class QiniuController extends BaseController {
  constructor(props) {
    super(props);
  }

  // 获取七牛云上传token
  static async getUploadToken(req, res, next) {
    try {
      const data = await QiniuService.getUploadToken()
      res.json({ ...success, data: data })
    } catch (error) {
      next(error);
    }
  }

  // 获取七牛云bucket domain
  static async getBucketDomain(req, res, next) {
    try {
      const data = await QiniuService.getBucketDomain()
      res.json({ ...success, data: data })
    } catch (error) {
      next(error);
    }
  }

  // 服务端直传七牛
  static async upload(req,res,next){
    try {
    
      let file =  req.files;
      //  console.log('file1:',file)
      const uploadResult = await QiniuService.upload(file[0])
      // 如果上线后配置了固定域名这里可以不要了，直接从配置返回
      let bucketInfo = await QiniuService.getBucketDomain();
      console.log('bucketInfo:',bucketInfo)
      if(uploadResult.code==200){
        res.json({ ...success, data: Object.assign(uploadResult.data,bucketInfo)})
      }else{
        res.json({...fail,data:uploadResult.data})
      }
     
      
    } catch (error) {
      next(error);
    }
  }

}

module.exports = QiniuController;