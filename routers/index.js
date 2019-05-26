import KoaRouter from 'koa-router';
import music from './music';

const router = new KoaRouter();
router.use('/music', music.routes(), music.allowedMethods());

module.exports = router;
