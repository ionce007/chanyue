const express = require('express');
const router = express.Router();
const init = require('../../../middleware/init.js');
const { template } = require('../../../config/config.js');
const HomeController = require(`../../../controller/web/default/home.js`);

// 首页模板
router.get('/', init(), HomeController.index);

// 分类
router.get([
  '/list/:cid', //兼容old
  '/:cate/index.html',
  '/:cate/index:current.html',
  '/:cate1/:cate/index.html',
  '/:cate1/:cate/index:current.html',
  '/:cate2/:cate1/:cate/index.html',
  '/:cate2/:cate1/:cate/index:current.html',
  '/:cate3/:cate2/:cate1/:cate/index.html',
  '/:cate3/:cate2/:cate1/:cate/index:current.html'], init(), HomeController.list);

// 文章页
router.get([
  '/article/:id', //兼容old
  '/article/:id.html', //兼容old
  '/article-:id.html',
  '/:cate/article-:id.html',
  '/:cate1/:cate/article-:id.html',
  '/:cate2/:cate1/:cate/article-:id.html',
  '/:cate2/:cate1/:cate/article-:id.html',
  '/:cate3/:cate2/:cate1/:cate/article-:id.html',
], init(), HomeController.article);

// 搜索页
router.get([
  '/search/:keywords/index.html',
  '/search/:keywords/index:id.html'], init(), HomeController.search);

// router.get('/page/:id', init(), HomeController.page);

module.exports = router;