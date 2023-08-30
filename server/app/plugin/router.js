const express = require('express');
const router = express.Router();
const OpenController = require('./open/controller/index.js');
const WeiXinController = require('./open/controller/weixin.js');
//微信小程序登录
router.post('weixin/login', WeiXinController.login);
//60秒读懂世界 
router.get('/60s', OpenController.news60s);
//每日简报 
router.get('/jianbao', OpenController.jianbao);
module.exports = router;