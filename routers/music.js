import KoaRouter from 'koa-router';
import { fetchList } from '../controller/music';
const music = new KoaRouter();

music.get('/query', fetchList);

module.exports = music;