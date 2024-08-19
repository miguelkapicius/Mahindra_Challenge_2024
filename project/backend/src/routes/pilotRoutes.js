const express = require("express");
const pilotController = require("../controllers/pilotController");
const router = express.Router();

router.post("/", pilotController.createPilot);
router.get("/", pilotController.getAllPilots);
router.put("/", pilotController.updatePilot);
router.delete("/", pilotController.deletePilot);

module.exports = router;
