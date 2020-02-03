const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.session.a = 111;
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  console.log(ctx.session.a, 3333)
  ctx.body = {
    title: 'koa2 json',
    session: ctx.session.a
  }
})

module.exports = router