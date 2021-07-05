import { Application, send } from 'https://deno.land/x/oak@v7.7.0/mod.ts'
import loggerMiddleware from 'https://deno.land/x/oak_logger@1.0.0/mod.ts'

const app = new Application()

app
  .use(loggerMiddleware.responseTime)
  .use(loggerMiddleware.logger)
  .use(async c => {
    await send(c, c.request.url.pathname, {
      root: '.',
      index: 'index.html'
    })
  })
  .addEventListener('listen', ({ port }) => {
    console.log(`Listening http://localhost:${port}`)
  })

app.listen({ port: 10000 })