const express = require("express");
const cookieParser = require("cookie-parser");
const favicon = require("serve-favicon");
const morgan = require("morgan");
const { setPath } = require("../utils/utils");
// const { logger, appRoot, cookieKey } = require("../config/config.js");
const config =  require("../config/config.js");
const auth = require('../middleware/auth.js');

const {logger, appRoot, cookieKey} = config;

module.exports = function (app) {

  //加载配置文件 req.app可以获取
  app.locals.config = config;
  app.locals.auth = auth;

  //日志
  app.use(morgan(logger.level));

  // favicon 图标
  app.use(favicon(setPath(appRoot, "public/favicon.ico")));

  //cookie
  app.use(cookieParser(cookieKey));

  //解析接口 json & url
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  //配置模板引擎
  app.set("view options", {
    debug: process.env.NODE_ENV !== "prd",
    cache: process.env.NODE_ENV == "prd",
    minimize: true,
  });
  app.set("view engine", "html");
  app.set("views", setPath(appRoot, "view"));
  app.engine(".html", require("express-art-template"));

  //使用静态资源
  app.use("/public", express.static(setPath(appRoot, "public")));
};
