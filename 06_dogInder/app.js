import express from 'express';
import path from 'path';

const app = express();

app.use(express.static("public"));
console.log ("her indlæses app.js");
app.use(express.urlencoded());


//de er eksporteret default og derfor kan jeg navngive dem her som jeg vil
import matchesRouter from './routers/matchesRouter.js';
console.log("matchesRouter:", matchesRouter);
app.use(matchesRouter);
import pagesRouter from './routers/pagesRouter.js';
console.log("pagesRouter:", pagesRouter);
app.use(pagesRouter);
import contactRouter from './routers/contactRouter.js';
console.log("contactRouter:", contactRouter);
app.use(contactRouter);



// falsy values
// false, null, undefined, NaN, 0, ""

// short-circuit syntax

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});