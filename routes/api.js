/*
 * @Author: yuanchengyong 
 * @Date: 2020-02-03 12:10:08 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-03 14:20:24
 * @Des: 
 */
const router = require('koa-router')();
const loadRoute = require('./load-route');

router.prefix('/api')

// 加载自动路由
loadRoute.init('./api', router);

module.exports = router