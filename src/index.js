import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from "koa-bodyparser";
import { timingLogger, exceptionHandler } from './utils';
import { router as noteRouter } from './note';

const app = new Koa();

app.use(exceptionHandler);
app.use(timingLogger);
app.use(bodyParser());

const prefix = '/api';

const apiRouter = new Router({ prefix });
apiRouter
  .use('/note', noteRouter.routes());
app
  .use(apiRouter.routes())
  .use(apiRouter.allowedMethods());

if (!module.parent) {
  app.listen(3000);
  console.log('started on port 3000');
}
