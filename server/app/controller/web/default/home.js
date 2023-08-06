"use strict";
const dayjs = require("dayjs");
const { template } = require("../../../config/config.js");
const HomeService = require(`../../../service/web/default/home.js`);
const { getChildrenId, treeById } = require("../../../extend/helper.js");

const CommonService = require("../../../service/web/default/common.js");
const ArticleService = require("../../../service/api/article.js");

class HomeController {
  constructor() {
    // super()
  }
  // 首页
  static async index(req, res, next) {
    try {
      if ("slide" in res.locals) {
        res.render(`web/${template}/index.html`);
        return;
      }
      let result = await HomeService.home();
      res.locals = { ...res.locals, ...result };
      res.render(`web/${template}/index.html`, result);
    } catch (error) {
      console.error(error);
    }
  }

  // 列表页
  static async list(req, res, next) {
    try {
      const { cate, current, cid } = req.params;
      const currentPage = current || 1;
      const pageSize = 10;

      // 当前栏目和当前栏目下所有子导航
      const navSub = getChildrenId(cate || cid, res.locals.category);
      const id = cid ? cid : navSub.cate.id;
      if (!id) {
        res.redirect("/");
        return;
      }

      // 当前位置
      const position = treeById(id, res.locals.category);

      // 广告
      let ad = await HomeService.ad(1, 3);
      const obj = {};
      ad.forEach((item) => {
        obj[item.mark] = item;
      });
      ad = obj;

      // 文章列表
      const data = await HomeService.list(id, currentPage, pageSize);
      data.list.forEach((ele) => {
        ele.createdAt = dayjs(ele.createdAt).format("MM-DD");
      });
      // 本类推荐
      const tj = await HomeService.getArticleListById(id, 2, 5);

      // 本类热门
      const hot = await HomeService.getArticlePvList(id, 10);

      // 本类图文
      const pic = await HomeService.getArticleImgList(id, 10);

      await res.render(`web/${template}/list.html`, {
        position,
        list: data,
        navSub,
        ad,
        tj,
        hot,
        pic,
      });
    } catch (error) {
      console.error(error);
    }
  }

  // 详情页
  static async article(req, res, next) {
    try {
      const id = req.params.id.replace(".html", "");

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

      // 广告
      let ad = await HomeService.ad(1, 3);
      if (ad) {
        const obj = {};
        ad.forEach((item) => {
          obj[item.mark] = item;
        });
        ad = obj;
      }

      // 当前栏目和当前栏目下所有子导航
      const navSub = getChildrenId(cid, res.locals.category);

      // 当前位置
      const position = treeById(cid, res.locals.category);

      // 增加数量
      await ArticleService.count(id);

      // 上一页
      const pre = await ArticleService.pre(id, cid);

      // 下一页
      const next = await ArticleService.next(id, cid);

      // 本类推荐
      const tj = await HomeService.getArticleListById(cid, 2, 5);

      // 本类热门
      const hot = await HomeService.getArticlePvList(cid, 10);

      // 本类图文
      const pic = await HomeService.getArticleImgList(cid, 10);

      await res.render(`web/${template}/article.html`, {
        position,
        navSub,
        ad,
        article,
        pre,
        next,
        tj,
        hot,
        pic,
      });
    } catch (error) {
      console.error(error);
    }
  }

  // 单页
  // static async page(req, res, next) {
  //   try {
  //     const id = req.params.id;
  //     if (!id) {
  //       res.redirect('/');
  //       return;
  //     }
  //     // 广告
  //     let ad = await HomeService.ad(1, 3);
  //     const obj = {};
  //     ad.forEach(item => {
  //       obj[item.mark] = item;
  //     });
  //     ad = obj;

  //     // 文章列表
  //     const article = await PageService.article(id);
  //     article.createdAt = dayjs(article.createdAt).format('YYYY-MM-DD HH:mm:ss');
  //     article.updatedAt = dayjs(article.updatedAt).format('YYYY-MM-DD HH:mm:ss');

  //     // 当前栏目和当前栏目下所有子导航
  //     const navSub = getChildrenId(article.cid, res.locals.category);

  //     // 当前位置
  //     const position = treeById(article.cid, res.locals.category);

  //     // 点击数量

  //     await res.render(`web/default/page.html`, { article, navSub, ad, position });

  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

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
