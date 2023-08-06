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

 Date: 06/08/2023 22:34:25
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
  `createdAt` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '文章表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, 6, '', '国内常见的基于node开发的cms系统', '', '', '3', '', '', '', '', '', '1.chanyue-cms\n禅悦内容管理系统，基于nodejs&nbsp;express&nbsp;mysql&nbsp;knex&nbsp;jwt&nbsp;vue3&nbsp;进行开发的一套实用轻量cms系统，且提供丰富的api数据接口。常用企业网站，微信小程序官网，图片网站，新闻资讯，软件下载网站，博客，文章等诸多文章类型网站开发，也适用于前端二次开发。\ngitee:https://gitee.com/yanyutao0402/chanyue-cms\n2.DoraCMS\nDoraCMS&nbsp;是', '/public/cover/09.jpg', '<p>1.chanyue-cms</p>\n<p>禅悦内容管理系统，基于<code>nodejs</code>&nbsp;<code>express</code>&nbsp;<code>mysql</code>&nbsp;<code>knex</code>&nbsp;<code>jwt</code>&nbsp;<code>vue3</code>&nbsp;进行开发的一套实用轻量cms系统，且提供丰富的api数据接口。常用企业网站，微信小程序官网，图片网站，新闻资讯，软件下载网站，博客，文章等诸多文章类型网站开发，也适用于前端二次开发。</p>\n<p>gitee:https://gitee.com/yanyutao0402/chanyue-cms</p>\n<p>2.DoraCMS</p>\n<p><code>DoraCMS</code>&nbsp;是基于 nodejs 的内容管理系统，所用技术栈包含 eggjs、mongodb、vue、single-spa 等。代码结构清晰，目录规划合理，项目整体考虑到了从普通用户使用，开发者开发，编译，发布的整个流程。</p>\n<p>gitee:https://github.com/doramart/DoraCMS/</p>\n<p>3.nodercms</p>\n<p>nodercms基于nodejs mongodb开发的简单的内容管理系统。</p>\n<p>官网：http://www.nodercms.com/</p>', 0, 0, '', '2023-06-27 22:48:40', '2023-06-27 22:48:40');
