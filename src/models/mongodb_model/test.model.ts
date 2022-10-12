import mongoose from "mongoose";
mongoose.Promise = global.Promise;

const schema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        title: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
    },
    { collection: "test" }
);

const Test = mongoose.model("Test", schema);
export default Test;
