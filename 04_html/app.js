import express from "express"
const app = express()

import path from "path";  //fordi vi nu arbejder i Modules ES og ikke commonJS

app.use(express.static("public"));  //gør public til en statisk mappe som må bruges
//pages

//const candyCommon = require("./public/candy/util/candyCommon.js");

import candyESModule from "./public/candy/util/candyESModule.js"
console.log(candyESModule);

console.log(path.resolve("public/candy/candy.html"));


app.get("/", (req,res) => {
    res.sendFile(path.resolve("public/frontend/index.html"));
})

app.get("/redirection", (req,res) => {
    res.sendFile(path.resolve("public/redirection/redirection.html"));
})
app.get("/candy", (req,res) => {
    res.sendFile(path.resolve("public/candy/candy.html"));
})


//api
let visitorsCount = 0;

app.get("/visitorscount", (req, res) => {
  res.send({data: ++visitorsCount})
});

//
app.get("/visitorsdoorway", (req,res) => {
    res.redirect("/visitorscount"); //redirect i backend
})




const PORT = 8080;
app.listen(PORT, () => {
    console.log("server is running on port:", PORT)
})