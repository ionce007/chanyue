
const AdminController = require('./AdminController.js');
function adminRouter(router,auth){
    // 验证码
    router.get('/captcha', AdminController.captcha); // 验证码// 登录
    router.post('/admin/login', AdminController.login);
    router.post('/admin/create', AdminController.create);
    router.get('/admin/list', AdminController.list);
    router.get('/admin/search', AdminController.search);
    router.get('/admin/detail', AdminController.detail);
    router.post('/admin/create', auth(), AdminController.create);
    router.get('/admin/delete', auth(), AdminController.delete);
    router.post('/admin/update', auth(), AdminController.update);
}

module.exports = adminRouter;


