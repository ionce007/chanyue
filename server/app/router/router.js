const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

const { template } = require('../config/config.js');
const api = require('./api/index.js');
const weixin = require('./weixin/index.js');
const web = require(`./web/${template}/index.js`);
const open = require(`./open/index.js`);
const init = require('../middleware/init.js');

//前台
router.use('/', web);

//接口
router.use('/api', api);

//小程序
router.use('/weixin', weixin);

//开源api
router.use('/open', open);

//机器人抓取
router.get('/robots.txt', function (req, res, next) {
	let stream = fs.createReadStream(path.join(__dirname, '../public/robots.txt'), { flags: 'r' });
	stream.pipe(res);
});

//404处理
router.use(init(), (req, res, next) => {
	res.render(`web/default/404.html`,);
});

//在所有组件挂在之后处理错误中间件
router.use(init(), (err, req, res, next) => {
	console.log('err-req------>', req.method, req.url);
	console.log('err-info----->', err)
	let data = { url: req.url, method: req.method, error: err.message }
	if(req.is('html')){
		res.render(`web/default/500.html`,{data});
	}else{
		res.json({code:500,data,msg:data.error})
	}
});

module.exports = router;
