const express = require('express');
const {port} = require('./app/config/config');
const run = require('./app/middleware/run.js');
const app = express();
//通用配置
run(app);
app.listen(port, () => {
	console.log(`server started at localhost:${port}`)
});