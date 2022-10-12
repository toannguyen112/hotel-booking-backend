import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    title: String,
});

const BurnTransaction = mongoose.model('BurnTransaction', schema);
export default BurnTransaction;