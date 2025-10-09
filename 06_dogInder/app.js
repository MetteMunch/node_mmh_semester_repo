import express from 'express';
import path from 'path';

console.log ("her indlæses app.js");

const app = express();

app.use(express.static("public"));


// ========================= PAGES =====================================

import { frontpagePage, matchesPage } from './util/pagesUtil.js';

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/matches", (req, res) => {
    res.send(matchesPage);
});

//fordel ved serverside rendering (ligesom Thymeleaf), mindre load time, noget med seo. Ressourcer bliver brugt ved opstart.
//client side bliver ressourcer brugt af alle klienter



// ========================= API =======================================

import { getMatches } from './util/matchesUtil.js';

app.get("/api/matches", async (req, res) =>  {
    const matches = await getMatches();
    res.send({ data: matches });
});


// falsy values
// false, null, undefined, NaN, 0, ""

// short-circuit syntax

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});