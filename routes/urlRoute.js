import express from "express"
import { hashUrl,redirectUrl } from "../controllers/urlController.js";
const router = express.Router();


router.post('/hash-url', hashUrl); // this is use for hashing the original url and send hashed url in the resopnse

router.get('/:hash', redirectUrl); // when user try to access the hashed url it redirect the original url 

export default router;