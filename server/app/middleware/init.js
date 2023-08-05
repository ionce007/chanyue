const { tree } = require('../extend/helper.js');
const {template} = require('../config/config.js');
const HomeService = require(`../service/web/${template}/home.js`);
const SiteService = require('../service/api/site.js');
const FragService = require('../service/api/frag.js');
const TagService = require('../service/api/tag.js');
const FriendlinkService = require('../service/api/friendlink');

module.exports = () => {
  return async (req, res, next) => {
    if ('site' in res.locals) {
      console.log('已存在缓存，不需要重新在取')
      await next();
      return;
    }
    // 站点
    const site = await SiteService.find();
    // 分类
    const category = await HomeService.category();
    //导航
    const nav = tree(category);
    // 友情链接
    const friendlink = await FriendlinkService.list();
    //样式路径
    const base_url = `/public/template/${template}`;
    //获取碎片 默认获取100条
    const frag =  await FragService.list();
    //获取tag标签 默认100条
    const tag =  await TagService.list();
   
    res.locals = { site, nav, category, friendlink, base_url,frag,tag };
    await next();
  }
}