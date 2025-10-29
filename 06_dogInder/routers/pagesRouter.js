import { Router} from 'express';

const router = Router();
//Hvis man bruger prefix, så skal der være et godt argument.
//bedre at se fulde path nede i route iflh Anders


import { contactPage, frontpagePage, matchesPage } from '../util/pagesUtil.js';

router.get("/", (req, res) => {
    res.send(frontpagePage);
});

router.get("/matches", (req, res) => {
    res.send(matchesPage);
});

router.get("/contact", (req, res) => {
    res.send(contactPage);
}); 


export default router;