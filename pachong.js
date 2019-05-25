import fs from "fs";
import path from "path";
import axios from 'axios';
import querystring from 'querystring';

export default async function fetchMusics() {
  let musicArray = [];
  for (let i = 1; i <= 10; i++) {
    await axios({
      url: "http://www.zhmdy.top/music/",
      method: "post",
      data: querystring.stringify({
        input: "周杰伦",
        filter: "name",
        type: "qq",
        page: i
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        Host: "www.zhmdy.top",
        Connection: "keep - alive",
        "Content-Length": "60",
        Pragma: "no - cache",
        "Cache-Control": "no - cache",
        Accept: "application/json, text/javascript, */*; q=0.01",
        Origin: "http: //www.zhmdy.top",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36",
        "Accept-Encoding": "gzip"
      }
    }).then(res => {
      if (res.data.error === "") {
        console.log(`稍等，已为您加载${i}页歌曲`);
        musicArray = musicArray.concat(res.data.data);
      }
      if (i === 10 && musicArray.length === 100) {
        fs.writeFile(
          path.join(__dirname, "./db/musics.json"),
          JSON.stringify(musicArray),
          () => Promise.resolve(1)
        );
      }
    });
  }
}
