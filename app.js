import Koa from "koa";
import axios from "axios";
import querystring from 'querystring';
import cors from 'koa2-cors';
import router from './routers/index';
import dbInit from './db/init';

const app = new Koa();
dbInit('');

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

app.listen(9002, () => console.log(9002));

