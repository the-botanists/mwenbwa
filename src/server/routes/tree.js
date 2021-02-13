import express from "express";
import treeCtrl from "../controllers/tree";

const router = express.Router();

router.get("/", treeCtrl.list);

router.get("/:id", treeCtrl.read);

export default router;
