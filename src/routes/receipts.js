const express = require("express");
const router = express.Router();

const addReceipts = require("../controllers/addReceipts");
const itemizedList = require("../controllers/itemizedList");

router.post("/addReceipts", addReceipts);
router.get("/getItemsList", itemizedList);

module.exports = router;
