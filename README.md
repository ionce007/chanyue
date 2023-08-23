# <center>![禅悦内容管理系统](https://gitee.com/yanyutao0402/chanyue-cms/raw/master/client/admin/public/admin/img/logo.png)禅悦内容管理系统（`chanyue-cms`）</center>

 禅悦cms（chanyue-cms）基于express+mysql的一款轻量级高质量实用型cms管理系统。它具备广泛应用的企业、图片、新闻、资讯、软件、博客、文章等多种类型网站开发功能，灵活方便前端开发者进行二次开发。

## 🌈系统特色

* 轻量、灵活、稳定、高性能。
* 专注于`seo`,伪静态`html`和拼音导航，灵活设置关键词和描述。
* 基于`knex`,高防`sql`注入，接口权限校验，为安全提供保障。
* 碎片功能，支持零碎文案配置，方便各类灵活文案配置。
* 支持扩展模型，字段配置，可动态生成表，超强扩展。
* 长期维护更新

## ⛱️软件架构

**client技术栈**

后台管理界面admin

* vue3
* vue-router
* pina
* element-plus
* vite4
* tinymce
  
**服务端技术栈**

* nodejs v18.14.2+
* express 4.18+
* mysql v5.7.26
* knex (sql操作)
* art-tempate v4.13.2+
* pm2   v5.2.2
* jwt  
* pm2 (prd)
* nodemon (dev)

## 🚧功能介绍

* 站点信息
* 管理员登模块
* 无限极栏目分类
* 文章模块
* 扩展模型
* 标签管理
* 碎片管理 (广告，碎片文案，公司地址、电话、名称，微信等万能模块)
* 友情链接
* 在线留言

### 🍅️案例

* 案例一 [世界气功网](http://www.shijieqigong.com/) `http://www.shijieqigong.com/`
* 案例二 [世界大健康运动联盟](http://www.worldhealthgames.com/) `http://www.worldhealthgames.com/`
* 案例三 [北京辉达环保科技有限公司](http://www.huidaep.com/) `http://www.huidaep.com/`

## ⚡ 技术文档

**技术文档 <https://yanyutao0402.gitee.io/chanyue-doc>**

## ❤️项目关注

* 码云：<https://gitee.com/yanyutao0402/chanyue-cms>

 **走过路过的老铁,帮忙点个小 ⭐⭐⭐⭐⭐,🤝🤝🤝🤝🤝,🙏🙏🙏🙏🙏**

## 👴项目交流

 欢迎💝
 各位大佬加入微信群交流学习，🧒 👧 👱  🧔 👴 👵
 联系微信: `yanyutao2014` 🍇 🍋 🍌

![交流微信群](https://gitee.com/yanyutao0402/chanyue-cms/raw/master/server/app/public/template/default/img/wechat-group.jpg)

## 🍒更新日志 2023-08-22

* 【新增功能】 支持文本转语音在线播放

## 🍒更新日志 2023-08-15

* 【新增功能】 支持中英文多语言

## 🍒更新日志 2023-08-11

* 支持pdf在线预览，按需加载，支持pc/wap

## 🍒更新日志 2023-08-10

* 完成所有功能开发。

## 🍒更新日志 2023-08-05

* 完成默认模板开发，适配pc、wap。删除广告管理模块，用碎片模块替代。

## 🍒更新日志 2023-07-24

* 模板引擎ejs替换成高性能模板引擎art-Template

## 🍒更新日志 2023-07-09

* 后台管理界面重构升级，支持动态配置路由

## 🍒更新日志 2023-04-01

* 修复knex重构导致不显示分页问题
