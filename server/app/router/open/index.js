const express = require('express');
const router = express.Router();
const OpenController = require('../../controller/open/index.js');
const WeiXinController = require('../../controller/open/weixin.js');
//微信小程序登录
router.post('weixin/login', WeiXinController.login);
//60秒读懂世界 
router.get('/60s', OpenController.news60s);
//每日简报 
router.get('/jianbao', OpenController.jianbao);
//tts 文本转语音流体
router.get('/tts', OpenController.gtts);

module.exports = router;