const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

createSOS,

getMyIncidents

}=require("../controllers/sosController");

router.post("/",protect,createSOS);

router.get("/",protect,getMyIncidents);

module.exports=router;