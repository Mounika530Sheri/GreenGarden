const express = require("express");
const router = express.Router();
const { getAvailability } = require("../controller/availability");

router.get("/", getAvailability);

module.exports = router;
