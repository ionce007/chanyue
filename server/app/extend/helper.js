"use strict";

const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
// this.ctx.helper.relative  <%=helper.relative(item.time)%>

exports.md5 = (str) => {
  return require("crypto").createHash("md5").update(str).digest("hex");
};

// 无限极分类tree
exports.tree = (arr) => {
  const result = [];
  const dataTable = {};
  for (let i = 0; i < arr.length; i++) {
    const d = arr[i];
    dataTable[d.id] = d;
    if (d.pid !== 0 && dataTable[d.pid]) {
      const childrenOfParent = dataTable[d.pid].children;
      if (childrenOfParent && childrenOfParent.length) {
        childrenOfParent.push(d);
      } else {
        dataTable[d.pid].children = [d];
      }
    } else {
      result.push(d);
    }
  }
  return result;
};

// 返回id父级所有栏目 位置
exports.treeById = (id, source) => {
  const arr = [];
  const findId = (id, source) => {
    for (let i = 0, item; i < source.length; i++) {
      item = source[i];
      if (item.id == id) {
        arr.unshift(item);
        if (item.pid != 0) {
          findId(item.pid, source);
        }
      }
    }
  };
  findId(id, source);
  const _path = [];
  arr.forEach((item) => {
    _path.push("/" + item.pinyin);
    item.path = _path.join("");
  });
  return arr;
};

// 返回
// exports.getChildrenId = (id, source) => {
//   const arr = [];
//   const ids = [];

//   source.forEach(item => {
//     if (item.id == id) {
//       arr.push(item);
//     }
//   });

//   if (arr.length > 0 && arr[0].children) {
//     arr[0].children.forEach(sub => {
//       ids.push(sub.id);
//     });
//   }

//   ids.push(id);
//   return { arr, ids };
// };

// 获取子栏目
exports.getChildrenId = (py, source) => {
  let cate = {};
  let id = "";
  source.forEach((item) => {
    if (item.pinyin == py || item.id == py) {
      cate = item;
      id = item.id;
    }
  });
  return { cate, id };
};

// 设置token this.ctx.token this.app.token
exports.setToken = (data, key, time) => {
  const token = jwt.sign(data, key, {
    expiresIn: time,
  });
  return token;
};

// 获取token
exports.getToken = (token, key) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, key, async (err, decode) => {
      if (err) {
        reject(err);
        console.error(err);
      } else {
        resolve(decode);
      }
    });
  });
};

// 过滤 body标签
exports.filterBody = (str) => {
  const result = /<body[^>]*>([\s\S]*)<\/body>/.exec(str);
  if (result && result.length === 2) return result[1];
  return str;
};

exports.pc = (str) => {
  if (
    str.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    return false;
  }
  return true;
};

// 获取图片
exports.filterImgFromStr = (str) => {
  const imgReg = /<img.*?(?:>|\/>)/gi; // 匹配出图片img标签
  const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i; // 匹配出图片src属性
  const arr = str.match(imgReg);
  const imgArr = [];
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      const src = arr[i].match(srcReg);
      if (src[1]) {
        imgArr.push(src[1]);
      }
    }
  }
  return imgArr;
};

/**
 * @description 删除上传的图片
 * @param {*} link 字符串
 */
exports.delImg = (link) => {
  // 判断文件是否存在
  fs.access(link, function (err) {
    if (err) {
      console.error(err);
    } else {
      fs.unlink(link, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }
  });
};

exports.mkdirsSync = (dirname) => {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
};

exports.ip = (req) => {
  return (req.headers["x-real-ip"] || req.connection.remoteAddress).slice(7);
};

/**
 * @example [{name:'yanyutao',age:33}] => {yanyutao:33}
 * @description 数组变对象：将数组中的key作为对象的key，其余作为value
 */
exports.convertArrayToObject = (array, key) => {
  //数组是否为空
  if (!Array.isArray(array) || array.length === 0) {
    return {};
  }
  const result = {};
  for (const item of array) {
    const { [key]: mark, ...rest } = item;
    if (mark) {
      result[mark] = { ...rest };
    }
  }
  return result;
};

/**
 * @description 过滤非必要字段
 * @param {Array} data 原始数组数据
 * @param {Array} fields  需要的字段
 * @returns {Array} 返回最终的数组
 */
const dayjs = require("dayjs");
require("dayjs/locale/zh-cn");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime); // 相对时间
dayjs.locale("zh-cn"); // 使用本地化语言

exports.filterFields = (data, fields) => {
  if (!Array.isArray(data) || data.length === 0) {
    return [];
  }

  return data.map((item) => {
    // item.createdAt = dayjs(item.createdAt).format('YYYY-MM-DD');
    item.createdAt = dayjs(item.createdAt).fromNow().replace(" ", "");
    // item.createdAt = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss');
    const filteredItem = {};
    for (const field of fields) {
      if (item.hasOwnProperty(field)) {
        filteredItem[field] = item[field];
      }
    }
    return filteredItem;
  });
};

/**
 * @description 格式化时间
 * @param {Array} data 数组
 * @param {Boolean} time 是否开启具体时间
 * @param {String} format YYYY-MM-DD HH:mm:ss
 * @returns 返回处理过的数组
 */
exports.formatDay = (data, time = false,format = "YYYY-MM-DD HH:mm:ss") => {
  data.forEach((item) => {
    if (item.createdAt) {
      item.createdAt = time
        ? dayjs(item.createdAt).format(format)
        : dayjs(item.createdAt).fromNow().replace(" ", "");
    }
  });
  return data;
};
