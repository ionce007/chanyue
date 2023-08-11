"use strict";
const dayjs = require("dayjs");
const { template } = require("../../../config/config.js");
const HomeService = require(`../../../service/web/default/home.js`);
const {
  getChildrenId,
  treeById,
  formatDay,
  filterFields,
} = require("../../../extend/helper.js");

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
      next(error);
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
      const id = cid || navSub.cate.id || "";
      if (!id) {
        res.redirect("/404.html");
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
        ...data,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  // 详情页
  static async article(req, res, next) {
    try {
      const { id } = req.params;
      if (!id) {
        res.redirect("/404.html");
        return;
      }

      // 文章列表
      const article = await ArticleService.detail(id);
      if (!article) {
        res.redirect("/404.html");
        return;
      }

      article.tags = await CommonService.fetchTagsByArticleId(id);
      let pdf = article.tags.filter((item) => item.name == "pdf");

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

      //模板配置
      let config = {
        pdf: pdf.length > 0 ? `web/${template}/article-pdf.html` : "",
        default: `web/${template}/article.html`
      };

      await res.render(config["pdf"] ||config.default, {
        ...data,
        article,
        navSub,
        position,
        pre,
        next,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  // 单页
  static async page(req, res, next) {
    try {
      const { cate, id } = req.params;

      // 当前栏目和当前栏目下所有子导航
      let cid = "";
      let navSub = null;
      let article = null;

      if (!id && !cate) {
        res.redirect("/404.html");
        return;
      }

      //通过拼音找到对应的栏目
      if (cate) {
        navSub = getChildrenId(cate, res.locals.category);
        //获取栏目id
        cid = navSub.cate.id || "";
      }

      //文章id查找栏目id
      if (id) {
        // 文章列表
        article = await ArticleService.detail(id);
        // 栏目id
        cid = article.cid || "";
      }

      //没找到栏目 去404
      if (!cid) {
        res.redirect("/404.html");
        return;
      }

      //获取单页列表
      const data = await HomeService.page(cid, 1, 20);
      if (data.list.length == 0) {
        res.redirect("/404.html");
        return;
      } else {
        article = await ArticleService.detail(data.list[0].id);
      }

      //没找到文章 去404
      if (Object.keys(article).length == 0) {
        res.redirect("/404.html");
        return;
      }

      article.createdAt = dayjs(article.createdAt).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      article.updatedAt = dayjs(article.updatedAt).format(
        "YYYY-MM-DD HH:mm:ss"
      );

      // 当前位置
      const position = treeById(article.cid, res.locals.category);

      // 增加数量
      await ArticleService.count(article.id);

      //页面模板配置
      const config = {
        chanyue: `web/${template}/chanyue.html`,
        default: `web/${template}/page.html`
      };

      await res.render(config[cate] || config.default, {
        data: data.list,
        navSub,
        position,
        article,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  // 搜索页
  static async search(req, res, next) {
    try {
      const page = req.params.id || 1;
      const keywords = req.params.keywords;
      const pageSize = 10;
      // 文章列表
      const data = await ArticleService.search(keywords, page, pageSize);
      data.list.forEach((ele) => {
        ele.updatedAt = dayjs(ele.updatedAt).format("YYYY-MM-DD HH:mm:ss");
      });
      await res.render(`web/${template}/search.html`, { keywords, data });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  // 搜索页
  static async tag(req, res, next) {
    try {
      const { path, id } = req.params;
      const page = id || 1;
      const pageSize = 10;
      // 文章列表
      const data = await HomeService.tags(path, page, pageSize);
      data.list.forEach((ele) => {
        ele.updatedAt = dayjs(ele.updatedAt).format("YYYY-MM-DD HH:mm:ss");
      });
      await res.render(`web/${template}/tag.html`, { data, path });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

module.exports = HomeController;
