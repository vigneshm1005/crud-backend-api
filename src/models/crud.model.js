import mongoose from "mongoose";

const crudSchema = new mongoose.Schema({
    task:String
});

export default mongoose.model("crudDocument",crudSchema);