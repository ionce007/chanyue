const {helper: {success}} = require('../../../common/BaseController');
const path = require('path');
const SysAppService = require('../service/sysApp.js');

class SysAppController  {

  // 查
  static async find(req, res, next) {
    try {
      const data = await SysAppService.find();
      res.json({ ...success, data: data })
    } catch (err) {
      next(err);
    }
  }

   // app配置
  static async config(req, res, next) {
    try {
      const data = await SysAppService.config();
      res.json({ ...success, data: data })
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await SysAppService.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

}

module.exports = SysAppController;
