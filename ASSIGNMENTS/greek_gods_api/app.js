//starter med at opsætte server, instantiere, definere og hvilken port

const express = require("express");
const app = express();
app.use(express.json());

//initial config array with greek gods/goddess
const greekGods = [
  { id: 1, name: "Zeus", domain: "Sky" },
  { id: 2, name: "Athena", domain: "Wisdom" },
  { id: 3, name: "Poseidon", domain: "Sea" },
  { id: 4, name: "Apollo", domain: "Star" },
];

//------------  Routes ----------------------

//API to get all greek gods
app.get("/greekgods", (req, res) => {
  res.send({
    data: greekGods,
  });
  //res.json(greekGods);  //brug ikke det er .json legacy
});

//API to get an specific greek god
app.get("/greekgods/:id", (req, res) => {
  const id = Number(req.params.id); //req.params vil alene altid returnere en String, derfor ændres..
  const god = greekGods.find((greekGod) => greekGod.id === id);

  if (!god) {
    //vi vil gerne håndtere fejlen først
    res
      .status(404)
      .send({ errorMessage: `Greek god not found with id: ${id}` });
  } else {
    res.send({
      data: `With id ${id} you find ${god.name} who is god for the ${god.domain}`,
    });
  }
});

let nextId = 5; 

//API to create a new greek god
app.post("/greekgods", (req, res) => {
  if (!req.body) {

    return res.status(400).send({                     //skal være med return ellers fejl cannot set headers...vil prøve at køre videre
      errorMessage: "Request body can not be empty",
    });
  }
    const newGreekGod = req.body;
    newGreekGod.id = nextId++;
    greekGods.push(newGreekGod);
  res.status(201).send({ data: newGreekGod });
});


  

    // const newGreekGod = {
  //   id: greekGods.length > 0 ? greekGods[greekGods.length - 1].id + 1 : 1,
  //   name: req.body.name,
  //   domain: req.body.domain,
  // };
//   greekGods.push(newGreekGod);
//   res.status(201).send({ data: newGreekGod });
// });

//API to update a greek god
app.put("/greekgods/:id", (req, res) => {
  const id = Number(req.params.id); //req.params vil alene altid returnere en String, derfor ændres..
  const index = greekGods.findIndex((god) => god.id === id);

  if (index === -1) {
    //vi vil gerne håndtere fejlen først
    res
      .status(404)
      .send({ errorMessage: `Greek god not found with id: ${id}` });
  }

  greekGods[index] = { id, ...req.body };
  res.status(200).send({ data: greekGods[index] });
});

// spread operator ... (sammensætter to objekter og hvis der er sammenfald i key value pair, så er det sidste værdi)

//API to update a greek god
app.patch("/greekgods/:id", (req, res) => {
  const id = Number(req.params.id); //req.params vil alene altid returnere en String, derfor ændres..
  const foundGreekGodIndex = greekGods.findIndex((god) => god.id === id);

  if (index === -1) {
    //vi vil gerne håndtere fejlen først
    res
      .status(404)
      .send({ errorMessage: `Greek god not found with id: ${id}` });
  }

  const foundGreekGod = greekGods[foundGreekGodIndex];
  const newGreekGod = {...foundGreekGod, ...req.body, id: foundGreekGod.id};
  //tilsidst sættes id igen, så selvom der er nogen som har prøvet at ændre, så kommer korrekt id på

  greekGods[foundGreekGodIndex] = newGreekGod;
  res.send({data: newGreekGod});
}


//API to delete a greek god
app.delete("/greekgods/:id", (req, res) => {
  const id = Number(req.params.id); //req.params vil alene altid returnere en String, derfor ændres..
  const index = greekGods.findIndex((god) => god.id === id);

  if (index === -1) {
    //vi vil gerne håndtere fejlen først
    res
      .status(404)
      .send({ errorMessage: `Greek god not found with id: ${id}` });
  }

  const deletedGreekGod = greekGods.splice(index, 1);
  res.status(200).send({ data: deletedGreekGod[0] });
});


const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting server", error);
  }
  console.log("Server is running on port", PORT); //8080 er http developer port som standard  denne skal være i bunden ellers kan der opstå nogle bugs

} ); //callback funktion udskrives når server har opstartet porten