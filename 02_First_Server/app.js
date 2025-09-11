
//instantiere, definere og lytte

//dette kommer til at være vores server opsætning og konvention at det altid kaldes app.js
const express = require("express"); //importering

const app = express(); //instantieringen
//const app = require("express")();   kan også gøres på denne måde, men 

app.use(express.json()); //sets up body parsing

//console.log(express); //viser alle biblioteks funktioner
//console.log(app);

//vi er igang med at sætte en server op
//vi skal have den til at lytte på en port

//client - server modellen client sender request tilbage req = request og res = response
//get funktionen har to argumenter "/" og callback funktionen
//app.get = route (routehandler)
app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/planets", (req, res) => {
    res.send({name: "jupiter"});
});

app.get("/planets/favoritePlanet", (req, res) => {
res.send({name: "venus"});
});

//der er to måneder at sende data i get request via path variabel : og med en query string ?

//pathvariabel er et string for det er url

app.get("/waterfalls/:likingScore", (req,res) => {
    console.log(req.params);
    res.send({result: `You like waterfalls this much: ${req.params.likingScore}`
    });
});

/* task create a /bag route that can take two path variables 
where the client can define what should go in it
then respond with what the bag contains
 */
app.get("/bag/:item1/:item2", (req,res) => {
    const { item1, item2} = req.params;
    console.log(req.params);
    res.send({result: `Your bag contains: ${item1} and ${item2}`}); //returnerer et JSON objekt
});


// assignment create a GET /urls route, create a query string with the length of "medium" and spiciness level of 6
// /urls?length=medium&spiciness=6

app.get("/urls", (req, res) => {
    console.log(req.query)
    res.send({data: req.query})
});

//man kan sende data på 3 måder
 
app.post("/subjects", (req, res) => {
    console.log(req.body);
    res.send({data: req.body});  //selvom body allerede er json så god ide altid at sende som json med data
});

console.log(__dirname); //dirname er lig med pwd og kan give absolute path uden at det kun kan bruges lokalt
app.get("/fashionbrands", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080); //hvorfor 8080 - er http developer port som standard