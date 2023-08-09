"use strict";
const dayjs = require("dayjs");
const { template } = require("../../../config/config.js");
const HomeService = require(`../../../service/web/default/home.js`);
const { getChildrenId, treeById, formatDay, filterFields } = require("../../../extend/helper.js");

const CommonService = require("../../../service/web/default/common.js");
const ArticleService = require("../../../service/api/article.js");

class HomeController {
  constructor() {
    // super()
  }
  // 首页
  static async index(req, res, next) {
    try {
      let result = {};
      if (!("slide" in res.locals)) {
        result = await HomeService.home();
        res.locals = { ...res.locals, ...result };
      }
      res.render(`web/${template}/index.html`, result);
    } catch (error) {
      console.error(error);
    }
  }

  // 列表页
  static async list(req, res, next) {
    try {
      const { cate, current, cid } = req.params;
      const currentPage = parseInt(current) || 1;
      const pageSize = 10;

      // 当前栏目和当前栏目下所有子导航
      let navSub = getChildrenId(cate || cid, res.locals.category);
      // const navSubField = ["id", "name", "path"];
      // navSub.cate.children = filterFields(navSub.cate.children, navSubField);

      //获取栏目id
      const id = cid || navSub.cate.id || '';
      if (!id) {
        res.redirect("/");
        return;
      }

      // 当前位置
      let position = treeById(id, res.locals.category);
      const positionField = ["id", "name", "path"];
      position = filterFields(position, positionField);

      //列表页全量数据
      const data = await HomeService.list(id, currentPage, pageSize);
      await res.render(`web/${template}/list.html`, {
        position,
        navSub,
        ...data
      });

    } catch (error) {
      console.error(error);
    }
  }

  // 详情页
  static async article(req, res, next) {
    try {
      const { id } = req.params;
      if (!id) {
        res.redirect("/");
        return;
      }

      // 文章列表
      const article = await ArticleService.detail(id);
      if (!article) {
        res.redirect("/");
        return;
      }

      // 栏目id
      const cid = article.cid || "";

      article.createdAt = dayjs(article.createdAt).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      article.updatedAt = dayjs(article.updatedAt).format(
        "YYYY-MM-DD HH:mm:ss"
      );

      // 当前栏目和当前栏目下所有子导航
      const navSub = getChildrenId(cid, res.locals.category);

      // 当前位置
      const position = treeById(cid, res.locals.category);

      // 增加数量
      await ArticleService.count(id);

      //上一页
      const pre = await ArticleService.pre(id, cid);

      //下一页
      const next = await ArticleService.next(id, cid);

      //热门 推荐 图文
      const data = await HomeService.article(cid);

      await res.render(`web/${template}/article.html`, {
        ...data,
        article,
        navSub,
        position,
        pre,
        next
      });
    } catch (error) {
      console.error(error);
    }
  }

  // 单页
  static async page(req, res, next) {
    try {
      const { cate, current, cid } = req.params;

      // 当前栏目和当前栏目下所有子导航
      let navSub = getChildrenId(cate || cid, res.locals.category);
      //获取栏目id
      const id = cid || navSub.cate.id || '';
      if (!id) {
        res.redirect("/");
        return;
      }


      //列表页全量数据
      const data = await HomeService.page(id, 1, 20);
      console.log('111', data)
      let article = []
      if (data.list.length > 0) {
        article = await ArticleService.detail(data.list[0].id);
        if (!article) {
          res.redirect("/");
          return;
        }
      } else {
        res.redirect("/404.html");
      }

      console.log('data--------', data)
      // 当前位置
      const position = treeById(article.cid, res.locals.category);

      // 点击数量
      await res.render(`web/default/page.html`, { data, navSub, position, article });

    } catch (error) {
      console.error(error);
    }
  }

  // 搜索页
  static async search(req, res, next) {
    try {
      const page = req.params.id || 1;
      const keywords = req.params.keywords;
      const pageSize = 10;

      // 广告
      let ad = await HomeService.ad(1, 3);
      if (ad.length > 0) {
        const obj = {};
        ad.forEach((item) => {
          obj[item.mark] = item;
        });
        ad = obj;
      }

      // 文章列表
      const list = await ArticleService.search(keywords, page, pageSize);
      list.list.forEach((ele) => {
        ele.updatedAt = dayjs(ele.updatedAt).format("YYYY-MM-DD HH:mm:ss");
      });

      await res.render(`web/${template}/search.html`, { keywords, list, ad });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = HomeController;
