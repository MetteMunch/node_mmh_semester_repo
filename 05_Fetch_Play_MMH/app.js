const express = require("express");
const app = express();
const fetch = require("node-fetch"); // Vi skal bruge node-fetch til at hente data fra serveren
require("dotenv").config(); // Indlæser .env-filen

// Nu kan du hente din API-nøgle fra process.env
const API_KEY = process.env.API_KEY;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/exercises", async (req, res) => {
  const api_url = "https://api.api-ninjas.com/v1/exercises";

  try {
    const response = await fetch(api_url, {
      headers: {
        "X-Api-Key": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const data = await response.json();
    res.send(data); // Videresend dataen fra API'en til klienten
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send({ message: "Failed to fetch exercises" });
  }
});

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting the server", error);
    return;
  }
  console.log("Server is running on port", PORT);
});
