import express from "express";
import gamelogCtrl from "../controllers/gamelog";

const router = express.Router();

router.get("/all/", gamelogCtrl.getGamelog);

export default router;
