// const http = require("http");
// const os = require("os");
// const url = require("url"); // URL을 파싱하고 다루는 기능을 제공
// const util = require("util"); //유틸모듈
// const parsedString = url.parse("https://zdnet.co.kr");
// const fs = require("fs");

// http //HTTP 서버를 생성
//   .createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/html" }); // 응답 헤더를 설정
//     response.end("<h1>im running node!</h1>"); //응답 내용을 전달하고 응답을 종료
//   })

//   .listen(52273, function () {
//     //서버를 지정한 포트 번호(52273)로 바인딩하고 해당 포트에서 들어오는 연결을 수신 대기
//     console.log("Server running at http:127.0.0.1:52273/");
//     console.log("JSON:%j", { name: "node tutorial" }); //객체출력
//     console.log("- process.env:", process.env); //전역객체.프로세스객체
//     console.log("- process.version:", process.version); //전역객체.프로세스객체
//     console.log("- process.versions:", process.versions); //전역객체.프로세스객체
//     console.log("- process.uptime:", process.uptime()); //전역객체.프로세스객체
//     console.log(os.hostname()); //운영체제와 관련된 정보에 접근하고 다루는 기능
//     console.log(os.type()); //os 모듈
//     console.log("url", parsedString);

//     fs.readFile("textFile.txt", "utf8", function (error, data) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(data);
//       }
//     });
//   });

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