INSERT INTO `article` VALUES (2, 4, '', '帅气青年', '', '', '3,2', '', '', '', '', '', '', '/public/template/default/img/11.jpg', '<p><img src=\"public/template/default/img/11.jpg\"></p>', 0, 0, '', '2023-08-06 10:16:35', '2023-08-06 10:16:35');
INSERT INTO `article` VALUES (3, 4, '', '可爱小姑娘', '', '', '3', '', '', '', '', '', '', '/public/template/default/img/12.jpg', '<p><img src=\"public/template/default/img/12.jpg\" alt=\"\" width=\"455\" height=\"290\"></p>', 0, 0, '', '2023-08-06 10:18:03', '2023-08-06 10:18:03');
INSERT INTO `article` VALUES (4, 4, '', '运动少女', NULL, '', '3', NULL, NULL, NULL, NULL, NULL, '', '/public/template/default/img/13.jpg', '<p><img src=\"public/template/default/img/13.jpg\" alt=\"\" width=\"455\" height=\"290\"></p>', 0, 0, NULL, '2023-08-06 10:21:07', '2023-08-06 10:21:07');
INSERT INTO `article` VALUES (5, 4, '', '梦幻小岛', '', '', '3', '', '', '', '', '', '', '/public/template/default/img/14.jpg', '<p><img src=\"public/template/default/img/14.jpg\" alt=\"\" width=\"455\" height=\"290\"></p>', 0, 0, 'http://www.baidu.com', '2023-08-06 10:21:44', '2023-08-06 10:21:44');
INSERT INTO `article` VALUES (6, 3, '', '「头条」推荐 6 个 火火火火 的开源项目', '', '2,1', '1', '', '', '', '', '', '本期推荐开源项目目录：ChatGPT 网页应用（AI）、AI 换脸（AI）、API 调用 Midjourney 进行 AI 画图（AI）、如何使用 Open AI 的 API？（AI）、中华古诗词数据库、动画编程。', '/public/cover/01.jpg', '<div>\n<p>本期推荐开源项目目录：</p>\n<ol>\n<li>\n<p>ChatGPT 网页应用（AI）</p>\n</li>\n<li>\n<p>AI 换脸（AI）</p>\n</li>\n<li>\n<p>API 调用 Midjourney 进行 AI 画图（AI）</p>\n</li>\n<li>\n<p>如何使用 Open AI 的 API？（AI）</p>\n</li>\n<li>\n<p>中华古诗词数据库</p>\n</li>\n<li>\n<p>动画编程</p>\n</li>\n</ol>\n<h2 data-id=\"heading-0\">01. ChatGPT 网页应用</h2>\n<p>基于 ChatGPT-Next-Web 二次开发的 ChatGPT 网页付费系统，包含用户管理模块和后台看板。</p>\n<p>ChatGPT-Admin-Web 付费系统包含七个模块，包括：内容接口、用户系统、支付、敏感词过滤、自由聊天、分销、收益</p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n<p>开源地址：<a title=\"https://github.com/AprilNEA/ChatGPT-Admin-Web\" href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FAprilNEA%2FChatGPT-Admin-Web\" target=\"_blank\" rel=\"noopener\">github.com/AprilNEA/Ch&hellip;</a></p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n<h2 data-id=\"heading-1\">02. AI 换脸</h2>\n<p>适用于视频聊天的 AI 换脸模型，你可以使用这个 AI 模型替换摄像头中的面部或视频中的面部。这是一些例子：</p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n<p>开源地址：<a title=\"https://github.com/iperov/DeepFaceLive\" href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fiperov%2FDeepFaceLive\" target=\"_blank\" rel=\"noopener\">github.com/iperov/Deep&hellip;</a></p>\n<h2 data-id=\"heading-2\">03. API 调用 Midjourney 进行 AI 画图</h2>\n<p>通过代理 MidJourney 的 Discord 频道，实现 api 形式调用AI绘图。</p>\n<p>前提是你要注册 Midjourney 账号、并在 Discord 创建在自己的频道和机器人，然后就可以根据这个项目的指引一步步去使用 Api 调用 Midjourney 了。</p>\n<p>开源地址：<a title=\"https://github.com/novicezk/midjourney-proxy\" href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fnovicezk%2Fmidjourney-proxy\" target=\"_blank\" rel=\"noopener\">github.com/novicezk/mi&hellip;</a></p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n<h2 data-id=\"heading-3\">04. 如何使用 Open AI 的 API？</h2>\n<p>Open AI-Cook Book 是一本 Open AI 的 API 使用指南，提供了一些通过 Open AI 的 API 搭建任务的示例代码。</p>\n<p>开源地址：<a title=\"https://github.com/openai/openai-cookbook\" href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fopenai%2Fopenai-cookbook\" target=\"_blank\" rel=\"noopener\">github.com/openai/open&hellip;</a></p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n<h2 data-id=\"heading-4\">05. 中华古诗词数据库</h2>\n<p>为了让古诗词这个人类瑰宝传承下去，中华古诗词数据库诞生了。</p>\n<p>这个项目整理了中华大量的古诗词，支持 Json 格式。数据库包含唐宋两朝近一万四千古诗人的作品, 接近 5.5 万首唐诗、26 万宋诗. 两宋时期1564位词人，21050首词。</p>\n<p>开源地址：<a title=\"https://github.com/chinese-poetry/chinese-poetry\" href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fchinese-poetry%2Fchinese-poetry\" target=\"_blank\" rel=\"noopener\">github.com/chinese-poe&hellip;</a></p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n<ol start=\"6\">\n<li>动画编程</li>\n</ol>\n<p>Motion Canvas 是一个 TypeScript 库，可以通过编程的方式生成动画，并提供所述动画的实时预览的编辑器。</p>\n<p>开源地址：<a title=\"https://github.com/motion-canvas/motion-canvas\" href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmotion-canvas%2Fmotion-canvas\" target=\"_blank\" rel=\"noopener\">github.com/motion-canv&hellip;</a></p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n<p>历史盘点</p>\n<p>逛逛 GitHub 每天推荐一个好玩有趣的开源项目。历史推荐的开源项目已经收录到 GitHub 项目，欢迎 Star：</p>\n<div class=\"code-block-extension-header\">\n<div class=\"code-block-extension-headerLeft\">\n<div class=\"code-block-extension-foldBtn\">&nbsp;</div>\n</div>\n<div class=\"code-block-extension-headerRight\"><span class=\"code-block-extension-lang\">arduino</span>\n<div class=\"code-block-extension-copyCodeBtn\">复制代码</div>\n</div>\n</div>\n<pre><code class=\"hljs language-arduino code-block-extension-codeShowNum\" lang=\"arduino\"><span class=\"code-block-extension-codeLine\" data-line-num=\"1\">地址：https:<span class=\"hljs-comment\">//github.com/Wechat-ggGitHub/Awesome-GitHub-Repo</span></span>\n</code></pre>\n<p><img class=\"medium-zoom-image\" src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d9699c1454af4e7aa91d4b7c2a2fb4fb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp\" alt=\"\" loading=\"lazy\"></p>\n<p>​</p>\n<p>编辑</p>\n<p>添加图片注释，不超过 140 字（可选）</p>\n</div>\n<p>&nbsp;</p>\n<div>作者：逛逛GitHub<br>链接：https://juejin.cn/post/7240690534075318309<br>来源：稀土掘金<br>著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</div>', 0, 2, '', '2023-08-06 10:24:34', '2023-08-06 10:24:34');
INSERT INTO `article` VALUES (7, 9, '', '什么是闭包，如何合理的使用闭包', '', '', '2', '', '', '', '', '', '闭包（closure）是指函数与其周围的状态（lexical environment，词法环境）的组合。这个环境包含了在函数声明时所能访问的所有变量和参数，并且在函数执行过程中始终存在。', NULL, '<div>\n<div>\n<p>闭包（closure）是指函数与其周围的状态（lexical environment，词法环境）的组合。这个环境包含了在函数声明时所能访问的所有变量和参数，并且在函数执行过程中始终存在。</p>\n<p>在JavaScript中，每当一个函数被创建时，就会创建一个新的词法环境。这个词法环境包含了函数中使用的所有变量和参数。如果这个函数返回一个函数，则返回的函数将持有这个词法环境，也就是说，它可以访问在父函数中定义的所有变量和参数。这种函数就称为闭包。</p>\n<p><strong>一、闭包的特点</strong></p>\n<p>闭包是指函数能够访问其定义时所在的词法作用域的特性。具体来说，闭包有以下几个特点：</p>\n<ol>\n<li>函数嵌套函数：闭包必须有函数嵌套函数的结构。</li>\n<li>内部函数可以访问外部函数的变量：内部函数可以访问外部函数中的变量，即使在外部函数执行完毕后，这些变量仍然可以被访问。</li>\n<li>外部函数返回内部函数：外部函数必须返回内部函数，才能形成闭包。</li>\n</ol>\n<p><strong>二、闭包的使用场</strong></p>\n<p><strong>封装变量：使用闭包可以实现变量的私有化，从而避免全局变量的污染。</strong></p>\n<p>通过将函数和函数内部定义的变量作为一个整体，形成私有作用域，从而实现变量的封装。具体来说，闭包可以将变量的作用域限制在函数内部，从而避免了全局变量的污染和外部对变量的直接访问。</p>\n<p>下面是一个简单的示例，演示了如何使用闭包实现变量的封装</p>\n<div class=\"code-block-extension-header\">\n<div class=\"code-block-extension-headerLeft\">\n<div class=\"code-block-extension-foldBtn\">&nbsp;</div>\n</div>\n<div class=\"code-block-extension-headerRight\"><span class=\"code-block-extension-lang\">scss</span>\n<div class=\"code-block-extension-copyCodeBtn\">复制代码</div>\n</div>\n</div>\n<pre><code class=\"hljs language-scss code-block-extension-codeShowNum\" lang=\"scss\"><span class=\"code-block-extension-codeLine\" data-line-num=\"1\">function <span class=\"hljs-built_in\">createCounter</span>() {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"2\">  let count = <span class=\"hljs-number\">0</span>;</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"3\">  return function () {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"4\">    count++;</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"5\">    console<span class=\"hljs-selector-class\">.log</span>(count);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"6\">  };</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"7\">}</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"9\">const counter = <span class=\"hljs-built_in\">createCounter</span>();</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"10\"><span class=\"hljs-built_in\">counter</span>(); <span class=\"hljs-comment\">// 输出 1</span></span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"11\"><span class=\"hljs-built_in\">counter</span>(); <span class=\"hljs-comment\">// 输出 2</span></span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"12\"><span class=\"hljs-built_in\">counter</span>(); <span class=\"hljs-comment\">// 输出 3</span></span>\n</code></pre>\n<p>在上面的代码中，<code>createCounter</code>&nbsp;函数返回了一个内部函数，该函数可以访问&nbsp;<code>createCounter</code>&nbsp;中定义的&nbsp;<code>count</code>&nbsp;变量。由于&nbsp;<code>count</code>&nbsp;变量定义在&nbsp;<code>createCounter</code>&nbsp;函数内部，因此外部无法直接访问该变量，从而实现了变量的封装。</p>\n<p>通过调用&nbsp;<code>createCounter</code>&nbsp;函数返回的内部函数，可以实现计数器的功能，每次调用时计数器加 1，最后输出计数器的值。由于&nbsp;<code>count</code>&nbsp;变量被定义在&nbsp;<code>createCounter</code>&nbsp;函数内部，并且该函数返回的是一个闭包，因此&nbsp;<code>count</code>&nbsp;变量的值可以被保存在内存中，并且在多次调用时能够保持不变。</p>\n<p><strong>实现模块化：通过闭包可以将代码模块化，从而避免变量名冲突等问题。</strong></p>\n<p>使用闭包，可以将模块内部的状态和方法封装起来，从而实现模块化的设计。下面是一个简单的示例，演示了如何使用闭包实现模块化编程：</p>\n<div class=\"code-block-extension-header\">\n<div class=\"code-block-extension-headerLeft\">\n<div class=\"code-block-extension-foldBtn\">&nbsp;</div>\n</div>\n<div class=\"code-block-extension-headerRight\"><span class=\"code-block-extension-lang\">javascript</span>\n<div class=\"code-block-extension-copyCodeBtn\">复制代码</div>\n</div>\n</div>\n<pre><code class=\"hljs language-javascript code-block-extension-codeShowNum\" lang=\"javascript\"><span class=\"code-block-extension-codeLine\" data-line-num=\"1\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-variable language_\">module</span> = (<span class=\"hljs-keyword\">function</span> () {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"2\">  <span class=\"hljs-keyword\">let</span> count = <span class=\"hljs-number\">0</span>;</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"4\">  <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">increment</span>() {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"5\">    count++;</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"6\">    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(count);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"7\">  }</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"9\">  <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">decrement</span>() {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"10\">    count--;</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"11\">    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(count);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"12\">  }</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"14\">  <span class=\"hljs-keyword\">return</span> {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"15\">    increment,</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"16\">    decrement,</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"17\">  };</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"18\">})();</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"20\"><span class=\"hljs-variable language_\">module</span>.<span class=\"hljs-title function_\">increment</span>(); <span class=\"hljs-comment\">// 输出 1</span></span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"21\"><span class=\"hljs-variable language_\">module</span>.<span class=\"hljs-title function_\">increment</span>(); <span class=\"hljs-comment\">// 输出 2</span></span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"22\"><span class=\"hljs-variable language_\">module</span>.<span class=\"hljs-title function_\">decrement</span>(); <span class=\"hljs-comment\">// 输出 1</span></span>\n</code></pre>\n<p>在上面的代码中，定义了一个自执行函数，该函数返回了一个对象，该对象包含两个方法&nbsp;<code>increment</code>&nbsp;和&nbsp;<code>decrement</code>。这两个方法都可以访问函数内部的变量&nbsp;<code>count</code>，从而实现了模块内部的状态封装。</p>\n<p>在执行该函数时，会创建一个闭包，该闭包可以访问自执行函数内部的变量和方法。由于闭包的特性，外部无法访问自执行函数内部的变量和方法，从而实现了模块化的设计。</p>\n<p><strong>实现柯里化：使用闭包可以实现柯里化，从而方便地进行函数组合。</strong></p>\n<p>柯里化（Currying）是一种函数式编程技术，它允许我们把接受多个参数的函数转化为一系列只接受一个参数的函数，且这些函数都返回一个新函数，新函数可以接受下一个参数，直到所有参数被接受完毕。</p>\n<p>举个例子，假设我们有一个加法函数&nbsp;<code>add</code>，它接受两个参数并返回它们的和：</p>\n<div class=\"code-block-extension-header\">\n<div class=\"code-block-extension-headerLeft\">\n<div class=\"code-block-extension-foldBtn\">&nbsp;</div>\n</div>\n<div class=\"code-block-extension-headerRight\"><span class=\"code-block-extension-lang\">scss</span>\n<div class=\"code-block-extension-copyCodeBtn\">复制代码</div>\n</div>\n</div>\n<pre><code class=\"hljs language-scss code-block-extension-codeShowNum\" lang=\"scss\"><span class=\"code-block-extension-codeLine\" data-line-num=\"1\">function <span class=\"hljs-built_in\">add</span>(x, y) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"2\">  return x + y;</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"3\">}</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"5\"><span class=\"hljs-built_in\">add</span>(<span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">3</span>); <span class=\"hljs-comment\">// 输出 5</span></span>\n</code></pre>\n<p>通过柯里化，我们可以把这个函数转化为一个只接受一个参数的函数：</p>\n<div class=\"code-block-extension-header\">\n<div class=\"code-block-extension-headerLeft\">\n<div class=\"code-block-extension-foldBtn\">&nbsp;</div>\n</div>\n<div class=\"code-block-extension-headerRight\"><span class=\"code-block-extension-lang\">javascript</span>\n<div class=\"code-block-extension-copyCodeBtn\">复制代码</div>\n</div>\n</div>\n<pre><code class=\"hljs language-javascript code-block-extension-codeShowNum\" lang=\"javascript\"><span class=\"code-block-extension-codeLine\" data-line-num=\"1\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">add</span>(<span class=\"hljs-params\">x</span>) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"2\">  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">y</span>) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"3\">    <span class=\"hljs-keyword\">return</span> x + y;</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"4\">  };</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"5\">}</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"7\"><span class=\"hljs-title function_\">add</span>(<span class=\"hljs-number\">2</span>)(<span class=\"hljs-number\">3</span>); <span class=\"hljs-comment\">// 输出 5</span></span>\n</code></pre>\n<p>在这个例子中，我们将&nbsp;<code>add</code>&nbsp;函数转化为一个返回一个函数的函数。返回的函数可以接受第二个参数&nbsp;<code>y</code>，并返回它们的和。</p>\n<p>使用闭包实现柯里化非常方便。我们可以使用一个函数返回另一个函数，并在返回的函数中使用闭包来保留外部函数的参数。下面是一个简单的示例：</p>\n<div class=\"code-block-extension-header\">\n<div class=\"code-block-extension-headerLeft\">\n<div class=\"code-block-extension-foldBtn\">&nbsp;</div>\n</div>\n<div class=\"code-block-extension-headerRight\"><span class=\"code-block-extension-lang\">javascript</span>\n<div class=\"code-block-extension-copyCodeBtn\">复制代码</div>\n</div>\n</div>\n<pre><code class=\"hljs language-javascript code-block-extension-codeShowNum\" lang=\"javascript\"><span class=\"code-block-extension-codeLine\" data-line-num=\"1\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">add</span>(<span class=\"hljs-params\">x</span>) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"2\">  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">y</span>) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"3\">    <span class=\"hljs-keyword\">return</span> x + y;</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"4\">  };</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"5\">}</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"7\"><span class=\"hljs-keyword\">const</span> add2 = <span class=\"hljs-title function_\">add</span>(<span class=\"hljs-number\">2</span>);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"8\"><span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title function_\">add2</span>(<span class=\"hljs-number\">3</span>)); <span class=\"hljs-comment\">// 输出 5</span></span>\n</code></pre>\n<p>在上面的示例中，<code>add</code>&nbsp;函数返回一个新函数，该函数接受一个参数&nbsp;<code>y</code>&nbsp;并返回它们的和。我们可以将&nbsp;<code>add</code>&nbsp;函数应用于第一个参数&nbsp;<code>2</code>，从而创建一个新的函数&nbsp;<code>add2</code>。<code>add2</code>&nbsp;函数只需要一个参数&nbsp;<code>y</code>，它会将&nbsp;<code>2</code>&nbsp;和&nbsp;<code>y</code>&nbsp;相加并返回结果。</p>\n<p>使用闭包实现柯里化的关键在于，返回的函数可以访问外部函数的变量&nbsp;<code>x</code>，从而将其保留下来。每次调用返回的函数时，它都会使用之前的参数&nbsp;<code>x</code>，并接受一个新的参数&nbsp;<code>y</code>，从而实现柯里化的效果。</p>\n<p><strong>实现异步编程：使用闭包可以实现异步编程，从而避免回调地狱的问题。</strong></p>\n<p>因为它们可以帮助我们处理回调函数的嵌套和异步代码的执行顺序。</p>\n<p>下面是一个使用闭包实现异步编程的示例。假设我们有一个&nbsp;<code>getData</code>&nbsp;函数，它会从远程服务器获取数据。由于网络请求是异步的，我们需要使用回调函数来处理获取到数据的情况。我们可以使用闭包来避免回调函数的嵌套，从而提高代码的可读性。</p>\n<div class=\"code-block-extension-header\">\n<div class=\"code-block-extension-headerLeft\">\n<div class=\"code-block-extension-foldBtn\">&nbsp;</div>\n</div>\n<div class=\"code-block-extension-headerRight\"><span class=\"code-block-extension-lang\">scss</span>\n<div class=\"code-block-extension-copyCodeBtn\">复制代码</div>\n</div>\n</div>\n<pre><code class=\"hljs language-scss code-block-extension-codeShowNum\" lang=\"scss\"><span class=\"code-block-extension-codeLine\" data-line-num=\"1\">function <span class=\"hljs-built_in\">getData</span>(url, onSuccess, onError) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"2\">  const xhr = new <span class=\"hljs-built_in\">XMLHttpRequest</span>();</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"3\">  xhr<span class=\"hljs-selector-class\">.open</span>(\'GET\', url);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"4\">  xhr<span class=\"hljs-selector-class\">.onload</span> = <span class=\"hljs-built_in\">function</span>() {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"5\">    if (xhr.status === <span class=\"hljs-number\">200</span>) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"6\">      <span class=\"hljs-built_in\">onSuccess</span>(xhr.response);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"7\">    } else {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"8\">      <span class=\"hljs-built_in\">onError</span>(xhr.statusText);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"9\">    }</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"10\">  };</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"11\">  xhr<span class=\"hljs-selector-class\">.onerror</span> = <span class=\"hljs-built_in\">function</span>() {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"12\">    <span class=\"hljs-built_in\">onError</span>(xhr.statusText);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"13\">  };</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"14\">  xhr<span class=\"hljs-selector-class\">.send</span>();</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"15\">}</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"17\">function <span class=\"hljs-built_in\">processData</span>(data) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"18\">  <span class=\"hljs-comment\">// 处理数据</span></span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"19\">}</span>\n\n<span class=\"code-block-extension-codeLine\" data-line-num=\"21\">function <span class=\"hljs-built_in\">handleGet</span>() {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"22\">  <span class=\"hljs-built_in\">getData</span>(\'/api/data\', function(response) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"23\">    <span class=\"hljs-built_in\">processData</span>(response);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"24\">  }, <span class=\"hljs-built_in\">function</span>(error) {</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"25\">    console<span class=\"hljs-selector-class\">.error</span>(\'获取数据失败：\', error);</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"26\">  });</span>\n<span class=\"code-block-extension-codeLine\" data-line-num=\"27\">}</span>\n</code></pre>\n<p>在上面的示例中，<code>getData</code>&nbsp;函数接受三个参数：一个 URL，一个成功回调函数&nbsp;<code>onSuccess</code>&nbsp;和一个失败回调函数&nbsp;<code>onError</code>。它会使用 XMLHttpRequest 对象来获取数据，并在数据加载完成后调用适当的回调函数。</p>\n<p><code>handleGet</code>&nbsp;函数是一个事件处理程序，它会调用&nbsp;<code>getData</code>&nbsp;函数并提供两个回调函数。由于异步编程的特性，<code>getData</code>&nbsp;函数会立即返回，而不会等待数据加载完成。因此，我们需要使用闭包来保留对回调函数的引用，并在数据加载完成后调用它们。这样，我们就可以在代码中使用普通的函数调用，而不必担心回调函数的嵌套。</p>\n<p>闭包可以将回调函数与其相关的数据进行捆绑，并在适当的时候调用回调函数。这使得异步编程变得更加直观和易于管理，从而使我们的代码更加清晰和可读。</p>\n<p><strong>三、闭包的运用方式</strong></p>\n<p>闭包可以使用以下方式来运用：</p>\n<ol>\n<li>将内部函数作为返回值：将内部函数作为返回值，即可创建闭包。</li>\n<li>将内部函数作为参数传递给其他函数：将内部函数作为参数传递给其他函数，即可在其他函数中创建闭包。</li>\n<li>使用 IIFE（立即执行函数表达式）：使用 IIFE 可以立即执行函数，并且将内部函数作为返回值，从而创建闭包。</li>\n</ol>\n<p><strong>四、闭包的注意事项</strong></p>\n<p>闭包虽然有很多优点，但是也需要注意以下几点：</p>\n<ol>\n<li>内存泄漏：闭包会一直持有外部作用域中的变量和参数，如果不及时释放，就会导致内存泄漏。</li>\n<li>性能问题：由于闭包会持有外部作用域中的变量和参数，因此会占用更多的内存和 CPU 资源。</li>\n<li>作用域链问题：由于闭包可以访问外部作用域中的变量和参数，因此会导致作用域链的变长，从而影响代码的执行效率。</li>\n</ol>\n</div>\n</div>', 0, 0, 'http://www.baidu.com', '2023-08-06 10:30:15', '2023-08-06 10:30:15');
INSERT INTO `article` VALUES (8, 4, NULL, '小跑青年', '', '', '3', '', '', '', '', '', '', '/public/template/default/img/15.jpg', '<p><img src=\"public/template/default/img/15.jpg\" alt=\"\" width=\"455\" height=\"290\"></p>', 0, 0, '', '2023-08-06 16:13:41', '2023-08-06 16:13:41');
INSERT INTO `article` VALUES (9, 4, NULL, '最美的秋', '', '', '', '', '', '', '', '', '', '/public/cover/03.jpg', '<p><img src=\"public/cover/03.jpg\" alt=\"\" width=\"240\" height=\"180\"></p>', 0, 0, '', '2023-08-06 18:18:58', '2023-08-06 18:18:58');

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
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '文章-标签表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of article_map_tag
-- ----------------------------
INSERT INTO `article_map_tag` VALUES (14, 1, 0);
INSERT INTO `article_map_tag` VALUES (15, 3, 0);
INSERT INTO `article_map_tag` VALUES (16, 4, 0);
INSERT INTO `article_map_tag` VALUES (20, 7, 0);
INSERT INTO `article_map_tag` VALUES (21, 5, 0);
INSERT INTO `article_map_tag` VALUES (22, 6, 2);
INSERT INTO `article_map_tag` VALUES (23, 6, 1);
INSERT INTO `article_map_tag` VALUES (24, 8, 0);
INSERT INTO `article_map_tag` VALUES (25, 9, 0);
INSERT INTO `article_map_tag` VALUES (26, 2, 0);

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
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目名称',
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
INSERT INTO `category` VALUES (5, 0, '', '', '', 'chanyue', 'chanyue', '/chanyue', '', '1', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (6, 2, '', '', '', 'express', 'express', '/nodejs/express', '', '0', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (7, 2, '', '', '', '服务运维', 'fuwuyunwei', '/nodejs/fuwuyunwei', '', '0', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (8, 0, '', '', '', '关于', 'guanyu', '/guanyu', '', '1', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (9, 1, '', '', '', 'JavaScript', 'JavaScript', '/qianduankaifa/JavaScript', '', '0', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (10, 1, '', '', '', 'vue', 'vue', '/qianduankaifa/vue', '', '0', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (11, 2, '', '', '', 'mysql', 'mysql', '/nodekaifa/mysql', '', '0', '', 0, '0', '0', '0');
INSERT INTO `category` VALUES (12, 3, '', '', '', '测试', 'ceshi', '/qianduanku/ceshi', '', '0', '', 0, '0', '0', '0');

-- ----------------------------
-- Table structure for down
-- ----------------------------
DROP TABLE IF EXISTS `down`;
CREATE TABLE `down`  (
  `aid` int(11) NOT NULL,
  `downName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `downLink` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT ''
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '碎片' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of frag
-- ----------------------------
INSERT INTO `frag` VALUES (1, '广告', 'ad', '禅悦', '2023-07-14 20:48:50');
INSERT INTO `frag` VALUES (2, '版权', 'copyright', '<p class=\"f-13 text-c c-bfbfbf\">自豪的采用 chanyue-cms</p>', '2023-08-05 17:34:49');
INSERT INTO `frag` VALUES (3, 'chanyue-cms介绍', 'chanyue-introduce', '<p class=\"mt-10 f-14 lh-24\">禅悦内容管理系统，基于`nodejs` `express` `mysql` `knex` `jwt` `vue3` 进行开发的一套实用轻量cms系统，且提供丰富的api数据接口。常用企业网站，微信小程序官网，图片网站，新闻资讯，软件下载网站，博客，文章等诸多文章类型网站开发，也适用于前端二次开发。<a title=\"\" href=\"http://localhost:81/\">[详情]</a></p>', '2023-08-05 17:36:09');

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
  `createdAt` datetime NULL DEFAULT NULL,
  `updatedAt` datetime NULL DEFAULT NULL,
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
  `createdAt` datetime NULL DEFAULT NULL,
  `updatedAt` datetime NULL DEFAULT NULL,
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
  `createdAt` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '网站信息' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of site
-- ----------------------------
INSERT INTO `site` VALUES (1, '前端小栈', 'www.chanyue.top', '867528315@qq.com', NULL, NULL, '', '{\"siteSubtitle\":\"• 禅悦\"}', 'chanyue-cms禅悦内容管理系统', 'cms,chanyue-cms,chanyue,内容管理系统,nodejs,express,mysql,knex,jwt,vue3', '禅悦内容管理系统，基于nodejs express mysql knex jwt vue3 进行开发的一套实用轻量cms系统，且提供丰富的api数据接口。常用企业网站，微信小程序官网，图片网站，新闻资讯，软件下载网站，博客，文章等诸多文章类型网站开发，也适用于前端二次开发。', NULL, NULL);

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
  `createAt` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updateAt` datetime NULL DEFAULT NULL COMMENT '更新时间',
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
  `createAt` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updateAt` datetime NULL DEFAULT NULL COMMENT '更新时间',
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
  `createAt` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updateAt` datetime NULL DEFAULT NULL COMMENT '更新时间',
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
  `createAt` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updateAt` datetime NULL DEFAULT NULL COMMENT '更新时间',
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
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '标签' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES (1, 'cms', 'cms');
INSERT INTO `tag` VALUES (2, 'js库', 'jslib');
INSERT INTO `tag` VALUES (3, '开发工具', 'devtool');

SET FOREIGN_KEY_CHECKS = 1;
