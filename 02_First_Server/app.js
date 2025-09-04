
//instantiere, definere og lytte

//dette kommer til at være vores server opsætning og konvention at det altid kaldes app.js
const express = require("express"); //importering

const app = express(); //instantieringen
//const app = require("express")();   kan også gøres på denne måde, men 

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
    //console.log(req.params);
    //const likingScore = req.params()

    res.send({result: `You like waterfalls this much: ${req.params.likingScore}`
    });
});



app.listen(8080); //hvorfor 8080 - er http developer port som standard