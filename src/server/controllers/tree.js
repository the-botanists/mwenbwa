import Tree from "../models/tree";
const ObjectID = require("mongodb").ObjectID;

// const getAllTree = async (req, res) => {
//     try {
//         const allTrees = await Tree.find();
//         res.status(200).json({allTrees});
//     } catch (error) {
//         res.status(400).json({error});
//     }
// };

const getAllTree = async (req, res) => {
    // console.log(req.query);
    await Tree.find()
        .then(allTrees => res.status(200).json(allTrees))
        .catch(error => res.status(404).json({error}));
};

const getAllTreeCV = async (req, res) => {
    const centercoor = req.params.center.split(",");
    // console.log(centercoor[0]);
    // console.log(centercoor[1]);
    await Tree.find({
        location: {
            $geoWithin: {
                $centerSphere: [[centercoor[0], centercoor[1]], 0.0045],
            },
        },
    })
        .then(allTreesCV => res.status(200).json(allTreesCV))
        .catch(error => res.status(404).json({error}));
};

const get3TreeRand = async (req, res) => {
    try {
        const Rand3Trees = await Tree.aggregate([
            {$match: {owner: ""}},
            {$sample: {size: 3}},
        ]);
        Rand3Trees.map(async randTree => {
            console.log(`Tree: ${randTree._id}`);
            const user = "hello";
            const currentid = randTree._id;
            await Tree.updateOne(
                {_id: ObjectID(currentid).valueOf()},
                {$set: {owner: user}},
            );
        });
        res.status(200).json({Rand3Trees});
    } catch (error) {
        res.status(400).json({error});
    }
};

// const getAllTreeWithGeo = async (req, res) => {
//     try {
//         const geo200Trees = await Tree.find({
//             location: {
//                 $geoWithin: {$centerSphere: [[50.624454, 5.604456], 0.0000313]},
//             },
//         });
//         res.status(200).json(geo200Trees);
//     } catch (error) {
//         res.status(400).json({error});
//     }
// };

const getOneTree = async (req, res) => {
    try {
        const oneTree = await Tree.findOne({_id: req.params.id});
        res.status(200).json({oneTree});
    } catch (error) {
        res.status(404).json({error});
    }
};

const getGeo100Tree = async (req, res) => {
    try {
        const oneTree = await Tree.findOne({_id: req.params.id});
        const futureOwner = req.params.user;
        console.log(`FUTURE USER OWNER : ${futureOwner}`);
        console.log(`TREE COOR : ${oneTree.location.coordinates}`);
        console.log(`TREE VALUE : ${oneTree.treevalue}`);
        console.log(`CURRENT OWNER : ${oneTree.owner}`);
        console.log("=======================");

        const TTTreeAt100m = await Tree.find({
            location: {
                $geoWithin: {
                    $centerSphere: [oneTree.location.coordinates, 0.0000313],
                },
            },
        });
        const countAllTrees = TTTreeAt100m.length;
        console.log(`COUNT ALL TREES : ${TTTreeAt100m.length}`);

        const TTTreeAt100mFutureOwner = await Tree.find({
            owner: futureOwner,
            location: {
                $geoWithin: {
                    $centerSphere: [oneTree.location.coordinates, 0.0000313],
                },
            },
        });

        console.log(
            `COUNT ALL TREES Future OWNER : ${TTTreeAt100mFutureOwner.length}`,
        );

        const TTTreeAt100mOldOwner = await Tree.find({
            owner: oneTree.owner,
            location: {
                $geoWithin: {
                    $centerSphere: [oneTree.location.coordinates, 0.0000313],
                },
            },
        });
        const CountAllTreeCurrentOwner = TTTreeAt100mOldOwner.length;
        console.log(
            `COUNT ALL TREES OLD OWNER: ${TTTreeAt100mOldOwner.length}`,
        );
        // console.log(Object.values(filters).filter(element => element.active === true).length);

        // ACTUAL OWNER
        const ttValueAlltree1 = await Tree.aggregate([
            {
                $match: {
                    owner: oneTree.owner,
                    location: {
                        $geoWithin: {
                            $centerSphere: [
                                oneTree.location.coordinates,
                                0.0000313,
                            ],
                        },
                    },
                },
            },
            {
                $group: {
                    _id: null,
                    TotalLeafs: {
                        $sum: "$treevalue",
                    },
                },
            },
        ]);

        const ttLeafs1 = ttValueAlltree1[0].TotalLeafs;
        console.log(`☣️  TOTAL Leafs for ${oneTree.owner}: ${ttLeafs1}`);
        const totalValueAllTreeCurrentOwner = ttLeafs1;

        // ALL TREE VALUE
        const ttValueAlltree2 = await Tree.aggregate([
            {
                $match: {
                    owner: {$nin: [oneTree.owner, futureOwner]},
                    location: {
                        $geoWithin: {
                            $centerSphere: [
                                oneTree.location.coordinates,
                                0.0000313,
                            ],
                        },
                    },
                },
            },
            {
                $group: {
                    _id: null,
                    TotalLeafs2: {
                        $sum: "$treevalue",
                    },
                },
            },
        ]);

        const ttLeafs2 = ttValueAlltree2[0].TotalLeafs2;
        console.log(`☣️  TOTAL Leafs for ALL TREE: ${ttLeafs2}`);
        const totalValueAllTree = ttLeafs2;

        // FUTURE OWNER TREE VALUE
        if (TTTreeAt100mFutureOwner.length !== 0) {
            const ttValueAlltree3 = await Tree.aggregate([
                {
                    $match: {
                        owner: futureOwner,
                        location: {
                            $geoWithin: {
                                $centerSphere: [
                                    oneTree.location.coordinates,
                                    0.0000313,
                                ],
                            },
                        },
                    },
                },
                {
                    $group: {
                        _id: null,
                        TotalLeafs3: {
                            $sum: "$treevalue",
                        },
                    },
                },
            ]);

            const ttLeafs3 = ttValueAlltree3[0].TotalLeafs3;
            console.log(`☣️  TOTAL Leafs for ${futureOwner}: ${ttLeafs3}`);
            const totalValueAllTreeFutureOwner = parseInt(ttLeafs3);

            const calcValue = Math.ceil(
                parseInt(oneTree.treevalue) +
                    parseInt(totalValueAllTreeCurrentOwner) *
                        (parseInt(countAllTrees) /
                            parseInt(CountAllTreeCurrentOwner)) +
                    parseInt(totalValueAllTree) -
                    parseInt(totalValueAllTreeFutureOwner),
            );
            console.log(`TREE REBUY VALUE : ${calcValue}`);
            res.status(200).json({TreeRebuy: calcValue});
        } else {
            const ttLeafs3 = 0;
            console.log(`☣️  TOTAL Leafs for ${futureOwner}: ${ttLeafs3}`);
            const totalValueAllTreeFutureOwner = parseInt(ttLeafs3);

            const calcValue = Math.ceil(
                parseInt(oneTree.treevalue) +
                    parseInt(totalValueAllTreeCurrentOwner) *
                        (parseInt(countAllTrees) /
                            parseInt(CountAllTreeCurrentOwner)) +
                    parseInt(totalValueAllTree) -
                    parseInt(totalValueAllTreeFutureOwner),
            );
            console.log(`TREE REBUY VALUE : ${calcValue}`);
            res.status(200).json({rebuyvalue: calcValue});
        }
    } catch (error) {
        res.status(404).json({error});
    }
};

export default {
    getAllTree,
    getOneTree,
    getGeo100Tree,
    get3TreeRand,
    getAllTreeCV,
};
