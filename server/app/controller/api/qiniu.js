'use strict';
const BaseController = require('./base');
const { success, fail } = require('../../extend/api.js');
const QiniuService = require('../../service/api/qiniu.js');

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


}

module.exports = QiniuController;