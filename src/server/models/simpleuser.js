import mongoose from "mongoose"; 

const simpleUserShema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Simpleuser", simpleUserShema);