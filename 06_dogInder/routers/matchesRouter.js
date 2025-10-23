import { Router } from 'express';  //hiver kun det ud som skal bruges
import { getMatches } from '../util/matchesUtil.js';
const router = Router(); //instantiering
//Dummy router, som kan indeholde get, post, put, delete ruter
//router importeres til server (app.js), hvori man siger app.use(router)

router.get("/test", (req,res) => {
    res.send({data: "does it work?"});
})

//Router kan indeholde mange ruter


router.get("/api/matches", async (req, res) =>  {
    const matches = await getMatches();
    res.send({ data: matches });
});

export default {};
