import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from "koa-bodyparser";
import { timingLogger, exceptionHandler, jwtConfig } from './utils';
import { router as noteRouter } from './note';
import { router as authRouter } from './auth';
import jwt from 'koa-jwt';

const app = new Koa();

app.use(exceptionHandler);
app.use(timingLogger);
app.use(bodyParser());

const prefix = '/api';

// public
const publicApiRouter = new Router({ prefix });
publicApiRouter
  .use('/auth', authRouter.routes());
app
  .use(publicApiRouter.routes())
  .use(publicApiRouter.allowedMethods());

app.use(jwt(jwtConfig));

// protected
const protectedApiRouter = new Router({ prefix });
protectedApiRouter
  .use('/note', noteRouter.routes());
app
  .use(protectedApiRouter.routes())
  .use(protectedApiRouter.allowedMethods());

if (!module.parent) {
  app.listen(3000);
  console.log('started on port 3000');
}
