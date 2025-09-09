//starter med at opsætte server, instantiere, definere og hvilken port

const express = require("express");
const app = express();
app.listen(8080); //8080 er http developer port som standard

//initial config array with greek gods/goddess
const greekGods = [
  { id: 1, name: "Zues", domain: "Sky" },
  { id: 2, name: "Athena", domain: "Wisdom" },
  { id: 3, name: "Poseidon", domain: "Sea" },
  { id: 4, name: "Apollo", domain: "Sun" },
];

//API to get all greek gods
app.get("/gods", (req, res) => {
  /* res.send({
    result: greekGods
  }); */
  res.json(greekGods);
});

//API to get an specific greek god
app.get("/gods/:id", (req, res) => {
  const id = Number(req.params.id); //req.params vil alene altid returnere en String, derfor ændres..
  const god = greekGods.find((g) => g.id === id);
  res.send({ result: `With id ${id} you find ${god.name} who is god for the ${god.domain}`});
  //res.json(god);
});
