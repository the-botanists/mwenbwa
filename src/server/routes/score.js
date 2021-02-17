const express = require("express");

const router = express.Router();
const scoreControllers = require("../controllers/score");

router.post("/", scoreControllers.createScore);
router.get("/", scoreControllers.getAllScores);
router.get("/:id", scoreControllers.getOneScore);
router.get("/:username", scoreControllers.getOneScoreByUser);
// router.patch("/:id", scoreControllers.updateScore);
router.delete("/:id", scoreControllers.deleteScore);

module.exports = router;
