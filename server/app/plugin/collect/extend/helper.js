const cheerio = require('cheerio');
exports.cleanHTML = (html) => {
    const $ = cheerio.load(html);

    // 清除 <script> 标签
    $('script').remove();
    // 清除 <style> 标签
    $('style').remove();
    // 清除 <iframe> 标签
    $('iframe').remove();
    // 清除 <audio> 标签
    $('audio').remove();
    // 清除 <video> 标签
    $('video').remove();
  

    // 清除所有以 "data-" 开头的属性
    $('[data-]').removeAttr('data-');
    // 清除上面的 <p> 元素中的属性
    $('p').removeAttr('class').removeAttr('style');
    // 清除上面的 <div> 元素中的属性
    $('div').removeAttr('class').removeAttr('style');
    // 清除上面的 <span> 元素中的属性
    $('span').removeAttr('class').removeAttr('style');
    // 清除空白 <p> 标签
    $('p:empty').remove();

    // 返回清理后的 HTML 内容（去除 <html>, <head>, <body> 标签）
    return $.html()
    .replace(/<\/?(html|head|body)>/gi, '');

    // .replace(/<a\b[^>]*>(.*?)<\/a>/gi, '$1')
    // .replace(/<p(.*?)>/gi, '<p>')
    // .replace(/<\/?(span|b|u|i|div)[^>]*>/gi, '');

}
