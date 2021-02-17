import express from "express";
import treeCtrl from "../controllers/tree";

const router2 = express.Router();

router2.get("/", treeCtrl.getAllTree);
router2.get("/:id", treeCtrl.getOneTree);
router2.put("/:id", treeCtrl.updateTree);
router2.delete("/:id", treeCtrl.removeTree);
router2.post("/", treeCtrl.createTree);

export default router2;
