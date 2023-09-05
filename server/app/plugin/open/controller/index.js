"use strict";
const {
  config,
  knex,
  helper: { success, fail, filterBody },
} = require("../../../common/BaseService.js");

class OpenController {
  //60秒读懂世界
  static async news60s(req, res, next) {
    try {
      const url = `https://api.qqsuu.cn/api/dm-60s?type=json`;

      if (global.fetch) {
        const result = await fetch(url);
        const { name, time, data } = await result.json();
        res.render(`60s.html`, { name, time, data });
      }
      next({ message: "当前node版本还不支持fetch" });
    } catch (error) {
      next(error);
    }
  }

  //简报
  static async jianbao(req, res, next) {
    try {
      if (global.fetch) {
        const url = `https://api.qqsuu.cn/api/dm-bulletin`;
        const result = await fetch(url);
        const { name, time, data } = await result.json();
        res.render(`jianbao.html`, { data });
      }
      next({ message: "当前node版本还不支持fetch" });
    } catch (error) {
      next(error);
    }
  }

  static async getIp() {
    try {
      if (global.fetch) {
        const url = `https://qifu-api.baidubce.com/ip/local/geo/v1/district`;
        const result = await fetch(url);
        const { name, time, data } = await result.json();
        res.render(`jianbao.html`, { data });
      }
      next({ message: "当前node版本还不支持fetch" });
    } catch (error) {
      next(error);
    }
  }

  static async pdf(req, res, next) {
    try {
      if (global.fetch) {
        // 获取 PDF 文件的路径
        const pdfRemotePath = req.query.file || "";
        const response = await fetch(pdfRemotePath);
        if (!response.ok) {
          throw new Error("Failed to fetch PDF file");
        }
        // 以流的方式读取响应体
        const stream = response.body;
        // 设置响应头，指定内容为 PDF 格式
        res.setHeader("Content-Type", "application/pdf");
        // 将读取的文件流传输给响应
        stream.pipe(res);
      }
      next({ message: "当前node版本还不支持fetch" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OpenController;
