
const CollectService = require('../service/home');
const cheerio = require('cheerio');
const {cleanHTML}  = require('../extend/helper.js');

class CollectController {

  static listArr = []

  static async common(req, res, next) {
    try {

    
        const data = await CollectService.common()
         const $ = cheerio.load(data.toString(), { decodeEntities: false });
         $('.blist li a').each(function() {
          CollectController.listArr.push($(this).attr('href'))
        });
        res.send(listArr)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  //测试列表所有地址
  static async getArticle(req, res, next) {
    try {
      let url = 'http://www.zuowen.com/e/20190817/5d57705b729ff.shtml'
      const data = await CollectService.getArticle(url)
      const $ = cheerio.load(data.toString(), { decodeEntities: false });
      const title = $('.Post-Header h1').text();
      $('.con_content').find('*')
      .not('img')
      .remove('script')
      .remove('style')
      .remove('iframe')
      .remove('audio')
      .remove('video')
      .remove('noscript')
      .removeAttr('class')
      .removeAttr('id')
      .removeAttr('style')
      .each((index, element) => {
        const attributes = element.attributes;
        for (let i = attributes.length - 1; i >= 0; i--) {
          const attributeName = attributes[i].name;
          if (attributeName.startsWith('data-')) {
            $(element).removeAttr(attributeName);
          }
        }
      });

      // 获取清理后的文本内容
       const articleText = $('.con_content').html().trim()
       .replace(/\r|\n/g,"").replace(/\"/g,"")
       .replace(/<span\b[^>]*>(.*?)<\/span>/gi, '$1')
       .replace(/<div\b[^>]*>(.*?)<\/div>/gi, '$1')
       .replace(/<a\b[^>]*>(.*?)<\/a>/gi, '$1')
       .replace(/<p>(\s*|<br\s*\/?>)<\/p>/g, '')
       .replace(/<p>尽在“作文网”微信公众号<\/p><p><img src=http:\/\/cms\.zuowen\.com[^>]*>/, '');

      res.send({title:title,article:articleText})
    } catch (error) {
      console.log(error)
      next(error)
    }
  }


  static async listPage(req, res, next) {
    try {
      const data = await CollectService.common()
      const $ = cheerio.load(data.toString(), { decodeEntities: false });
      $('.blist li a').each(function() {
       CollectController.listArr.push($(this).attr('href'))
      });
      res.send(listArr)
    } catch (error) {
      console.log(error)
    }
  }






  // 新闻列表页
  async index(req, res, next) {
    // 获取数据显示到新闻页面


    const arr = [
      // 小学作文
      { url: 'https://www.zww123.com/xxzw/zuowen1/', cid: 4 },
      { url: 'https://www.zww123.com/xxzw/zuowen2/', cid: 5 },
      { url: 'https://www.zww123.com/xxzw/zuowen3/', cid: 6 },
      { url: 'https://www.zww123.com/xxzw/zuowen4/', cid: 7 },
      { url: 'https://www.zww123.com/xxzw/zuowen5/', cid: 8 },
      { url: 'https://www.zww123.com/xxzw/zuowen6/', cid: 9 },
      // 初中作文
      { url: 'https://www.zww123.com/czzw/zuowen1/', cid: 10 },
      { url: 'https://www.zww123.com/czzw/zuowen2/', cid: 11 },
      { url: 'https://www.zww123.com/czzw/zuowen3/', cid: 12 },
      // 高中作文
      { url: 'https://www.zww123.com/gzzw/zuowen1/', cid: 13 },
      { url: 'https://www.zww123.com/gzzw/zuowen2/', cid: 14 },
      { url: 'https://www.zww123.com/gzzw/zuowen3/', cid: 15 },
    ];
    await this.service.copy.home.getList(arr[11].url, arr[11].cid);
    // for (let i = 0; i < arr.length; i++) {
    //   await this.service.copy.home.getList(arr[i].url, arr[i].cid);
    // }
    res.json({
      msg: 'ok'
    });

  }

  // 瑞文网
  async ruiwen(req, res, next) {

    const arr = [
      // 小学作文
      { url: 'https://www.ruiwen.com/zuowen/yinianjizuowen/', cid: 4 },
      { url: 'https://www.ruiwen.com/zuowen/ernianjizuowen/', cid: 5 },
      { url: 'https://www.ruiwen.com/zuowen/sannianjizuowen/', cid: 6 },
      { url: 'https://www.ruiwen.com/zuowen/sinianjizuowen/', cid: 7 },
      { url: 'https://www.ruiwen.com/zuowen/wunianjizuowen/', cid: 8 },
      { url: 'https://www.ruiwen.com/zuowen/liunianjizuowen/', cid: 9 },
      { url: 'http://www.ruiwen.com/zuowen/chuyi/', cid: 10 },
      { url: 'https://www.ruiwen.com/zuowen/chuer/', cid: 11 },
      { url: 'https://www.ruiwen.com/zuowen/chusan/', cid: 12 },
      { url: 'https://www.ruiwen.com/zuowen/gaoyizuowen/', cid: 13 },
      { url: 'https://www.ruiwen.com/zuowen/gaoerzuowen/', cid: 14 },
      { url: 'https://www.ruiwen.com/zuowen/gaosanzuowen/', cid: 15 },
    ];
    await this.service.copy.home.ruiwen(arr[11].url, arr[11].cid);
    res.json({
      msg: 'ok'
    });
  }

}

module.exports = CollectController;

