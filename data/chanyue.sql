/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50726 (5.7.26)
 Source Host           : localhost:3306
 Source Schema         : chanyue

 Target Server Type    : MySQL
 Target Server Version : 50726 (5.7.26)
 File Encoding         : 65001

 Date: 15/10/2023 21:41:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NULL DEFAULT NULL,
  `updatedAt` datetime NULL DEFAULT NULL,
  `status` tinyint(2) NOT NULL DEFAULT 1 COMMENT '1 启用 2 关闭',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '管理员后期换成sys_user' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'chanyue', '1d73632ebe6497078f6744bf79bd2861', '2020-08-15 09:19:40', '2020-08-15 09:19:40', 1);

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NULL DEFAULT NULL COMMENT '栏目id',
  `sub_cid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '其它栏目id',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标题',
  `short_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '短标题',
  `tag_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标签id',
  `attr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '1头条 2推荐 3轮播 4热门',
  `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'seo标题',
  `seo_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '关键词',
  `seo_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '描述',
  `source` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '来源',
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '作者',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '文章简述',
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '缩略图',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '文章内容',
  `status` tinyint(2) NULL DEFAULT 0 COMMENT '0 发布 1 不发布',
  `pv` int(10) NULL DEFAULT 0 COMMENT '浏览量',
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '外链',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 48 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '文章表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, 6, '', '国内常见的基于node开发的cms系统', '', '', '3', '', '', '', '', '', '1.chanyue-cms\n禅悦内容管理系统，基于nodejs&nbsp;express&nbsp;mysql&nbsp;knex&nbsp;jwt&nbsp;vue3&nbsp;进行开发的一套实用轻量cms系统，且提供丰富的api数据接口。常用企业网站，微信小程序官网，图片网站，新闻资讯，软件下载网站，博客，文章等诸多文章类型网站开发，也适用于前端二次开发。\ngitee:https://gitee.com/yanyutao0402/chanyue-cms', '/public/cover/09.jpg', '<h1>1.chanyue-cms</h1>\n<p>禅悦内容管理系统，基于<code>nodejs</code>&nbsp;<code>express</code>&nbsp;<code>mysql</code>&nbsp;<code>knex</code>&nbsp;<code>jwt</code>&nbsp;<code>vue3</code>&nbsp;进行开发的一套实用轻量cms系统，且提供丰富的api数据接口。常用企业网站，微信小程序官网，图片网站，新闻资讯，软件下载网站，博客，文章等诸多文章类型网站开发，也适用于前端二次开发。</p>\n<p>gitee:https://gitee.com/yanyutao0402/chanyue-cms</p>\n<h1>2.DoraCMS</h1>\n<p><code>DoraCMS</code>&nbsp;是基于 nodejs 的内容管理系统，所用技术栈包含 eggjs、mongodb、vue、single-spa 等。代码结构清晰，目录规划合理，项目整体考虑到了从普通用户使用，开发者开发，编译，发布的整个流程。</p>\n<p>gitee:https://github.com/doramart/DoraCMS/</p>\n<h1>3.nodercms</h1>\n<p>nodercms基于nodejs mongodb开发的简单的内容管理系统。</p>\n<p>官网：http://www.nodercms.com/</p>', 0, 63, '', '2023-06-27 22:48:40', '2023-10-13 13:24:52');
INSERT INTO `article` VALUES (2, 4, '', '帅气青年', '', '', '3,2', '', '', '', '', '', '', '/public/template/default/img/11.jpg', '<p><img src=\"/public/template/default/img/11.jpg\"></p>', 0, 7, '', '2023-08-06 10:16:35', '2023-08-06 10:16:35');
INSERT INTO `article` VALUES (3, 4, '', '可爱小姑娘', '', '', '3', '', '', '', '', '', '', '/public/template/default/img/12.jpg', '<p><img src=\"/public/template/default/img/12.jpg\" alt=\"\" width=\"455\" height=\"290\"></p>', 0, 8, '', '2023-08-06 10:18:03', '2023-08-06 10:18:03');
INSERT INTO `article` VALUES (4, 4, '', '运动少女', NULL, '', '3', NULL, NULL, NULL, NULL, NULL, '', '/public/template/default/img/13.jpg', '<p><img src=\"/public/template/default/img/13.jpg\" alt=\"\" width=\"455\" height=\"290\"></p>', 0, 11, NULL, '2023-08-06 10:21:07', '2023-08-06 10:21:07');
INSERT INTO `article` VALUES (5, 4, '', '梦幻小岛', '', '', '3', '', '', '', '', '', '', '/public/uploads/default/2023/08/26/1692985281134.jpg', '<p><img src=\"/public/template/default/img/14.jpg\" alt=\"\" width=\"455\" height=\"290\"><img src=\"/public/uploads/default/2023/08/26/1692985290314.jpg\" alt=\"\" width=\"750\" height=\"1000\"></p>', 0, 14, 'http://www.baidu.com', '2023-08-06 10:21:44', '2023-08-06 10:21:44');
INSERT INTO `article` VALUES (6, 3, '', '「头条」推荐 6 个 火火火火 的开源项目', '', '2,1', '1', '', '', '', '', '', '本期推荐开源项目目录：ChatGPT 网页应用（AI）、AI 换脸（AI）、API 调用 Midjourney 进行 AI 画图（AI）、如何使用 Open AI 的 API？（AI）、中华古诗词数据库、动画编程。', '/public/cover/01.jpg', '<div>\n<p>本期推荐开源项目目录：</p>\n<ol>\n<li>\n<p>ChatGPT 网页应用（AI）</p>\n</li>\n<li>\n<p>AI 换脸（AI）</p>\n</li>\n<li>\n<p>API 调用 Midjourney 进行 AI 画图（AI）</p>\n</li>\n<li>\n<p>如何使用 Open AI 的 API？（AI）</p>\n</li>\n<li>\n<p>中华古诗词数据库</p>\n</li>\n<li>\n<p>动画编程</p>\n</li>\n</ol>\n<h2 data-id=\"heading-0\">01. ChatGPT 网页应用</h2>\n<p>基于 ChatGPT-Next-Web 二次开发的 ChatGPT 网页付费系统，包含用户管理模块和后台看板。</p>\n<p>ChatGPT-Admin-Web 付费系统包含七个模块，包括：内容接口、用户系统、支付、敏感词过滤、自由聊天、分销、收益</p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n<p>开源地址：<a title=\"https://github.com/AprilNEA/ChatGPT-Admin-Web\" href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FAprilNEA%2FChatGPT-Admin-Web\" target=\"_blank\" rel=\"noopener\">github.com/AprilNEA/Ch&hellip;</a></p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n<h2 data-id=\"heading-1\">02. AI 换脸</h2>\n<p>适用于视频聊天的 AI 换脸模型，你可以使用这个 AI 模型替换摄像头中的面部或视频中的面部。这是一些例子：</p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n<p>开源地址：<a title=\"https://github.com/iperov/DeepFaceLive\" href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fiperov%2FDeepFaceLive\" target=\"_blank\" rel=\"noopener\">github.com/iperov/Deep&hellip;</a></p>\n<h2 data-id=\"heading-2\">03. API 调用 Midjourney 进行 AI 画图</h2>\n<p>通过代理 MidJourney 的 Discord 频道，实现 api 形式调用AI绘图。</p>\n<p>前提是你要注册 Midjourney 账号、并在 Discord 创建在自己的频道和机器人，然后就可以根据这个项目的指引一步步去使用 Api 调用 Midjourney 了。</p>\n<p>开源地址：<a title=\"https://github.com/novicezk/midjourney-proxy\" href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fnovicezk%2Fmidjourney-proxy\" target=\"_blank\" rel=\"noopener\">github.com/novicezk/mi&hellip;</a></p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n<h2 data-id=\"heading-3\">04. 如何使用 Open AI 的 API？</h2>\n<p>Open AI-Cook Book 是一本 Open AI 的 API 使用指南，提供了一些通过 Open AI 的 API 搭建任务的示例代码。</p>\n<p>开源地址：<a title=\"https://github.com/openai/openai-cookbook\" href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fopenai%2Fopenai-cookbook\" target=\"_blank\" rel=\"noopener\">github.com/openai/open&hellip;</a></p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n<h2 data-id=\"heading-4\">05. 中华古诗词数据库</h2>\n<p>为了让古诗词这个人类瑰宝传承下去，中华古诗词数据库诞生了。</p>\n<p>这个项目整理了中华大量的古诗词，支持 Json 格式。数据库包含唐宋两朝近一万四千古诗人的作品, 接近 5.5 万首唐诗、26 万宋诗. 两宋时期1564位词人，21050首词。</p>\n<p>开源地址：<a title=\"https://github.com/chinese-poetry/chinese-poetry\" href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fchinese-poetry%2Fchinese-poetry\" target=\"_blank\" rel=\"noopener\">github.com/chinese-poe&hellip;</a></p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n<ol start=\"6\">\n<li>动画编程</li>\n</ol>\n<p>Motion Canvas 是一个 TypeScript 库，可以通过编程的方式生成动画，并提供所述动画的实时预览的编辑器。</p>\n<p>开源地址：<a title=\"https://github.com/motion-canvas/motion-canvas\" href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmotion-canvas%2Fmotion-canvas\" target=\"_blank\" rel=\"noopener\">github.com/motion-canv&hellip;</a></p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n<p>历史盘点</p>\n<p>逛逛 GitHub 每天推荐一个好玩有趣的开源项目。历史推荐的开源项目已经收录到 GitHub 项目，欢迎 Star：</p>\n<div class=\"code-block-extension-header\">\n<div class=\"code-block-extension-headerLeft\">\n<div class=\"code-block-extension-foldBtn\">&nbsp;</div>\n</div>\n<div class=\"code-block-extension-headerRight\"><span class=\"code-block-extension-lang\">arduino</span>\n<div class=\"code-block-extension-copyCodeBtn\">复制代码</div>\n</div>\n</div>\n<pre><code class=\"hljs language-arduino code-block-extension-codeShowNum\" lang=\"arduino\"><span class=\"code-block-extension-codeLine\" data-line-num=\"1\">地址：https:<span class=\"hljs-comment\">//github.com/Wechat-ggGitHub/Awesome-GitHub-Repo</span></span>\n</code></pre>\n<p><img class=\"medium-zoom-image\" src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d9699c1454af4e7aa91d4b7c2a2fb4fb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp\" alt=\"\" loading=\"lazy\"></p>\n<p>​</p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n</div>\n<p>&nbsp;</p>\n<div>作者：逛逛GitHub<br>链接：https://juejin.cn/post/7240690534075318309<br>来源：稀土掘金<br>著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</div>', 0, 46, '', '2023-08-06 10:24:34', '2023-10-15 21:40:10');
INSERT INTO `article` VALUES (7, 9, '', '什么是闭包，如何合理的使用闭包', '', '', '2', '', '', '', '', '', '闭包（closure）是指函数与其周围的状态（lexical environment，词法环境）的组合。这个环境包含了在函数声明时所能访问的所有变量和参数，并且在函数执行过程中始终存在。', NULL, '<div>\n<div>\n<p>闭包（closure）是指函数与其周围的状态（lexical environment，词法环境）的组合。这个环境包含了在函数声明时所能访问的所有变量和参数，并且在函数执行过程中始终存在。</p>\n<p>在JavaScript中，每当一个函数被创建时，就会创建一个新的词法环境。这个词法环境包含了函数中使用的所有变量和参数。如果这个函数返回一个函数，则返回的函数将持有这个词法环境，也就是说，它可以访问在父函数中定义的所有变量和参数。这种函数就称为闭包。</p>\n<p><strong>一、闭包的特点</strong></p>\n<p>闭包是指函数能够访问其定义时所在的词法作用域的特性。具体来说，闭包有以下几个特点：</p>\n<ol>\n<li>函数嵌套函数：闭包必须有函数嵌套函数的结构。</li>\n<li>内部函数可以访问外部函数的变量：内部函数可以访问外部函数中的变量，即使在外部函数执行完毕后，这些变量仍然可以被访问。</li>\n<li>外部函数返回内部函数：外部函数必须返回内部函数，才能形成闭包。</li>\n</ol>\n<p><strong>二、闭包的使用场</strong></p>\n<p><strong>封装变量：使用闭包可以实现变量的私有化，从而避免全局变量的污染。</strong></p>\n<p>通过将函数和函数内部定义的变量作为一个整体，形成私有作用域，从而实现变量的封装。具体来说，闭包可以将变量的作用域限制在函数内部，从而避免了全局变量的污染和外部对变量的直接访问。</p>\n<p>下面是一个简单的示例，演示了如何使用闭包实现变量的封装</p>\n<div class=\"code-block-extension-header\">\n<div class=\"code-block-extension-headerLeft\">\n<div class=\"code-block-extension-foldBtn\">&nbsp;</div>\n</div>\n<div class=\"code-block-extension-headerRight\"><span class=\"code-block-extension-lang\">scss</span>\n<div class=\"code-block-extension-copyCodeBtn\">复制代码</div>\n</div>\n</div>\n<pre><code class=\"hljs language-scss code-block-extension-codeShowNum\" lang=\"scss\"><span class=\"code-block-extension-codeLine\" data-line-num=\"1\">function <span class=\"hljs-built_in\">createCounter</span>() {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"2\">  let count = <span class=\"hljs-number\">0</span>;</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"3\">  return function () {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"4\">    count++;</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"5\">    console<span class=\"hljs-selector-class\">.log</span>(count);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"6\">  };</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"7\">}</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"9\">const counter = <span class=\"hljs-built_in\">createCounter</span>();</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"10\"><span class=\"hljs-built_in\">counter</span>(); <span class=\"hljs-comment\">// 输出 1</span></span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"11\"><span class=\"hljs-built_in\">counter</span>(); <span class=\"hljs-comment\">// 输出 2</span></span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"12\"><span class=\"hljs-built_in\">counter</span>(); <span class=\"hljs-comment\">// 输出 3</span></span>\n</code></pre>\n<p>在上面的代码中，<code>createCounter</code>&nbsp;函数返回了一个内部函数，该函数可以访问&nbsp;<code>createCounter</code>&nbsp;中定义的&nbsp;<code>count</code>&nbsp;变量。由于&nbsp;<code>count</code>&nbsp;变量定义在&nbsp;<code>createCounter</code>&nbsp;函数内部，因此外部无法直接访问该变量，从而实现了变量的封装。</p>\n<p>通过调用&nbsp;<code>createCounter</code>&nbsp;函数返回的内部函数，可以实现计数器的功能，每次调用时计数器加 1，最后输出计数器的值。由于&nbsp;<code>count</code>&nbsp;变量被定义在&nbsp;<code>createCounter</code>&nbsp;函数内部，并且该函数返回的是一个闭包，因此&nbsp;<code>count</code>&nbsp;变量的值可以被保存在内存中，并且在多次调用时能够保持不变。</p>\n<p><strong>实现模块化：通过闭包可以将代码模块化，从而避免变量名冲突等问题。</strong></p>\n<p>使用闭包，可以将模块内部的状态和方法封装起来，从而实现模块化的设计。下面是一个简单的示例，演示了如何使用闭包实现模块化编程：</p>\n<div class=\"code-block-extension-header\">\n<div class=\"code-block-extension-headerLeft\">\n<div class=\"code-block-extension-foldBtn\">&nbsp;</div>\n</div>\n<div class=\"code-block-extension-headerRight\"><span class=\"code-block-extension-lang\">javascript</span>\n<div class=\"code-block-extension-copyCodeBtn\">复制代码</div>\n</div>\n</div>\n<pre><code class=\"hljs language-javascript code-block-extension-codeShowNum\" lang=\"javascript\"><span class=\"code-block-extension-codeLine\" data-line-num=\"1\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-variable language_\">module</span> = (<span class=\"hljs-keyword\">function</span> () {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"2\">  <span class=\"hljs-keyword\">let</span> count = <span class=\"hljs-number\">0</span>;</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"4\">  <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">increment</span>() {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"5\">    count++;</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"6\">    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(count);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"7\">  }</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"9\">  <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">decrement</span>() {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"10\">    count--;</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"11\">    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(count);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"12\">  }</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"14\">  <span class=\"hljs-keyword\">return</span> {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"15\">    increment,</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"16\">    decrement,</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"17\">  };</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"18\">})();</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"20\"><span class=\"hljs-variable language_\">module</span>.<span class=\"hljs-title function_\">increment</span>(); <span class=\"hljs-comment\">// 输出 1</span></span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"21\"><span class=\"hljs-variable language_\">module</span>.<span class=\"hljs-title function_\">increment</span>(); <span class=\"hljs-comment\">// 输出 2</span></span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"22\"><span class=\"hljs-variable language_\">module</span>.<span class=\"hljs-title function_\">decrement</span>(); <span class=\"hljs-comment\">// 输出 1</span></span>\n</code></pre>\n<p>在上面的代码中，定义了一个自执行函数，该函数返回了一个对象，该对象包含两个方法&nbsp;<code>increment</code>&nbsp;和&nbsp;<code>decrement</code>。这两个方法都可以访问函数内部的变量&nbsp;<code>count</code>，从而实现了模块内部的状态封装。</p>\n<p>在执行该函数时，会创建一个闭包，该闭包可以访问自执行函数内部的变量和方法。由于闭包的特性，外部无法访问自执行函数内部的变量和方法，从而实现了模块化的设计。</p>\n<p><strong>实现柯里化：使用闭包可以实现柯里化，从而方便地进行函数组合。</strong></p>\n<p>柯里化（Currying）是一种函数式编程技术，它允许我们把接受多个参数的函数转化为一系列只接受一个参数的函数，且这些函数都返回一个新函数，新函数可以接受下一个参数，直到所有参数被接受完毕。</p>\n<p>举个例子，假设我们有一个加法函数&nbsp;<code>add</code>，它接受两个参数并返回它们的和：</p>\n<div class=\"code-block-extension-header\">\n<div class=\"code-block-extension-headerLeft\">\n<div class=\"code-block-extension-foldBtn\">&nbsp;</div>\n</div>\n<div class=\"code-block-extension-headerRight\"><span class=\"code-block-extension-lang\">scss</span>\n<div class=\"code-block-extension-copyCodeBtn\">复制代码</div>\n</div>\n</div>\n<pre><code class=\"hljs language-scss code-block-extension-codeShowNum\" lang=\"scss\"><span class=\"code-block-extension-codeLine\" data-line-num=\"1\">function <span class=\"hljs-built_in\">add</span>(x, y) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"2\">  return x + y;</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"3\">}</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"5\"><span class=\"hljs-built_in\">add</span>(<span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">3</span>); <span class=\"hljs-comment\">// 输出 5</span></span>\n</code></pre>\n<p>通过柯里化，我们可以把这个函数转化为一个只接受一个参数的函数：</p>\n<div class=\"code-block-extension-header\">\n<div class=\"code-block-extension-headerLeft\">\n<div class=\"code-block-extension-foldBtn\">&nbsp;</div>\n</div>\n<div class=\"code-block-extension-headerRight\"><span class=\"code-block-extension-lang\">javascript</span>\n<div class=\"code-block-extension-copyCodeBtn\">复制代码</div>\n</div>\n</div>\n<pre><code class=\"hljs language-javascript code-block-extension-codeShowNum\" lang=\"javascript\"><span class=\"code-block-extension-codeLine\" data-line-num=\"1\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">add</span>(<span class=\"hljs-params\">x</span>) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"2\">  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">y</span>) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"3\">    <span class=\"hljs-keyword\">return</span> x + y;</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"4\">  };</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"5\">}</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"7\"><span class=\"hljs-title function_\">add</span>(<span class=\"hljs-number\">2</span>)(<span class=\"hljs-number\">3</span>); <span class=\"hljs-comment\">// 输出 5</span></span>\n</code></pre>\n<p>在这个例子中，我们将&nbsp;<code>add</code>&nbsp;函数转化为一个返回一个函数的函数。返回的函数可以接受第二个参数&nbsp;<code>y</code>，并返回它们的和。</p>\n<p>使用闭包实现柯里化非常方便。我们可以使用一个函数返回另一个函数，并在返回的函数中使用闭包来保留外部函数的参数。下面是一个简单的示例：</p>\n<div class=\"code-block-extension-header\">\n<div class=\"code-block-extension-headerLeft\">\n<div class=\"code-block-extension-foldBtn\">&nbsp;</div>\n</div>\n<div class=\"code-block-extension-headerRight\"><span class=\"code-block-extension-lang\">javascript</span>\n<div class=\"code-block-extension-copyCodeBtn\">复制代码</div>\n</div>\n</div>\n<pre><code class=\"hljs language-javascript code-block-extension-codeShowNum\" lang=\"javascript\"><span class=\"code-block-extension-codeLine\" data-line-num=\"1\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">add</span>(<span class=\"hljs-params\">x</span>) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"2\">  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">y</span>) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"3\">    <span class=\"hljs-keyword\">return</span> x + y;</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"4\">  };</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"5\">}</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"7\"><span class=\"hljs-keyword\">const</span> add2 = <span class=\"hljs-title function_\">add</span>(<span class=\"hljs-number\">2</span>);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"8\"><span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title function_\">add2</span>(<span class=\"hljs-number\">3</span>)); <span class=\"hljs-comment\">// 输出 5</span></span>\n</code></pre>\n<p>在上面的示例中，<code>add</code>&nbsp;函数返回一个新函数，该函数接受一个参数&nbsp;<code>y</code>&nbsp;并返回它们的和。我们可以将&nbsp;<code>add</code>&nbsp;函数应用于第一个参数&nbsp;<code>2</code>，从而创建一个新的函数&nbsp;<code>add2</code>。<code>add2</code>&nbsp;函数只需要一个参数&nbsp;<code>y</code>，它会将&nbsp;<code>2</code>&nbsp;和&nbsp;<code>y</code>&nbsp;相加并返回结果。</p>\n<p>使用闭包实现柯里化的关键在于，返回的函数可以访问外部函数的变量&nbsp;<code>x</code>，从而将其保留下来。每次调用返回的函数时，它都会使用之前的参数&nbsp;<code>x</code>，并接受一个新的参数&nbsp;<code>y</code>，从而实现柯里化的效果。</p>\n<p><strong>实现异步编程：使用闭包可以实现异步编程，从而避免回调地狱的问题。</strong></p>\n<p>因为它们可以帮助我们处理回调函数的嵌套和异步代码的执行顺序。</p>\n<p>下面是一个使用闭包实现异步编程的示例。假设我们有一个&nbsp;<code>getData</code>&nbsp;函数，它会从远程服务器获取数据。由于网络请求是异步的，我们需要使用回调函数来处理获取到数据的情况。我们可以使用闭包来避免回调函数的嵌套，从而提高代码的可读性。</p>\n<div class=\"code-block-extension-header\">\n<div class=\"code-block-extension-headerLeft\">\n<div class=\"code-block-extension-foldBtn\">&nbsp;</div>\n</div>\n<div class=\"code-block-extension-headerRight\"><span class=\"code-block-extension-lang\">scss</span>\n<div class=\"code-block-extension-copyCodeBtn\">复制代码</div>\n</div>\n</div>\n<pre><code class=\"hljs language-scss code-block-extension-codeShowNum\" lang=\"scss\"><span class=\"code-block-extension-codeLine\" data-line-num=\"1\">function <span class=\"hljs-built_in\">getData</span>(url, onSuccess, onError) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"2\">  const xhr = new <span class=\"hljs-built_in\">XMLHttpRequest</span>();</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"3\">  xhr<span class=\"hljs-selector-class\">.open</span>(\'GET\', url);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"4\">  xhr<span class=\"hljs-selector-class\">.onload</span> = <span class=\"hljs-built_in\">function</span>() {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"5\">    if (xhr.status === <span class=\"hljs-number\">200</span>) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"6\">      <span class=\"hljs-built_in\">onSuccess</span>(xhr.response);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"7\">    } else {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"8\">      <span class=\"hljs-built_in\">onError</span>(xhr.statusText);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"9\">    }</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"10\">  };</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"11\">  xhr<span class=\"hljs-selector-class\">.onerror</span> = <span class=\"hljs-built_in\">function</span>() {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"12\">    <span class=\"hljs-built_in\">onError</span>(xhr.statusText);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"13\">  };</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"14\">  xhr<span class=\"hljs-selector-class\">.send</span>();</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"15\">}</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"17\">function <span class=\"hljs-built_in\">processData</span>(data) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"18\">  <span class=\"hljs-comment\">// 处理数据</span></span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"19\">}</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"21\">function <span class=\"hljs-built_in\">handleGet</span>() {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"22\">  <span class=\"hljs-built_in\">getData</span>(\'/api/data\', function(response) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"23\">    <span class=\"hljs-built_in\">processData</span>(response);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"24\">  }, <span class=\"hljs-built_in\">function</span>(error) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"25\">    console<span class=\"hljs-selector-class\">.error</span>(\'获取数据失败：\', error);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"26\">  });</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"27\">}</span>\n</code></pre>\n<p>在上面的示例中，<code>getData</code>&nbsp;函数接受三个参数：一个 URL，一个成功回调函数&nbsp;<code>onSuccess</code>&nbsp;和一个失败回调函数&nbsp;<code>onError</code>。它会使用 XMLHttpRequest 对象来获取数据，并在数据加载完成后调用适当的回调函数。</p>\n<p><code>handleGet</code>&nbsp;函数是一个事件处理程序，它会调用&nbsp;<code>getData</code>&nbsp;函数并提供两个回调函数。由于异步编程的特性，<code>getData</code>&nbsp;函数会立即返回，而不会等待数据加载完成。因此，我们需要使用闭包来保留对回调函数的引用，并在数据加载完成后调用它们。这样，我们就可以在代码中使用普通的函数调用，而不必担心回调函数的嵌套。</p>\n<p>闭包可以将回调函数与其相关的数据进行捆绑，并在适当的时候调用回调函数。这使得异步编程变得更加直观和易于管理，从而使我们的代码更加清晰和可读。</p>\n<p><strong>三、闭包的运用方式</strong></p>\n<p>闭包可以使用以下方式来运用：</p>\n<ol>\n<li>将内部函数作为返回值：将内部函数作为返回值，即可创建闭包。</li>\n<li>将内部函数作为参数传递给其他函数：将内部函数作为参数传递给其他函数，即可在其他函数中创建闭包。</li>\n<li>使用 IIFE（立即执行函数表达式）：使用 IIFE 可以立即执行函数，并且将内部函数作为返回值，从而创建闭包。</li>\n</ol>\n<p><strong>四、闭包的注意事项</strong></p>\n<p>闭包虽然有很多优点，但是也需要注意以下几点：</p>\n<ol>\n<li>内存泄漏：闭包会一直持有外部作用域中的变量和参数，如果不及时释放，就会导致内存泄漏。</li>\n<li>性能问题：由于闭包会持有外部作用域中的变量和参数，因此会占用更多的内存和 CPU 资源。</li>\n<li>作用域链问题：由于闭包可以访问外部作用域中的变量和参数，因此会导致作用域链的变长，从而影响代码的执行效率。</li>\n</ol>\n</div>\n</div>', 0, 17, 'http://www.baidu.com', '2023-08-06 10:30:15', '2023-09-29 20:11:38');
INSERT INTO `article` VALUES (8, 4, '', '小跑青年', '', '', '3', '', '', '', '', '', '', '/public/template/default/img/15.jpg', '<p><img src=\"/public/template/default/img/15.jpg\" alt=\"\" width=\"455\" height=\"290\"></p>\n<p><img src=\"\\public\\uploads\\default\\2023\\08\\08\\1691504867683.jpg\" alt=\"\"></p>', 0, 25, '', '2023-08-06 16:13:41', '2023-08-06 16:13:41');
INSERT INTO `article` VALUES (9, 4, '', '最美的秋', '', '', '', '', '', '', '', '', '', '/public/cover/03.jpg', '<p><img src=\"/public/cover/03.jpg\" alt=\"\" width=\"240\" height=\"180\"></p>', 0, 27, '', '2023-08-06 18:18:58', '2023-10-13 13:24:55');
INSERT INTO `article` VALUES (10, 5, '', '禅悦历史', '', '', '', '', '', '', '', '', 'chanyue-cms 历史\n第一次构想2015/6/2 基于express mongoDB开发第一版cms', NULL, '<h2>「关于」chanyue-cms 历史</h2>\n<p>第一次构想2015/6/2 基于express mongoDB开发第一版cms</p>\n<p>第二次重构（koacms）2018/4/2 基于koa2 mysql重构</p>\n<p>第三次重构（eggcms）2020/10/1基于egg mysql Sequelize重构</p>\n<p>第四次重构（chanyue-cms）2022/6/12基于express mysql knex开发第三版，经过多年开发和线上运营，回归最稳定的express。</p>\n<h2>「关于」技术选型说明</h2>\n<p>问：很多同学问为啥选择express而不是nest或Midway？</p>\n<p>答：express全球下载量第一，功能超级稳定，相关依赖包众多（所以不选koa2,洋葱皮模型）,依赖包大部分基于JavaScript写的，相对于nest,express更加灵活，轻量。至于为啥不选择eggjs/Midway，怕了，你懂得。</p>\n<p>问：为啥不选择Sequelize、typeorm或者prisma作为orm框架？**</p>\n<p>答：knex易用，友好，强大，objection.js都是基于knex开发的。</p>', 0, 119, '', '2023-08-09 21:43:13', '2023-10-15 21:40:40');
INSERT INTO `article` VALUES (11, 8, NULL, '禅悦由来', '', '', '', '', '', '', '', '', '禅悦二首·其二', NULL, '<p class=\"chanyue-title text-c bold f-16\" data-v-584be997=\"\">禅悦二首&middot;其二</p>\n<p class=\"chanyue-author text-c f-14 mb-10 mt-10\" data-v-584be997=\"\">清代&middot;张问陶</p>\n<p class=\"chanyue-txt text-c f-15\" data-v-584be997=\"\">门庭清妙即禅关，</p>\n<p class=\"chanyue-txt text-c f-15\" data-v-584be997=\"\">枉费黄金去买山。</p>\n<p class=\"chanyue-txt text-c f-15\" data-v-584be997=\"\">只要心光如满月，</p>\n<p class=\"chanyue-txt text-c f-15\" data-v-584be997=\"\">在家还比出家闲。</p>\n<p class=\"mt-20\" data-v-584be997=\"\">译文：在清幽的家中修持，同样也可以进入禅关，不必花费万金去买山寻求幽静。 只要心性澄明，智慧之光绽放如满月，就算在家被俗世缠身，内心也比出家人清闲。</p>', 0, 54, '', '2023-08-09 22:24:24', '2023-10-13 13:24:59');
INSERT INTO `article` VALUES (12, 7, '', 'pdf文章测试', '', '4', '', '', '', '', '', '', '', '/public/cover/05.jpg', '<p><iframe style=\"width: 100%; height: 1200px;\" src=\"/public/pdfjs/web/viewer.html?file=/public/uploads/pdf/01.pdf\"></iframe></p>', 0, 12, '/public/pdfjs/web/viewer.html?file=/public/uploads/pdf/01.pdf', '2023-08-11 20:30:26', '2023-09-29 20:11:34');
INSERT INTO `article` VALUES (13, 8, '', 'chanyue-cms更新日志', '', '', '', 'chanyue-cms更新日志', 'chanyue-cms,禅悦，禅悦cms', '', '', '', '🌙更新日志 2023-08-11', NULL, '<p><strong>🌙更新日志 2023-09-07</strong></p>\n<ul>\n<li>优化pdf支持流按需加载，优化样式</li>\n</ul>\n<p><strong>🌙更新日志 2023-08-14</strong></p>\n<ul>\n<li>优化栏目字数限制 优化模板样式</li>\n</ul>\n<p><strong>🍇更新日志 2023-08-11</strong></p>\n<ul>\n<li>支持pdf在线预览，按需加载，支持pc/wap</li>\n</ul>\n<p><strong>🍇更新日志 2023-08-10</strong></p>\n<ul>\n<li>完成所有功能开发。</li>\n</ul>\n<p><strong>🍇更新日志 2023-08-08</strong></p>\n<ul>\n<li>经过两周的奋斗，终于完成了大升级，大改造。可以下载用一用了</li>\n</ul>\n<p><strong>🍒更新日志 2023-08-05</strong></p>\n<ul>\n<li>完成默认模板开发，适配pc、wap。删除广告管理模块，用碎片模块替代。</li>\n</ul>\n<p><strong>🍒更新日志 2023-07-24</strong></p>\n<ul>\n<li>模板引擎ejs替换成高性能模板引擎art-Template</li>\n</ul>\n<p><strong>🍒更新日志 2023-07-09</strong></p>\n<ul>\n<li>后台管理界面重构升级，支持动态配置路由</li>\n</ul>\n<p><strong>🍒更新日志 2023-04-01</strong></p>\n<ul>\n<li>修复knex重构导致不显示分页问题</li>\n</ul>\n<p><strong>🍑更新日志 2023-03-20</strong></p>\n<ul>\n<li>动态后台菜单接口开发完成</li>\n</ul>\n<p><strong>🍓更新日志 2023-03-15</strong></p>\n<ul>\n<li>新增API 每日简报</li>\n</ul>\n<p><strong>🥝更新日志 2023-03-09</strong></p>\n<ul>\n<li>优化微信小程序登录</li>\n<li>新增API 60秒读懂世界</li>\n</ul>\n<p><strong>🍈更新日志 2023-03-05</strong></p>\n<ul>\n<li>更新node版本为v18.14.2</li>\n<li>更新mysql2为v3.2.0</li>\n<li>优化微信小程序登录功能使用原生fetch语法，删掉axios依赖</li>\n</ul>', 0, 33, '', '2023-08-14 19:05:43', '2023-10-13 13:24:59');
INSERT INTO `article` VALUES (14, 8, '', '了解作者：明空', '', '', '', '', '', '', '', '', '明空，十年前端经验。', NULL, '<p style=\"text-align: center;\"><span style=\"font-size: 78px;\">Hello Javascript!</span></p>\n<p><strong>明空</strong>，十年的前端开发经验。足迹遍布西安、北京和南京，这些城市见证了成长和成就。</p>\n<p>除了前端开发，你还有着多样的爱好和兴趣。</p>\n<p>热衷于使用JavaScript进行编程，不断追求技术的创新和突破。</p>\n<p><strong>喜欢小说</strong>，通过小说丰富的故事和人物塑造来拓宽自己的思维和想象力。</p>\n<p><strong>喜欢旅行</strong>，喜欢探索世界的美景，感受不同地域的文化和风情。</p>\n<p><strong>喜爱传统文化</strong>，深入研究中医、道家、儒家和佛家三家文化，通过传统文化的智慧来丰富自己的人生。</p>\n<p><strong>喜欢茶</strong>，喜欢品味茶叶的香气和滋味，享受茶道的独特韵味。</p>\n<p><strong>喜欢诗词</strong>，通过诗词表达内心的情感和思考。</p>\n<p>这些爱好和兴趣丰富了生活，让在忙碌的工作之余能够找到内心的宁静和满足。</p>\n<p>在未来的道路上，继续深耕前端开发领域，关注最新的技术趋势和前沿的开发工具，不断提升自己的技术水平。</p>', 0, 174, '', '2023-08-14 19:14:50', '2023-10-13 13:24:57');
INSERT INTO `article` VALUES (38, 12, NULL, '道家为何要斋戒，斋戒精严竟可以通神达圣', '', '', '', '', '', '', '', '', '如果我们到宫观里参加宗教活动，那么前一天或前三天需要斋戒沐浴，清静身心。什么是斋戒《说文》里记载：“斋，戒洁也。”斋有通过一定的持戒来达成洁净身心的含义。斋是戒的另一种行持，通常把斋戒连称，如斋戒沐浴。《易·系辞》里已经有斋戒连用的记载：“圣人以此斋戒。”斋戒连用的通常含义为，在祭祀或举行重要典礼之前，沐浴更衣，不饮酒，不吃荤，夫妻不同房，严守戒律，以示虔诚庄敬。《史记·卷八一．廉颇蔺相如传》：“赵王送璧时，斋戒五日，今大王亦宜斋戒五日，设九宾于廷，臣乃敢上璧。', '', '<p>如果我们到宫观里参加宗教活动，那么前一天或前三天需要斋戒沐浴，清静身心。<br><br>什么是斋戒<br><br>《说文》里记载：“斋，戒洁也。”斋有通过一定的持戒来达成洁净身心的含义。斋是戒的另一种行持，通常把斋戒连称，如斋戒沐浴。《易·系辞》里已经有斋戒连用的记载：“圣人以此斋戒。”斋戒连用的通常含义为，在祭祀或举行重要典礼之前，沐浴更衣，不饮酒，不吃荤，夫妻不同房，严守戒律，以示虔诚庄敬。<br><br>《史记·卷八一．廉颇蔺相如传》：“赵王送璧时，斋戒五日，今大王亦宜斋戒五日，设九宾于廷，臣乃敢上璧。”赵王呈送璧玉的时候，斋戒了五天，现在大王您也应该斋戒五天，在廷里设立九宾之礼，外臣才敢献上璧玉。《儒林外史·第五五回》：“但凡人要请他写字时，他三日前，就要斋戒一日。”但凡遇到有人要请他写字，他三天之前就要斋戒一天。<br><br>洁净身心<br><br>同样的我们信徒在来宫观参加宗教活动之前最好也能素食、清心、洁身。这里的宗教活动指的是信徒到宫观来皈依三宝，烧香叩拜，问道求玄，参加道场等内容。素食、清心有很多的好处，例如《徐仙真录》记载：“南唐徐温之子，海州朐山人也。自幼好善，笃志侑行。每遇贫窘，乐而施与。平时服御，不尚华侈。一切游玩，不贵珎奇。宁甘淡泊，每旦常素食。自是功行日增，成登道岸。诗曰：良因善某世难寻，谁识修行乐道心。丹火烧空堪爱处，昭彰灵贶古如今。”<br><br>南唐时徐温之子，是海州朐山人士，从小好善乐施，专一心志，热心帮助别人，每每遇到贫穷困苦的人，都会热情地帮助他们，平时所穿的衣服和所驾的车不崇尚奢华，游玩的时候也不以珎奇的事物为贵，心态宁静愉悦，恬静无为，不求名利，每天经常吃素食，功绩和德行与日俱增，成功地登上了道岸。所以素食、清心和洁身对我们来说是有很大的好处的。<br><br>禁食荤腥<br><br>道教特别重视参加宗教活动前个人身心洁净的修持，并认为斋戒精严是通神达圣的津梁。《三洞众戒文》记载：“学道求真，莫不先持斋戒。故灵寳升玄歩虚章云：皆从斋戒起，累功结宿縁。又太极左仙公云：学道不修斋戒，亦徒劳山林矣。”修行人学道求真，没有不先持修斋戒的，所以灵寳升玄歩虚章说：都从斋戒开始，来累计功德，缔结多世的缘分。又有太极左仙公开示：“学道之人如果不修持斋戒，即使在山林里修行也是徒劳的。”道教诸品经典中几乎都有斋戒沐浴方可开经的训诫。所谓素食就是在参加宗教活动之前在饮食上不吃荤腥的东西，荤是指植物类的韮、蒜、薤（火葱）、芸苔（油菜）、胡荽（胡菜）。也称为“五辛”。<br><br>不吃这些东西是因为生吃则会使人生嗔，熟吃则会助长人的欲念，而且这些东西都有很刺鼻的味道，会使人的气变浊，以防秽气冲犯神灵，所以不吃它。腥是指一切动物的血肉，包括乳脂、卵。不吃腥类东西是因为“大道仁慈，上帝好生”，《大明太祖高皇帝御注道德真经》记载：“所以上帝好生恶杀，圣人君子体而行之，遂得。”元皇上帝有好生恶杀之德，圣人君子能身体力行，便能顺应上帝之德。<br><br>不吃腥类东西，可以助长自己的慈悲道念，另外很多动物具有灵性如龟蛇以成北方玄武之象，鲤鳝知朝斗之真，牛之有功，犬之有义，雁之有序，戒而不食，则可以调合气性，感格真灵而有求必应也。斋是对鬼神表敬意之举，其形式有：不食荤腥酒、沐浴、穿洁净衣服、断房事等。这些祭祀之斋都属于外在形式的斋戒，而更重要的是“心斋”，心斋要人清心寡欲，超凡脱俗。道教讲万法千门，修心为上。《南华经》曾开示心斋的修行法门。<br><br>斋日<br><br>道教对道士的斋戒修持尤为严格。在举行宗教活动之前和宗教活动的时候正一、全真斋戒修持的要求是一样的。如果是常年持守斋戒，很多人做不到，特别是居家修行的，有时候也很不方便，或者是因为身体需要不能长年持斋。所以祖师也开下方便法门，即在参加宗教活动之先和活动期间精严斋戒，或者在某些特殊的日子持守斋戒，在这些日子持守斋戒同样具有不可思议的功德，可以得到福报。<br><br>如“三元斋”，即农历正月十五日、七月十五日、十月十五日，为上元、中元、下元斋日。这三个吉日分别是天官、地官、水官的圣诞，是赐福、赦罪、解厄的良辰。又如“庚申斋”、“甲子斋”，是在“六十花甲”的庚申、甲子日为斋日，这两天是灶君上天言人罪福，斗真下降的日子。又如“本命斋”，即在自己的生日那天为斋日，因人出生之时即母受难之日，修斋抒报恩之情，使父母以此修斋功德延福增寿。十直斋日即：每月初一日、八日、十四日、十五日、十八日、二十三日、二十四日、二十八日、二十九日、三十日(月小却取二十七日)。八节斋日：立春日、春分日、立夏日、夏至日、立秋日、秋分日、立冬日、冬至日。四始斋日：正月初一日、四月初一日、七月初一日、十月初一日。另外袓师圣诞也为斋日。此外还有很多斋日。修这些斋日可以解冤、拔罪、祈福、禳灾、保命、延寿等等。<br><br>道教认为：自然界的一切生物都有它的生灭规律，如果人为的破坏这种自然生态，会造成自然界的不和谐，从而造成各种天灾人祸。《南华经》记载：“天地与我并生，万物与我为一。”道教悯念一切有情生命，不杀生所以存仁爱之心，视万物命为我命，而不敢杀害。作为在家信徒如果能在一些斋日持斋，参加宗教活动之前和期间持斋就很殊胜了。持常斋要看自己个人的实际情况，发心持常斋是非常自然快乐的事，如果做不到，也不要勉强，能在斋日持斋就可以了。<br><br>香汤沐浴<br><br>除了吃素外，我们来宫观参加宗教活动之先尽量要沐浴洁身。沐浴有时也叫“香汤沐浴”，即是在洗澡水里加上“五香”，五香都有自己的特殊作用。《沐浴身心经》上说：“五香者，一者白芷，能去三尸；二者桃皮，能辟邪气；三者柏叶，能降真仙；四者零陵，能集灵圣；五者青木香，能消秽召真。”五香，一为白芷，能祛除三尸；二为桃皮，能辟出邪气侵扰；三位柏叶，能降请真仙；四为零陵，能缘集灵圣；五为青木香，能消除污秽，召唤仙真。用五香水洗澡能起到去邪、去三尸、去秽气、召真灵的神功妙用。五香在中药店中都能买到，信徒如果在家有条件香汤沐浴那自然非常殊胜。<br><br>《云笈七签》记载：“《太上素灵经》云：太上曰：兆之为道，存思《大洞眞经》，每先自清斋，沐浴兰汤。《太上灵宝无量度人上品妙经》云：道言，行道之日，皆当香汤沐浴。”存思《大洞真经》，需自己每次先行清洁斋戒，沐浴兰汤；《太上灵宝无量度人上品妙经》记载，行道的时候，都应当香汤沐浴。南朝梁．武帝《和太子忏悔》诗也记载道：“兰汤浴身垢，忏悔净心灵。”兰汤可以洗浴身上的污垢，忏悔可以洁净心灵。<br><br>《沐浴身心经》上说：“沐浴内净者，虚心无垢，外净者，身垢尽除。”沐浴可以让人内心洁净，虚心而无杂染，能让人身体洁净，污秽尽除。道教的沐浴要求人们洗去身上的污垢，也就是说洗身；更要求人们洗去心灵的污垢，也就是洗心。《常清静经》上说：“常能遣其欲而心自静，澄其心而神自清。”时常遣除各人的妄欲，则能让心自然平静，澄清自己的心，则能让神自然清净。我们把心中的各种不良欲望除去就是洗心。经过澄心遣欲的修炼，自身心灵光明朗耀，元神内守，身心清静。这样在参加宗教活动时才能与神明沟通，从而禳灾灾消、祈福福至，有求必应。<br><br>斋戒沐浴是到宫观参加宗教活动自我身心洁净的程序，看似简单，实为重要，而且要行持好也不是一件很容易的事。斋戒沐浴的精诚与否，关系到能否与神灵沟通、感应神灵的灵感程度，所以需要特别要注意。</p>', 0, 5, '', '2023-09-29 20:07:21', '2023-10-13 13:24:49');
INSERT INTO `article` VALUES (39, 12, NULL, '没有师承过经，能不能诵读道教经文？', '', '', '', '', '', '', '', '', '如今网上有着很多关于诵经的视频，可以供大家学习。这是给想亲近道教的善信居士开了一个方便法门，但同时，因为传承不同，或因个人对经文的理解不同，经文经意就开始杂乱起来，善信也开始迷茫起来。有的说能读，有的说师父不过经的话，则反之有罪云云。搞的信众即战战兢兢，又无从下手.……没有师承过经能不能诵读道教经文？其实这个问题不是现在才有，古代也存在着无师但想读经的人，所以祖师爷在古代就已经把办法告诉大家了。太上玉经隐注曰：“夫道经不师受，则神不行矣。', '', '<section><section>如今网上有着很多关于诵经的视频，可以供大家学习。这是给想亲近道教的善信居士开了一个方便法门，但同时，因为传承不同，或因个人对经文的理解不同，经文经意就开始杂乱起来，善信也开始迷茫起来。有的说能读，有的说师父不过经的话，则反之有罪云云。搞的信众即战战兢兢，又无从下手.……</section></section><section><section><section>没有师承过经能不能诵读道教经文？其实这个问题不是现在才有，古代也存在着无师但想读经的人，所以祖师爷在古代就已经把办法告诉大家了。<br></section></section></section><section><p>太上玉经隐注曰：<span>“夫道经不师受，则神不行矣。若世无法师，又无经传者，当以法信投靖治，或可密室启玄师老君，北向三拜，然后以物布施于饥乏之人，平等一心，而用经也。世有师，不须按此法也。”</span></p><p>对于祖师爷的建议，我们可以这样解读。诵经的方法很简单，如果一个人没有师父没有传经，他可在密室中或者神坛前向神明说明原因，北方三拜，再给饥乏的人布施一下，把心持正，就可以读经了。这是一个简单的方法，同时也不失神圣性，可供大众学习使用。<br></p><p>这里面就有一句很有意思的话，叫世有师，不须按此法也。这句话放在现在来说，就要因地制宜的讲。三丰祖师云：“不遇真师，且先读书”。经典为明道之大路，真师乃引路之明灯。无灯尚可缘路膝行，无路必然行将就木。故若欲参师，必先通诸基础，提升己才，方明是非。</p></section><section><p>没有师父就学不了道了吗？当然无师如暗路无灯，但摸黑儿一点儿点儿爬着走难道就走不了了吗？<strong>“不遇真师，且先读书”。</strong>既然暂且找不到能值得让自己真心去侍奉、去皈依、去当父亲一样崇拜的真师，那与其退而求其次找一个你自己都不一定去相信的陌生人当自己那第二个的“爹”，何不多看看书、多看看祖师事迹语录，以经为师，总不至于出什么大岔子吧！灯也不过是给你照一下路，走还是靠你自己的那两条腿。如果你是这么依赖师父的人，那就算有了师父，再好的师父，也难修行。<br></p><p>很多人初学入道，盲从拜师，这种情况很多。多次听经，仔细体会后，会发现师父诵经也有错误之处。这并不可怕（其实也挺可怕的，师父诵经出错是重罪），因为是人就会出错误，只是出错几率高低的问题。但是这个时候，如果还按照经书所说，跟着师父过经学下去，那岂不是错上加错？所以，读经诵经，智慧明了，通达智慧为第一位。心性圆融了，就不会为一些桎梏所纠结。</p><section>《无上秘要》引“洞玄空洞灵章经”称：“善信男女，香灯供养，见世光明，身入无为，受福自然。”以此可见，即便是普通的善信，只要能够清静身行、素食斋心，或于祖师殿下，或于家中静室，诚心诵读祖师经典，可以明本心、见真性，久久必得圣真感应。</section><p>以诵经礼忏而普度人天，这正是在为每一位修行者结下十方善缘。不必去思忖读什么经更好、什么时间读经更有效等等具有功利性质的问题，更应该是让自己沉静下来，而去做好一心诵持的功夫。要明白一点：<strong>诵经是我们自己的行持，功德是大道承载的因果。唯先做好当下事，世间自然有缘果。</strong></p></section><section><p>对于信众来说，当我们在生活中遇到无穷的魔考而迷失方向时，只要将躁乱的心沉静在经典之中，或是诵读、或是礼忏、或是行持，都可以使我们洞照到自身的不足。经以载道，若能明了经中奥义，便也有了悟道之方。<br></p><p>须知，祖师慈悲留下的万卷经文，是在为我们点亮心中的光。若心中有光，便不惧前路漫漫。祖师爷从不会因初学者的懵懂未知而降罪；一个看不懂经书的人，拾起了道教的经书，这就是亲近道缘，接引法缘的实证。这才是祖师爷的随方设教、历劫度人，不同的人给予不同的机缘，总会有不同的法门示现给你。</p></section>', 0, 2, '', '2023-09-29 20:07:21', '2023-09-29 20:11:24');
INSERT INTO `article` VALUES (40, 12, NULL, '中医退烧秘方只有三味药，不伤身老人小孩都可用', '', '', '', '', '', '', '', '', '这个退烧的药方其实很简单，一共只有三味药：蚕砂、竹茹、陈皮。', '', '<p>这个退烧的药方其实很简单，一共只有三味药：<strong>蚕砂、竹茹、陈皮</strong>。</p><p>蚕砂虽然是中药，但是日常生活也常用到。它可以做成蚕砂枕头，好多百货商场里边都有卖的。睡觉用这种枕头可以清肝明目。蚕砂枕头里边装的一粒粒黑色的像小沙粒一样的东西就是蚕砂。</p><p>蚕砂又叫做蚕矢，就是蚕的粪便。听起来有些不洁，其实养过蚕的人都知道，蚕是非常干净的动物。它的一生都待在养蚕的竹匾里，只吃新鲜的桑叶，完全不沾人间尘土。所以蚕砂其实就是桑叶的残留物，没有什么异味的。</p><p>蚕砂入肝经，可以祛风、活血；入脾经，可以燥湿、止泻；入胃经，可以和胃、化浊。这些作用综合起来，在这个方子中，就能退烧、止吐，还能解除由于感冒发烧引起的头痛和全身疼痛。</p><p>竹茹，一般人可能听着陌生，其实它就是竹子的中间层。把竹子最外面一层绿色的皮刮掉，露出里边青白色的部分，把它一条条刮下来晾干就是中药竹茹了。 <br></p><p>竹茹的作用是清火，而且是清上面的火。竹茹可以清心火，凉血；可以清肺火，化痰；可以清肝火，除烦；可以清胃火，止吐。用在这个方子中，加强退烧、止吐的作用。</p><p><img class=rich_pages wxw-img data-galleryid= data-ratio=0.25059952038369304 data-s=300,640 data-src=https://mmbiz.qpic.cn/sz_mmbiz_png/bN4KTnnDialNZehSjv8IwoRdq518ePkIhibXBs7anr9Kcu95TUgLAC9UHpWyEaUe59E9hicE6FM0JCS2C6PUMhicuA/640?wx_fmt=png data-type=png data-w=3336 style=margin: 0px; padding: 0px; outline: 0px; max-width: 100%; box-sizing: border-box !important; overflow-wrap: break-word !important; vertical-align: bottom; height: auto !important; letter-spacing: 0.544px; white-space: normal; font-family: -apple-system-font, BlinkMacSystemFont, Arial, sans-serif; caret-color: rgb(51, 51, 51); text-align: center; width: 677px !important; visibility: visible !important; display: initial; data-index=6 data-origin-display= _width=677px crossorigin=anonymous alt=图片 src=https://mmbiz.qpic.cn/sz_mmbiz_png/bN4KTnnDialNZehSjv8IwoRdq518ePkIhibXBs7anr9Kcu95TUgLAC9UHpWyEaUe59E9hicE6FM0JCS2C6PUMhicuA/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1 data-fail=0></p><p>而陈皮呢，它能解表、温中散寒，就是说，它既能散风寒、化痰、止咳，调理上呼吸道感染，又能温胃、止吐、缓解消化不良。竹茹是偏凉的，配上温性的陈皮，寒热就平衡了。</p><p>不知你有没有注意到，这三味药有一个共同点，那就是可以止吐。其实，<strong><span>它们是通过各自不同的药性，来帮助脾胃恢复其功能。</strong></span></p><section>轻微的感冒，只出现上呼吸道症状，病在肺。而到了发烧的程度，病已经深入一步，到了胃。发烧的时候人一般都没有食欲，感觉胃里不舒服，甚至恶心呕吐。所以退烧并不是关键，关键是治疗脾胃，把病邪驱赶出去，这样烧自然就退了。</section><section><strong><span>竹茹、蚕砂、陈皮</strong>都是常用中药，随便找个药房都可以买到，陈皮还可以自制。这三味药都耐贮存，可以放很久也不变质。买来以后，放在家里长期备用，一般的感冒发烧就不用去医院了，自己煮点药水就可以了。<br><br></span></section><p><strong><span>蚕砂竹茹陈皮水的煮法很方便：</strong></span></p><p>用竹茹、蚕砂、陈皮各10克。把陈皮洗净，和蚕砂、竹茹一起放入锅中，加冷水煮。水开以后再煮三分钟就成了。<br></p><p>一般的人喝一次就可以退烧。严重的可以喝两到三次，完全退烧以后就不用再喝了。</p><p>这个方子中的几味药物都相当安全，小孩、老人都可以放心地使用。</p><p>大人用这个方子基本上也是一剂见效。几十年来，我们给许多发烧的人用过这个药方，几乎没有超过三剂的，比吃退烧药和输液的效果都好，又没有西药的副作用。如果是太小的孩子或者高烧不退，需要就医！</p>', 0, 2, '', '2023-09-29 20:07:21', '2023-09-30 20:59:49');
INSERT INTO `article` VALUES (41, 12, NULL, '新冠成人或儿童发烧高热的中医非药物处理方法', '', '', '', '', '', '', '', '', '作为家长面对高烧，尤其是孩子内心总是非常煎熬，一方面觉得烧烧更好，一方面觉得还是得处理一下，面对新冠成人或儿童发烧高热的中医非药物处理方法有以下几点，公供大家参考，至于吃药吃什么药，大家根据自己的情况决定就好了，本文不进行讨论。', '', '<p>作为家长面对高烧，尤其是孩子内心总是非常煎熬，一方面觉得烧烧更好，一方面觉得还是得处理一下，面对新冠成人或儿童发烧高热的中医非药物处理方法有以下几点，公供大家参考，至于吃药吃什么药，大家根据自己的情况决定就好了，本文不进行讨论。</p><p>一、刺血法</p><p><img src=/uploads/ueditor/20221225/6006e571a544b911ebe4c7205c4d473b.jpg title=6006e571a544b911ebe4c7205c4d473b.jpg alt=1.jpg></p><p>1、少商穴、商阳穴刺血法，可以用比较细的针灸针等针，记得要消毒，大家可以自行百度这两穴位的位置，非常好找。</p><p>2、食指刺血法，食指指肚进行刺血。</p><p>3、十指刺血法，一般也用不上。</p><p>如何手掌冰凉，无血色，可以从胳膊往下捋到手掌，一直到有血色即可。</p><p>二、刮痧法</p><p>刮痧主要是在两个位置进行，一是肘窝，就是打针抽血的地方，二是大椎穴，可以用刮痧板或勺子等均可以，注意力度，以刮出痧为准。<br></p><p>三、祝水法</p><p>同时提醒大家如果家人高烧，一定要保持饮水，因为发烧是体内的正气与病邪在对抗的一个过程，会消耗大量的体液，同时发烧的时候尽量清淡饮食，减少肉食的摄入，不用担心什么营养，因为你们脾胃能量全去对抗病毒了，没有太多力量去消耗肉类。<br></p>', 0, 1, '', '2023-09-29 20:07:21', '2023-09-29 20:07:21');
INSERT INTO `article` VALUES (42, 12, NULL, '推荐倪海厦老师和张至顺老道长两个白发转黑的中药方子', '', '', '', '', '', '', '', '', '       读倪海厦老师的课和张至顺老道长的《米晶子济世良方》，发现两个可以让白发转黑的中药方子，两个方子都比较简单，倪海厦的方子包括两味药，张至顺道长的方子有五味药，有需要的朋友可以尝试一下。', '', '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 读倪海厦老师的课和张至顺老道长的《米晶子济世良方》，发现两个可以让白发转黑的中药方子，两个方子都比较简单，倪海厦的方子包括两味药，张至顺道长的方子有五味药，有需要的朋友可以尝试一下。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 倪海厦老师的方子，莤草一斤、生地三斤，熬成膏状，每天喝半勺。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 张至顺老道长的《米晶子济世良方》，轻粉十克，好醋为引，调匀，临睡时，涂在头发上用毛巾敷盖，早上取开全发变黑色。再加内服海螵蛸、何首乌各十五克，青黛十克，水煎服，三剂全愈。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 另张至顺老道长的《米晶子济世良方》还有一方治少白头的也很简单，黑芝麻、制首乌，做成小丸，每服六克。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 但是从修行的角度来说，这些是都外求，大部分的病都来源于我们眼笑眉飞。最根本的还是要我们调整日常饮食、作息规律，减少无效的焦虑，调节心神，恬淡虚无，配合道家的一些养生功法进行保养。<br></p>', 0, 1, '', '2023-09-29 20:07:21', '2023-09-29 20:07:21');
INSERT INTO `article` VALUES (43, 12, NULL, '幻躯有生即有灭，法身无去亦无来', '', '', '', '', '', '', '', '', '       前些天头条突然推送了一条消息，说明国师父圆寂的消息，这或许也算是和我的一种告别吧。', '', '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 前些天头条突然推送了一条消息，说明国师父圆寂的消息，这或许也算是和我的一种告别吧。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 明国师父是我在禅宗皈依的师父，法华寺的住持。法华寺原名桃花寺，后法师来了之后更名为法华寺，寺院位于天津蓟县，和我的老家仅一山一水之隔，法华寺和很多寺院区别很大，不靠科仪来赚钱，仅供出家人在此修行，是难得的一片净土，平常有信士来还提供免费的食宿，大部人会带些米面粮油过来。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 一位师兄说很多寺院做施食的时候，孤魂野鬼都是蜂拥而上，明国法师做的时候是排着队来的，法师坐禅时，还会有肉眼看不到的光覆盖住整个禅堂，当然这些我都看不到，大家当故事听听就好了。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 今天早上听闻明国师父的舍利在云门寺正式入塔，晚上传来他在另外一个世界的消息，有一些欢喜，高登莲台，得证果位。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 有时候想对于修行而言，死亡并不是终点，只是一个过程。虽然明国师父是禅宗的高僧，我是正一的道士，这些表相的东西其实并没有太多意义，修行的法门不同而言，大道同源，殊途同归，我们可能无法看到另外一个世界，需要做的仅仅是好好修行而已。</p>', 0, 1, '', '2023-09-29 20:07:21', '2023-09-29 20:07:21');
INSERT INTO `article` VALUES (44, 12, NULL, '《扁鹊心书》如何治疗中风的方子 灸关元五百壮', '', '', '', '', '', '', '', '', '此病皆因房事、六欲、七情所伤。真气虚，为风邪所乘，客于五脏之俞，则为中风偏枯等证。若中脾胃之俞，则右手足不用；中心肝之俞，则左手足不用。大抵能任用，但少力麻痹者为轻，能举而不能用者稍轻，全不能举动者最重。邪气入脏则废九窍，甚者卒中而死。入腑则坏四肢，或有可愈者。治法∶先灸关元五百壮，五日便安。次服保元丹一二斤，以壮元气；再服八仙丹、八风汤则终身不发。若不灸脐下，不服丹药，虽愈不过三五年，再作必死。然此证最忌汗、吐、下，损其元气必死。大凡风脉，浮而迟缓者生，急疾者重，一息八九至者死。', '', '<p>此病皆因房事、六欲、七情所伤。真气虚，为风邪所乘，客于五脏之俞，则为中风偏枯等证。若中脾胃之俞，则右手足不用；中心肝之俞，则左手足不用。大抵能任用，但少力麻痹者为轻，能举而不能用者稍轻，全不能举动者最重。邪气入脏则废九窍，甚者卒中而死。入腑则坏四肢，或有可愈者。<br><br>治法∶先灸关元五百壮，五日便安。次服保元丹一二斤，以壮元气；再服八仙丹、八风汤则终身不发。若不灸脐下，不服丹药，虽愈不过三五年，再作必死。然此证最忌汗、吐、下，损其元气必死。大凡风脉，浮而迟缓者生，急疾者重，一息八九至者死。（中风之证，古方书虽有中脏、中腑、中经脉之别，然其要不过闭证与脱证而已。闭证虽属实，而虚者不少，或可用开关通窍行痰疏气之剂。关窍一开，痰气稍顺，急当审其形藏，察其气血，而调治之。更视其兼证之有无，虚实之孰胜，或补或泻；再佐以先生之法，庶几为效速，而无痿废难起之患矣。至若脱证，唯一于虚，重剂参附或可保全，然不若先生之丹艾为万全也。予见近时医家，脱证已具三四，而犹云有风有痰，虽用参附而必佐以秦艽、天麻、胆星、竹沥冰陷疏散。是诚不知缓急者也，乌足与论医道哉。）<br><br>【治验】<br><br>一人病半身不遂，先灸关元五百壮，一日二服八仙丹，五日一服换骨丹，其夜觉患处汗出，来日病减四分，一月痊愈。再服延寿丹半斤，保元丹一斤，五十年病不作。千金等方，不灸关元，不服丹药，惟以寻常药治之，虽愈难久。<br><br>一人患左半身不遂，六脉沉细无力。余曰∶此必服峻利之药，损其真气，故脉沉细。病者云∶前月服捉虎丹，吐涎二升，此后稍轻，但未全愈耳。余叹曰∶中风本因元气虚损，今服吐剂，反伤元气，目下虽减，不数日再作，不复救矣，不十日果大反复，求治于余，虽服丹药竟不能起。</p>', 0, 1, '', '2023-09-29 20:07:21', '2023-09-29 20:07:21');
INSERT INTO `article` VALUES (45, 12, NULL, '“山修两日，静心之旅”道家传统文化体验营活动开始报名', '', '', '', '', '', '', '', '', '', '', '<p><img src=/uploads/ueditor/20221011/797844ac7424b701572b2270e3ae7e43.jpg title=797844ac7424b701572b2270e3ae7e43.jpg alt=1.jpg></p><p>道家文化，是中华传统文化之中最具有神秘色彩的文化之一，自三皇五帝至今，经历了数千年的演化和发展，已经深入到我们的日常工作生活之中。因此我们体验营的第一站就选择了道家文化体验，让更多的朋友可从繁忙的工作中暂时脱离开来，体验不一样的文化，让身与心可以在这里得到些许安宁。</p><p>宋代道士、诗人白玉蟾真人在诗中云：“满室天香仙子家，一琴一剑一杯茶。羽衣常带烟霞色，不染人间桃李花。”形容的就是道士超凡脱俗的生活。站桩、导引、采气、炼丹、符箓等等，这些小说里的词汇，其实自古至今一直贯穿在道士的日常修行生活之中。</p><p>本次体验营活动将持续两日，带领大家体验住观道长们的日常修行生活。同时针对本期体验营学员，道长们还将根据实际情况传授道部分道家健体养生方法，充分体现了“仙道贵生，无量度人”之理念。未来，我们还将走进龙虎山、武当山、茅山、青城山等道家洞天福地，进行更多的学习与交流活动。</p><p><strong>体验内容</strong></p><p>1、玄门早晚课</p><p>早晚课也叫玄门功课，是道观日常科仪之一，需要每日诵读功课，是修行的必要功课之一。道家认为“金书玉笈为入道之门墙，讽经诵咒乃修仙之径路。且夫功课者何为者也？功课者，课功也。”早晚课时长约1个小时，要求参与学员斋沐盥漱，衣冠严整、正心诚意。</p><p>2、太乙无极桩</p><p>桩功是道家最重要的基础养生功法，本次面向学员传授太乙无极桩功。道家认为站桩可使清气上升，浊气下降，更容易实现天人合一的境界，有着重要的养生作用。太乙无极桩一直为道家门派内的不传之秘法，代代口口相传。此法简单易学，坚持修炼，受用终身。</p><p>3、太乙养生功</p><p>太乙养生功源自武当，与太乙桩功同出一脉，是道家不传之秘，道家认为功法长期练习有着净化身体、清静心灵、消除障碍之效，功法通过口传心授的方式，聚集道家所说的先天之“元炁”，达到洗精伐髓、经脉疏通、滋养身心的的作用。</p><p>4、道医养生术</p><p>道医是以《道德经》中的道和黄帝内经为基本理论及阴阳五行学说为形神兼治手段，是道家与中医结合的一个医学流派，包括针灸、推拿、方药、祝由、导引等多种手段。本次体验营活动将由道长现场展示和教授上古祝由术，学员们还可以得到道长们的现场身心调理，亲身体验其奥妙之处。</p><p>5、玄门五术知识</p><p>五术是中国传统道家文化中极为重要的组成部分，是对庞大复杂的中国道术系统的最主要的分类，一般认为包括山、医、命、卜、相五类。以五术为基础，道长们将为学员们讲解日常生活的诸多注意事项，以便大家可以更好的规避和处理生活中遇到的相关问题。</p><p><strong>活动报名</strong></p><p>活动时间：2022年10月-11月（活动持续2天，每周五下午报到，周日下午返程，具体据疫情等政策要求另行通知）</p><p>招收人数：30人（男女不限，以报名先后顺序为准）</p><p>活动费用：2999元（原价4999）</p><p>报名要求：年龄20-60岁之间，身心健康，无重大疾病，无不良嗜好，认可传统道家文化和中医文化；中医从业者优先；所有人员要求48小时内核酸，暂不接受京外人员；因政策等原因活动人数有限，以报名先后顺序为准。</p><p>报名联系：静山道长</p><p>联系电话：19803158898</p><p>微信号码：daoyijingshan</p><p><img src=/uploads/ueditor/20221011/8bd7c33461f1812e827458f98931d3d7.jpg title=8bd7c33461f1812e827458f98931d3d7.jpg alt=8bd7c33461f1812e827458f98931d3d7.jpg style=width: 200px; height: 190px; width=200 vspace=0 height=190 border=0></p><p>活动地址：北京市房山区史家营乡柳林水村 圣莲山风景区</p><p><strong>活动须知</strong></p><p>1、报名截止后将由工作人员进行通知，因场地及防疫政策要求名额有限，未通知者则默认为本次体验营未被录取，敬请期待下次活动机会。 <br></p><p>2、录取后须持身份证原件办理住宿；持48小时内有效的核酸检测阴性证明，查验“健康码+行程卡”；暂不接受中高风险区人员。 <br></p><p>3、住宿提供水杯、牙膏、牙刷、毛巾、浴巾等用具。 <br></p><p>4、本次活动统一食宿，活动免费提供早、午、晚三餐，均为素食，桌餐。交通费和景区门票费自理。 <br></p><p>5、活动期间，手机保持静音状态，请提前做好准备。</p>', 0, 1, '', '2023-09-29 20:07:21', '2023-09-29 20:07:21');
INSERT INTO `article` VALUES (46, 12, NULL, '无有机巧之心，就会鲜有机械之事', '', '', '', '', '', '', '', '', '       《庄子》说忘机，和老君爷说的清静应该是一个道理，作为一个懒散的人，我更喜欢“俭”，比如少说话，不吃肉。最近也不大喜欢谈论道术，道术有时候会让人迷失，有的人变得傲慢，有的人变得偏执，有的人迷失在种种欲望里。园圃老者的故事里说：无有机巧之心，就会鲜有机械之事，我想这大概是另外一种“俭”。', '', '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 《庄子》说忘机，和老君爷说的清静应该是一个道理，作为一个懒散的人，我更喜欢“俭”，比如少说话，不吃肉。最近也不大喜欢谈论道术，道术有时候会让人迷失，有的人变得傲慢，有的人变得偏执，有的人迷失在种种欲望里。园圃老者的故事里说：无有机巧之心，就会鲜有机械之事，我想这大概是另外一种“俭”。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 又想起“看山是山,看水是水”的境界之说，为人疗疾多了我想应该也是如此，“看病是病，看病不是病”。其实大多的病来源于我们自己，七情在内，六淫在外，大部分时候是一种无奈。</p>', 0, 1, '', '2023-09-29 20:07:21', '2023-09-29 20:07:21');
INSERT INTO `article` VALUES (47, 12, NULL, '倪海厦推荐的治疗甲状腺扁桃体发炎药方：夏枯草煮鸡蛋', '', '', '', '', '', '', '', '', '', '', '<p><img src=/uploads/ueditor/20220720/16771275633fc106b9b841c435cbb809.jpg title=16771275633fc106b9b841c435cbb809.jpg alt=1.jpg></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 夏枯草因冬至生，夏至枯而得名，其味辛苦，性微寒，入肝胆二经，可治肝气郁结所到的瘰疬，用疏肝解郁的药物，配合夏枯草清热散结，效果极佳，据现代医学研究，夏枯草有降血压和抗多种细菌的作用，常用来治淋巴结核，甲状腺肿大，乳腺炎，高血压等，可用于肝阳上亢的高血压，头痛，耳鸣，眼花，烦热，性情急燥，失眠等，主治肝阳上亢，头痛头晕，目赤肿痛，高血压，咽喉肿痛，瘰疬，瘿瘤等。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夏枯草营养较为丰富，嫩茎叶中含有蛋白质、脂肪、碳水化合物、胡萝卜素、维生素B2、尼克酸和维生素C等成分。此外，还含有皂甙、芦丁、夏枯草甙、金丝桃甙及挥发油等。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人在健康时，尤其是小孩，喝碗蛋草汤，扁桃体一生不易发炎。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;记得要用夏枯草，不用夏枯球。体质虚寒者少食。</p>', 0, 1, '', '2023-09-29 20:07:21', '2023-09-29 20:07:21');

-- ----------------------------
-- Table structure for article_map_tag
-- ----------------------------
DROP TABLE IF EXISTS `article_map_tag`;
CREATE TABLE `article_map_tag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aid` int(11) NULL DEFAULT NULL COMMENT '文章id',
  `tid` int(11) NULL DEFAULT NULL COMMENT '标签id',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 94 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '文章-标签表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of article_map_tag
-- ----------------------------
INSERT INTO `article_map_tag` VALUES (20, 7, 0);
INSERT INTO `article_map_tag` VALUES (22, 6, 2);
INSERT INTO `article_map_tag` VALUES (23, 6, 1);
INSERT INTO `article_map_tag` VALUES (27, 1, 0);
INSERT INTO `article_map_tag` VALUES (32, 9, 0);
INSERT INTO `article_map_tag` VALUES (33, 8, 0);
INSERT INTO `article_map_tag` VALUES (34, 2, 0);
INSERT INTO `article_map_tag` VALUES (35, 3, 0);
INSERT INTO `article_map_tag` VALUES (36, 4, 0);
INSERT INTO `article_map_tag` VALUES (39, 11, 0);
INSERT INTO `article_map_tag` VALUES (42, 10, 0);
INSERT INTO `article_map_tag` VALUES (45, 12, 4);
INSERT INTO `article_map_tag` VALUES (58, 5, 0);
INSERT INTO `article_map_tag` VALUES (59, 13, 0);
INSERT INTO `article_map_tag` VALUES (83, 38, 0);
INSERT INTO `article_map_tag` VALUES (84, 39, 0);
INSERT INTO `article_map_tag` VALUES (85, 40, 0);
INSERT INTO `article_map_tag` VALUES (86, 41, 0);
INSERT INTO `article_map_tag` VALUES (87, 42, 0);
INSERT INTO `article_map_tag` VALUES (88, 43, 0);
INSERT INTO `article_map_tag` VALUES (89, 44, 0);
INSERT INTO `article_map_tag` VALUES (90, 45, 0);
INSERT INTO `article_map_tag` VALUES (91, 46, 0);
INSERT INTO `article_map_tag` VALUES (92, 47, 0);
INSERT INTO `article_map_tag` VALUES (93, 14, 0);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` tinyint(2) NOT NULL AUTO_INCREMENT COMMENT '栏目id',
  `pid` tinyint(2) NOT NULL DEFAULT 1 COMMENT '父级栏目',
  `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'seo标题',
  `seo_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'seo关键字',
  `seo_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'seo描述',
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目名称',
  `pinyin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目标识',
  `path` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '栏目路径',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目描述',
  `type` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '0 栏目 1 页面',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '网址',
  `sort` tinyint(2) NULL DEFAULT 0 COMMENT '排序',
  `target` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '打开方式 0 当前页面打开 1 新页面打开',
  `status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '0 显示 1隐藏',
  `mid` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '模型id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '网站栏目' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 0, '', '', '', '前端开发', 'fedev', '/fedev', '', '0', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (2, 0, '', '', '', 'node开发', 'nodejs', '/nodejs', '', '0', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (3, 0, '', '', '', '前端库', 'qianduanku', '/qianduanku', '', '0', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (4, 0, '', '', '', 'SEO', 'SEO', '/SEO', '', '0', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (5, 0, '', '', '', '禅悦cms', 'chanyue', '/chanyue', '', '1', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (6, 2, '', '', '', 'express', 'express', '/nodejs/express', '', '0', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (7, 2, '', '', '', '服务运维', 'fuwuyunwei', '/nodejs/fuwuyunwei', '', '0', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (8, 0, '', '', '', '关于', 'guanyu', '/guanyu', '', '1', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (9, 1, '', '', '', 'JavaScript', 'JavaScript', '/qianduankaifa/JavaScript', '', '0', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (10, 1, '', '', '', 'vue', 'vue', '/qianduankaifa/vue', '', '0', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (11, 2, '', '', '', 'mysql', 'mysql', '/nodekaifa/mysql', '', '0', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (12, 3, '', '', '', '采集测试', 'caijiceshi', '/qianduanku/caijiceshi', '', '0', '', 0, '0', '0', '0');

-- ----------------------------
-- Table structure for collect
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `taskName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '任务名称',
  `targetUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '采集地址',
  `listTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '列表tag标签',
  `startNum` int(11) NULL DEFAULT 1 COMMENT '开始页面',
  `endNum` int(11) NULL DEFAULT NULL COMMENT '结束页面',
  `increment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '递增数量默认1',
  `titleTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '标题',
  `articleTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '文章内容',
  `charset` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '编码 1-> utf-8  2-> gb2312',
  `pages` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '采集地址集合',
  `clearRegCode` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '清理文章多余标签正则',
  `removeCode` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '清理代码',
  `cid` int(11) NULL DEFAULT NULL COMMENT '存储到栏目',
  `status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '发布状态 1 草稿 2 发布',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of collect
