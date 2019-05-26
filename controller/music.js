import music from '../models/music';
// import { successResponse } from '../utils/response';
// import { toSafeNumber } from '../utils/utils';

async function fetchList(ctx, next) {
  // const { userId, current = 0, pageSize = 10 } = toSafeNumber(ctx.query, ['current', 'pageSize']);
  const result = await music.find();
  ctx.body = result;
  // let res = await todo.find({ userId }).sort({time: -1}).skip((current)*pageSize).limit(pageSize);
  // if(res instanceof Array && res.length>=0) {
  //   ctx.body = successResponse({
  //     current,
  //     pageSize,
  //     total: total.length,
  //     message: "查询成功",
  //     content: res,
  //   });
  // } else {
  //   ctx.body = {
  //     failed: false,
  //     message: '无list',
  //     content: []
  //   }
  // }
}

module.exports = { fetchList }