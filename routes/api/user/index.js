/*
 * @Author: yuanchengyong 
 * @Date: 2020-02-03 17:22:09 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-04 13:21:30
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
    /**
     * 登录
     */
    router.get('/user/login', async function (ctx, next) {
        ctx.session.user = {
            username: 'z137168075', //用户账号 
            userpwd: 'abcd', //密码
            nickName: 'Teacher Yuan', //年龄 
            logindate: new Date()
        }
        ctx.body = {
            resultCode: '0000',
            resultMessage: 'success'
        }
    })
    /**
     * 退出
     */
    router.get('/user/logout', async function (ctx, next) {
        ctx.session.user = null;
        ctx.body = {
            resultCode: '0000',
            resultMessage: 'success'
        }
    })
    router.get('/user/info', async function (ctx, next) {
        const user = ctx.session.user;
        if (!user) {
            ctx.body = {
                resultCode: '0003',
                resultMessage: 'please login!',
            }
            return false;
        }
        try {
            const userInfo = await findOne({
                'username': user.username
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