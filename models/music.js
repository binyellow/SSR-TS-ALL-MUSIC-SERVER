import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Music = Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  pic: { type: String, required: true },
  link: { type: String },
  songid: { type: String },
  type: { type: String },
  lrc: { type: String },
  registerTime: { type: Number, default: Date.now }
})

export default mongoose.model('Music', Music);