import express from "express";
import treeCtrl from "../controllers/tree";

const router = express.Router();

router.get("/", treeCtrl.getAllTree);
router.get("/:id", treeCtrl.getOneTree);
router.put("/:id", treeCtrl.deleteTree);
router.delete("/:id", treeCtrl.removeTree);
router.post("/", treeCtrl.createTree);

export default router;
