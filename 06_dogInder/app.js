import express from "express";
import path from "path";
const app = express();

app.use(express.static("public"));

//console.log(process.env) //miljøvariabler kan også sættes tjek dette ud cross env

//PAGES-------------

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/pages/frontend/index.html"));
});

app.get("/matches", (req, res) => {
  res.sendFile(path.resolve("public/pages/matches/matches.html"));
});

//API-----------------

app.get("/api/matches", (req, res) => {
  
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((result) => {
    console.log(result.message)
    const dog = {
        imageURL: result.message
    }
    createMatchesProfile(dog);
  });

})

const PORT = Number(process.env.PORT) || 8080; //tag port fra miljø som de selv kan bestemm var eller port 8080
app.listen(PORT, () => {
  console.log("Server is running on: ", PORT);
});

//falsy værdier: false, null, undefined, NaN, 0, ""


