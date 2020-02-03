/*
 * @Author: yuanchengyong 
 * @Date: 2020-02-03 14:23:37 
 * @Last Modified by: yuanchengyong
 * @Last Modified time: 2020-02-03 15:55:43
 * @Des: 列表测试代码
 */
const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        number: `DC-1030-${i}`,
        name: `地产-03-${i}`,
        compName: `A市${i}股份有限公司`,
        compName2: `B市${i}股份有限公司`,
        range: `全额担保`,
        type: `一般担保`,
        time: `2019-01-01~2020-01-01`,
        amount: `${i * 100000}`,
        performance: "履约中",
        status: "审核中",
    });
}
module.exports = (router) => {
    router.get('/list', function (ctx, next) {
        ctx.body = {
            resultCode:'0000',
            resultMessage:'success',
            data
        };
    })
}