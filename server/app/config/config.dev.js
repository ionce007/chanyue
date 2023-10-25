"use strict";
const fs = require("fs");
const path = require("path");
const configBase = require("./config.base.js");

const config = {...configBase};

// add mysql config
config.mysql = {
  host: "mysql.sqlpub.com",
  port: "3306",
  user: "huangm",
  password: "34756fb129acd30c",
  database: "chanyue",
};


//sql debug
config.debug = true;


module.exports = config;
