import express from "express";
import treeCtrl from "../controllers/tree";

const router = express.Router();

router.get("/all/", treeCtrl.getAllTree);
router.get("/geo200/", treeCtrl.getAllTree);
router.get("/one/:id", treeCtrl.getOneTree);
router.put("/update/:id", treeCtrl.updateTree);
router.delete("/del/:id", treeCtrl.removeTree);
router.get("/rand3/", treeCtrl.get3TreeRand);
// router.post("/add", treeCtrl.createTree);

// router.put("/updateall", (req, res) => {
//     Tree.updateMany(
//         {height: {$gte: 2}},
//         {$set: {treevalue2: {$divide: ["$circonf", 3.1421]}}},
//         (err, result) => {
//             if (err) {
//                 res.send(err);
//                 console.log(err);
//             } else {
//                 console.log("Updated Docs : ", result);
//             }
//         },
//     );
// });

export default router;

// { $set: { treevalue:   {$multiply:[{$divide: ["$circonf", 3.1421]},  "$height"]} },
