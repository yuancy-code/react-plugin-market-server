/*
 * @Author: yuanchengyong 
 * @Date: 2020-02-03 19:35:36 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-03 19:40:49
 * @Des: User Schema
 */
const mongoose = require('./mongoose.js');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    // 用户账号 
    username: {
        type: String
    },
    // 密码
    userpwd: {
        type: String
    },
    // 昵称
    nickName: {
        type: String
    },
    // 最近登录时间
    logindate: {
        type: Date
    }
});
module.exports = mongoose.model('User', UserSchema);