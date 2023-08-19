"use strict";
const BaseService = require("./base");
const knex = require("../../config/config.knex.js");
class SysMenuService extends BaseService {
  static model = "sys_menu";
  constructor(props) {
    super(props);
  }

  // 增
  static async create(body) {
    const { app } = this;
    try {
      const result = await BaseService.insert(SysMenuService.model, body);
      return result ? "success" : "fail";
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }

  // 删
  static async delete(id) {
    try {
      const result = await knex(SysMenuService.model)
        .where("id", "=", id)
        .del();
      return result ? "success" : "fail";
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }

  // 改
  static async update(body) {
    const { id } = body;
    delete body.id;
    try {
      const result = await knex(SysMenuService.model)
        .where("id", "=", id)
        .update(body);
      return result ? "success" : "fail";
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }

  // 查全部栏目
  static async find() {
    try {
      const result = await BaseService.all(SysMenuService.model);
      return result;
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }

  // 查栏目
  static async findId(id) {
    try {
      const data = await knex(SysMenuService.model)
        .where("id", "=", id)
        .select();
      return data[0];
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }

  // 查子栏目
  static async findSubId(id) {
    try {
      const result = await knex(SysMenuService.model)
        .where("pid", "=", id)
        .select();
      return result;
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }

  // 搜索栏目
  static async search(key) {
    try {
      const result = key
        ? await knex(SysMenuService.model)
            .whereRaw("name COLLATE utf8mb4_general_ci LIKE ?", [`%${key}%`])
            .orderBy("id", "desc", "sort")
        : await knex(SysMenuService.model).orderBy("id", "asc", "sort");
      return result;
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }
}

module.exports = SysMenuService;
