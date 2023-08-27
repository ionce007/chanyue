# 禅悦cms架构

```
 |- app
    |- config
    |- extend
    |- middleware 
    |- modules
        |-api  
          |-- controller
          |-- service
          |-- router.js
        |-common
          |-- controller
          |-- service
        |-web 
          |-- controller
          |-- service
          |-- view
          |-- router.js
    |- plugin
       |- open
          |-- controller
          |-- service
          |-- view
          |-- router.js
    |- public
    |- utils
    |- router.js
  app.js
 ```

# 参数校验 request-validate

上传放到common里面，如果七牛云要走的话，通过config来解决
plugin
  配置文件 config
router里面要插件

## 解决通用组件里面，引入插件合并 upload

1.common里面要把插件所有的里面的controller都要引入
router.use("/plugin", QiniuyunController);
2.根据配置文件 选择用哪个controller方法 这个配置文件

let uploadConfig = {
    'default':{
        type:upload.any(),
        method:ArticleController.upload,
    },
    'qiniuyun':{
        type:uploads.single("file"),
        method:QiniuController.upload,
    },
}[config.upload];
//返回响应
3.router.post('/common/upload', auth(),uploadConfig.type, uploadConfig.method);

## 单独的引入插件

1.通过配置文件，获取所有的路由路径，动态路由？
aliyun/router.js

这个必须要在plugin.config里面配置

直接在plugin里面添加路由，在最外层路由加前缀

router.use('/plugin/aliyun/email')
router.use('/plugin/open/xxx')
