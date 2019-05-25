import Koa from "koa";
import axios from "axios";
import querystring from 'querystring';
import dbInit from './db/init';

const app = new Koa();
dbInit('replace');

app.use(async ctx => {
  try {
    ctx.body = 1;
  } catch (err) {
    console.error(err);
  }
});

app.listen(3000, () => console.log(3000));

