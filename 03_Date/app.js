const express = require("express");
const app = express();

app.use(express.json());

console.log(Date.now()); //Unix Epoch time Seconds since Jan, 1st 1970;
console.log(new Date()); //UTC 

//variabler der ikke ændrer sig skal tages ud for endpoint, så fx array ikke skal laves hver gang
const monthNames = ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];

//se endvidere 
app.get("/months",(req,res) => {

    const requiredMonth = monthNames[new Date().getMonth()];

    res.send({data: requiredMonth});
    
});

app.get("/day", (req,res) => {

    const requiredDay = new Date().toLocaleDateString("en-UK", {weekday: "long"})

    res.send({data: requiredDay})
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log("server is running on port:", PORT);
});

