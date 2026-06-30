const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

analyzeRisk

}=require("../controllers/aiController");

router.post("/risk",protect,analyzeRisk);

module.exports=router;