const express = require('express');
const { port, appName, version } = require('./app/config/config');
const run = require('./app/middleware/run.js');
const app = express();
//运行
run(app);
app.listen(port, () => {
	console.log(`server started at localhost:${port} appName:${appName}  version:${version}`)
});