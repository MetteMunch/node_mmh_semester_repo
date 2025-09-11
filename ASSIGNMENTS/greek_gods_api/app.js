//starter med at opsætte server, instantiere, definere og hvilken port

const express = require("express");
const app = express();


//initial config array with greek gods/goddess
const greekGods = [
  { id: 1, name: "Zeus", domain: "Sky" },
  { id: 2, name: "Athena", domain: "Wisdom" },
  { id: 3, name: "Poseidon", domain: "Sea" },
  { id: 4, name: "Apollo", domain: "Sun" },
];

//API to get all greek gods
app.get("/gods", (req, res) => {
  res.send({
    data: greekGods
  }); 
  //res.json(greekGods);  //brug ikke .json legacy
});

//API to get an specific greek god
app.get("/gods/:id", (req, res) => {
  const id = Number(req.params.id); //req.params vil alene altid returnere en String, derfor ændres..
  const god = greekGods.find((greekGod) => greekGod.id === id);
  
  //res.json(god);  //brug ikke .json

  if(!god) { //vi vil gerne håndtere fejlen først
    res.status(404).send({ errorMessage: `Greek god not found with id: ${id}`});

  } else {

    res.send({ data: `With id ${id} you find ${god.name} who is god for the ${god.domain}`});
  }
});



app.listen(8080); //8080 er http developer port som standard  denne skal være i bunden ellers kan der opstå nogle bugs