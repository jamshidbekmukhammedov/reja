console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf-8", (err, data) => {
//     if(err) {
//         console.log("ERROR:", err);
//     } else {
//         user = JSON.parse(data);
//     }
// });


// MongoDB call
const db = require("./server").db();


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

app.get("/author", (req, res) => {
    res.render("author", {user: user});
})

app.get("/", function (req, res) {
    res.render("reja");
})

module.exports = app;