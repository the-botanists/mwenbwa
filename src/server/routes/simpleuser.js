import express from "express";
import simpleUserCtrl from "../controllers/simpleuser";

const router = express.Router();

router.get("/allusr", simpleUserCtrl.getAllSimpleUser);
// router.get("/:id", simpleUserCtrl.getOneSimpleUser);
// router.put("/:id", simpleUserCtrl.updateSimpleUser);
// router.delete("/:id", simpleUserCtrl.removeSimpleUser);
// router.post("/", simpleUserCtrl.createSimpleUser);

export default router;
