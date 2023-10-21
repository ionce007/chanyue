"use strict";
const BaseService = require("./base");
const {knex} = require('../../config.js');
class SysAppService  {
  static model = "sys_app";
  
  static async find() {
    try {
      let res = await BaseService.all(SysAppService.model);
      return res[0];
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }

  static async config() {
    try {
      let res =  await knex.select(["template", "uploadWay"])
      .from(SysAppService.model)
      .limit(1);
      return res[0];
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }




  static async update(body) {
    const { id } = body;
    delete body.id;
    delete body.createdAt;
    delete body.updatedAt;
    try {
        const result = await knex(SysAppService.model)
          .where("id", "=", id)
          .update(body);
        return result ? "success" : "fail";
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }
}

module.exports = SysAppService;
