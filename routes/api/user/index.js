/*
 * @Author: yuanchengyong 
 * @Date: 2020-02-03 17:22:09 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-03 20:21:58
 * @Des: 
 */
const User = require("../../../model/user");
/**
 * 查找一个用户
 * @param {Object} query 查询条件 
 */
const findOne = (query) => {
    return User.findOne(query)
}

module.exports = (router) => {
    router.get('/user/info', async function (ctx, next) {
        try {
            const userInfo = await findOne({
                'username': 'z137168075'
            });
            if (!userInfo) {
                ctx.body = {
                    resultCode: '0001',
                    resultMessage: 'user does not exist!',
                }
            } else {
                const {
                    username,
                    nickName,
                    logindate
                } = userInfo;
                ctx.body = {
                    resultCode: '0000',
                    resultMessage: 'success',
                    data: {
                        username,
                        nickName,
                        logindate
                    }
                };
            }
        } catch (e) {
            ctx.body = {
                resultCode: '0002',
                resultMessage: 'error',
                data: e.message
            };
        }
    })
    router.get('/user/add', async function (ctx, next) {
        const user = new User({
            username: 'z137168075', //用户账号 
            userpwd: 'abcd', //密码
            nickName: 'Teacher Yuan', //年龄 
            logindate: new Date()
        });
        try {
            const one = await findOne({
                'username': 'z137168075'
            })
            if (one) {
                ctx.body = {
                    resultCode: '0001',
                    resultMessage: 'user already exists!',
                };
                return false;
            }
            let res;
            try {
                res = await user.save();
                ctx.body = {
                    resultCode: '0000',
                    resultMessage: 'success',
                    data: res
                };
            } catch (e) {
                ctx.body = {
                    resultCode: '0002',
                    resultMessage: 'error',
                    data: e.message
                };
            }
        } catch (e) {
            ctx.body = {
                resultCode: '0002',
                resultMessage: 'error',
                data: e.message
            };
        }


    })
}