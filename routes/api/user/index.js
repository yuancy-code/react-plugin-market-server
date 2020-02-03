/*
 * @Author: yuanchengyong 
 * @Date: 2020-02-03 17:22:09 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-03 18:01:48
 * @Des: 
 */
module.exports = (router) => {
    router.get('/user/info', function (ctx, next) {
        ctx.body = {
            resultCode: '0000',
            resultMessage: 'success',
            data: {
                userName:"Teacher Yuan"
            }
        };
    })
}