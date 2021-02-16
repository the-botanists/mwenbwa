import Simpleuser from "../models/simpleuser";

const getAllSimpleUser = async (req, res) => {
    try {
        const allSimpleUser = await Simpleuser.find();
        res.status(200).json(allSimpleUser);
    } catch (error) {
        res.status(400).json({error});
    }
};

// const getOneSimpleUser = async (req, res) => {
//     try {
//         const oneSimpleUser = await SimpleUser.findOne({_id: req.params.id})
//         res.status(200).json({oneSimpleUser})
//     } catch (error){
//         res.status(404).json({error});
//     }
// };

// const updateSimpleUser = async (req, res) => {
//     try {
//         await SimpleUser.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
//         await res.status(200).json({message: "This SimpleUser is updated !"})
//     } catch {
//         res.status(400).json({error});
//     }
// };

// const removeSimpleUser = async (req, res) => {
//     try {
//     await SimpleUser.deleteOne({_id: req.params.id})
//     await res.status(200).json({message: "This SimpleUser is Destroyed  !"})
//     } catch {
//         res.status(400).json({error});
//     }
// };

// const createSimpleUser = (req, res) => {
//     delete req.body._id;
//     const newsimpleuser = new SimpleUser({
//         ...req.body,
//     });
//     newsimpleuser.save()
//         .then(() => res.status(201).json({message: "SimpleUser add !"}))
//         .catch(error => res.status(400).json({error}));
// };

export default getAllSimpleUser; // , getOneSimpleUser, updateSimpleUser, removeSimpleUser, createSimpleUser};
