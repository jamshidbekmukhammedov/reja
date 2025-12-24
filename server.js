console.log("Web Serverni boshlash");
const express = require("express");
const { read } = require("fs");
const app = express();
const http = require("http");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());                // kirib kelayotgan json formatdagi data ni object holatiga o'girib beradi!
app.use(express.urlencoded({extended: true}));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code

// app.get("/hello", function(req, res) {
//     res.end(`<h1 style="background: red">HELLO WORLD by Marco</h1>`);
// });

// app.get("/gift", function(req, res) {
//     res.end(`<h1 style="background: red">Siz sovg'alar bo'limidasiz</h1>`);
// });

app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"});
})

app.get("/", function (req, res) {
    res.render("harid")
})

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running succsessfully on port: ${PORT}`);
});