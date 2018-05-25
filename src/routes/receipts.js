const express = require("express");
const router = express.Router();

const controller = require("../controllers/receipts");

router.post("/addReceipts", controller.addReceipts);
router.get("/getItemsList", controller.itemizedList);

module.exports = router;