-- ----------------------------
INSERT INTO `collect` VALUES (1, '草堂札记', 'http://www.tangnet.cn/lists/31.html?page=${page}', '.news-list h5 a', 1, 1, '1', '.title h1', '.content', '1', 'http://www.tangnet.cn/news/46.html,http://www.tangnet.cn/news/44.html,http://www.tangnet.cn/news/43.html,http://www.tangnet.cn/news/42.html,http://www.tangnet.cn/news/37.html,http://www.tangnet.cn/news/27.html,http://www.tangnet.cn/news/28.html,http://www.tangnet.cn/news/31.html,http://www.tangnet.cn/news/26.html,http://www.tangnet.cn/news/24.html', '', NULL, 12, '2', '2023-09-29 19:33:57', '2023-09-29 20:05:09');

-- ----------------------------
-- Table structure for down
-- ----------------------------
DROP TABLE IF EXISTS `down`;
CREATE TABLE `down`  (
  `aid` int(11) NOT NULL,
  `downName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `downLink` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT ''
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of down
-- ----------------------------

-- ----------------------------
-- Table structure for field
-- ----------------------------
DROP TABLE IF EXISTS `field`;
CREATE TABLE `field`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model_id` int(11) NULL DEFAULT NULL COMMENT '模型id',
  `field_cname` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模型字段中文名称',
  `field_ename` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '模型字段英文名称',
  `field_type` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '表单类型\r\n1单行文本	\r\n2.多行文本 \r\n3.下拉菜单 \r\n4.单选 \r\n5.多选 \r\n6.时间和日期 7.数字',
  `field_values` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '字段配置 下拉菜单多选等选项配置',
  `field_default` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '默认值',
  `field_sort` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '字段顺序',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `model_id`(`model_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '字段字典' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of field
-- ----------------------------
INSERT INTO `field` VALUES (1, 1, '下载名称', 'downName', '1', '', '', '0');
INSERT INTO `field` VALUES (2, 1, '下载链接', 'downLink', '1', '', '', '0');

-- ----------------------------
-- Table structure for frag
-- ----------------------------
DROP TABLE IF EXISTS `frag`;
CREATE TABLE `frag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '名称',
  `mark` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标识',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '内容',
  `createdAt` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '碎片' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of frag
-- ----------------------------
INSERT INTO `frag` VALUES (1, '广告', 'ad', '<p>观呼吸，起禅悦，听心路，入定境。</p>\n<p>肚脐放松，神藏其中，火起气成，百日呼吸渐止。后扩展到整个小腹，后扩展到全身，接天地能量入体，天人合一，化气为光，时刻出入有无。</p>\n<p>修行开经络，通窍穴，开天门，透全身，化身心入空，后天人合一，后化气为场，化场为电，化电为光，化光为虚无，化虚无为寂静，化寂静为寂灭，化寂灭，后修三千功德，了无所得，无所住则道成。</p>', '2023-07-14 20:48:50');
INSERT INTO `frag` VALUES (2, '版权', 'copyright', '<p class=\"f-13 text-c c-bfbfbf\">自豪的采用 chanyue-cms</p>', '2023-08-05 17:34:49');
INSERT INTO `frag` VALUES (3, 'chanyue-cms介绍', 'chanyue-introduce', '<p class=\"mt-10 f-14 lh-24\">禅悦内容管理系统，基于`nodejs` `express` `mysql` `knex` `jwt` `vue3` 进行开发的一套实用轻量cms系统，且提供丰富的api数据接口。常用企业网站，微信小程序官网，图片网站，新闻资讯，软件下载网站，博客，文章等诸多文章类型网站开发，也适用于前端二次开发。<a title=\"\" href=\"https://gitee.com/yanyutao0402/chanyue-cms\" target=\"_blank\" rel=\"noopener\">[详情]</a></p>', '2023-08-05 17:36:09');
INSERT INTO `frag` VALUES (4, '底部-前端', 'footer-fe', '<div class=\"col-6\">\n<h4 class=\"f-15 pb-10\">前端</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">JavaScript</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">vue</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">react</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">css3</a></p>\n</div>', '2023-08-10 17:39:04');
INSERT INTO `frag` VALUES (5, '底部-nodejs', 'footer-nodejs', '<div class=\"col-6\">\n<h4 class=\"f-15  pb-10\">nodejs</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">express</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">koa</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">mysql</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">mongoDB</a></p>\n</div>', '2023-08-10 17:40:42');
INSERT INTO `frag` VALUES (6, '底部-禅悦', 'footer-chanyue', '<div class=\"col-6\">\n<h4 class=\"f-15 pb-10\">chanyue-cms</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">在线文档</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">视频教程</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">标签工具</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">模板</a></p>\n</div>', '2023-08-10 17:41:18');
INSERT INTO `frag` VALUES (7, '底部-关于', 'footer-guanyu', '<div class=\"col-6\">\n<h4 class=\"f-15  pb-10\">关于</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">关于我们</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">最新动态</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">联系作者</a></p>\n</div>', '2023-08-10 17:41:52');

-- ----------------------------
-- Table structure for friendlink
-- ----------------------------
DROP TABLE IF EXISTS `friendlink`;
CREATE TABLE `friendlink`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `sort` tinyint(255) NULL DEFAULT 0,
  `createdAt` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '友情链接' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of friendlink
-- ----------------------------
INSERT INTO `friendlink` VALUES (1, '香港日报', 'http://www.hongkongdaily.net', 0, '2023-07-22 22:59:55');

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `tel` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '电话',
  `wx` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信号',
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '留言内容',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '留言' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES (1, '禅悦内容管理系统好用吗', '13366826071', 'yanyutao2014', '仰天大笑出门去，我辈岂是蓬蒿人！', '2023-07-22 23:03:28', NULL);

-- ----------------------------
-- Table structure for model
-- ----------------------------
DROP TABLE IF EXISTS `model`;
CREATE TABLE `model`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模型名称',
  `table_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模型对应的表名',
  `status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '1->开启 0->关闭',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '模型字典' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of model
-- ----------------------------
INSERT INTO `model` VALUES (1, 'down', 'down', '1');

-- ----------------------------
-- Table structure for page
-- ----------------------------
DROP TABLE IF EXISTS `page`;
CREATE TABLE `page`  (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `cid` int(2) NULL DEFAULT NULL COMMENT '栏目id',
  `title` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面标题',
  `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标题',
  `seo_keywords` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '关键词',
  `seo_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '描述',
  `source` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '来源',
  `author` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '作者',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '内容',
  `pv` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '浏览量',
  `status` tinyint(2) NULL DEFAULT 0 COMMENT '0 发布 1 不发布',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '单页' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of page
-- ----------------------------

-- ----------------------------
-- Table structure for site
-- ----------------------------
DROP TABLE IF EXISTS `site`;
CREATE TABLE `site`  (
  `id` int(2) NOT NULL AUTO_INCREMENT COMMENT '站点id',
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '网站名称',
  `domain` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '网站域名',
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `wx` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信',
  `icp` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'ICP备案号',
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '站点统计代码',
  `json` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '万能配置',
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面标题',
  `keywords` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面关键词',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面描述',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `template` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'view模板',
  `appid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信小程序appid',
  `secret` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信小程序secret',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '网站信息' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of site
-- ----------------------------
INSERT INTO `site` VALUES (1, '前端小栈', 'www.chanyue.top', '867528315@qq.com', NULL, NULL, '', '{\"siteSubtitle\":\"• 禅悦\"}', 'chanyue-cms禅悦内容管理系统', 'cms,chanyue-cms,chanyue,内容管理系统,nodejs,express,mysql,knex,jwt,vue3', '禅悦内容管理系统，基于nodejs express mysql knex jwt vue3 进行开发的一套实用轻量cms系统，且提供丰富的api数据接口。常用企业网站，微信小程序官网，图片网站，新闻资讯，软件下载网站，博客，文章等诸多文章类型网站开发，也适用于前端二次开发。', NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for sys_app
-- ----------------------------
DROP TABLE IF EXISTS `sys_app`;
CREATE TABLE `sys_app`  (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `template` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '' COMMENT 'view模板名称',
  `appid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '微信小程序appid',
  `secret` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '微信小程序秘钥',
  `accessKey` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云ak',
  `secretKey` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云sk',
  `domain` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云域名',
  `bucket` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云bucket',
  `uploadWay` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '上传方式 1->普通 2->七牛云',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_app
-- ----------------------------
INSERT INTO `sys_app` VALUES (1, 'default', 's', 'x', 'x', 'x', 'x', 'x', '1', '2023-10-07 21:52:21', '2023-10-13 09:38:27');

-- ----------------------------
-- Table structure for sys_config
-- ----------------------------
DROP TABLE IF EXISTS `sys_config`;
CREATE TABLE `sys_config`  (
  `config_id` int(5) NOT NULL COMMENT '参数主键',
  `config_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '参数名称',
  `config_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '参数键名',
  `config_value` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '参数键值',
  `config_type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '系统内置（Y是 N否）',
  `createAt` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updateAt` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`config_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '系统配置表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_config
-- ----------------------------

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '菜单ID',
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '菜单名称',
  `pid` bigint(20) NULL DEFAULT 0 COMMENT '父菜单ID',
  `order` int(4) NULL DEFAULT 0 COMMENT '显示顺序',
  `path` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '路由地址',
  `component_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '组件名称',
  `component_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '组件路径',
  `query` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '路由参数',
  `is_frame` int(1) NULL DEFAULT 0 COMMENT '是否为外链（0否 1是）',
  `is_cache` int(1) NULL DEFAULT 0 COMMENT '是否缓存（0不缓存 1缓存）',
  `type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '菜单类型（ C菜单 F按钮）',
  `visible` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '菜单状态（0隐藏 1显示 ）',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '菜单状态（0停用 1正常）',
  `perms` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限标识',
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '菜单图标',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '菜单权限表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------

-- ----------------------------
-- Table structure for sys_notice
-- ----------------------------
DROP TABLE IF EXISTS `sys_notice`;
CREATE TABLE `sys_notice`  (
  `notice_id` int(4) NOT NULL AUTO_INCREMENT COMMENT '公告ID',
  `notice_title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公告标题',
  `notice_type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公告类型（1通知 2公告）',
  `notice_content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '公告内容',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公告状态（0关闭  1正常）',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`notice_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '通知公告表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_notice
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `role_id` int(20) NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `role_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色名称',
  `role_sort` int(4) NOT NULL DEFAULT 0 COMMENT '显示顺序',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '角色状态（1正常 0停用）',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `remark` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`role_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_menu`;
CREATE TABLE `sys_role_menu`  (
  `role_id` bigint(20) NOT NULL COMMENT '角色ID',
  `menu_id` bigint(20) NOT NULL COMMENT '菜单ID',
  PRIMARY KEY (`role_id`, `menu_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色和菜单关联表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role_menu
-- ----------------------------

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户id',
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户账号',
  `password` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '密码',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '帐号状态（1正常 0停用）',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user
-- ----------------------------

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role`  (
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `role_id` bigint(20) NOT NULL COMMENT '角色ID',
  PRIMARY KEY (`user_id`, `role_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户和角色关联表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user_role
-- ----------------------------

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标签名称',
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '标识',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '标签' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES (1, 'cms', 'cms');
INSERT INTO `tag` VALUES (2, 'js库', 'jslib');
INSERT INTO `tag` VALUES (3, '开发工具', 'devtool');
INSERT INTO `tag` VALUES (4, 'pdf', 'pdf');

SET FOREIGN_KEY_CHECKS = 1;
