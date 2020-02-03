/*
 * @Author: yuanchengyong 
 * @Date: 2020-02-03 19:32:17 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-03 19:51:11
 * @Des: mongoose主连接
 */
const {dbUrl} = require('../config')
const mongoose = require('mongoose')

mongoose.connect(dbUrl);
/** * 连接成功 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + dbUrl);
});
/** * 连接异常 */
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
/** * 连接断开 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;