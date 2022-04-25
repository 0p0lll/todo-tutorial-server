// 엔트리파일
// console.log("hello world");
// var a =3;

var express = require("express") // node_modules > express의 모듈을 가져옴
var app = express() // app은 객체

// 사용자가 localhost 5000 hello URL 주소로 접속했을 때 
app.get("/hello", (req, res) => {
    res.send("hello world!!") // 응답을 브라우저로 보내줌
})

// 맨 밑에 놓기
app.listen(5000, () => {
    console.log("sever is running on port 5000!")
}) 