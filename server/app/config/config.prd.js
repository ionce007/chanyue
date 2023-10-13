"use strict";
const fs = require("fs");
const path = require("path");
const defaultConfig = require("./config.default.js");

const config = {...defaultConfig};

// add mysql config
config.mysql = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456",
  database: "chanyue",
};

//sql debug
config.debug = false;

// add your user config here
config.template = "default";


// 七牛云上传相关配置
config.qiniuOss = {
  accessKey: "xxx", //ak
  secretKey: "xxx", //sk
  domain: "xxx", //域名
  bucket: "xxx", //空间名称
};
config.upload = "default"; // default 普通上传 qiniuyun 七牛云上传

module.exports = config;
