const express = require("express");
const cookieParser = require("cookie-parser");
const favicon = require("serve-favicon");
const morgan = require("morgan");
const path = require("path");

const config = require("../config/config.js");
const auth = require("./auth.js");
const helper = require("../extend/helper.js");

const { logger, appRoot, cookieKey } = config;
module.exports = function (app) {
  //挂在配置文件 req.app可以获取 const {config} = req.app.locals
  app.locals.config = config;
  app.locals.auth = auth;
  app.locals.helper = helper;

  //日志
  app.use(morgan(logger.level));

  // favicon 图标
  app.use(favicon(path.join(approot, "public/favicon.ico")));

  //cookie
  app.use(cookieParser(cookieKey));

  //解析接口 json & url
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  //配置模板引擎
  app.set("view options", {
    debug: process.env.NODE_ENV != "prd",
    cache: process.env.NODE_ENV == "prd",
    minimize: true,
  });
  app.set("view engine", "html");
  app.set("views", path.join(appRoot, "view"));
  app.engine(".html", require("express-art-template"));

  //使用静态资源
  app.use("/public", express.static(path.join(appRoot, "public")));
};
