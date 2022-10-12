import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    title: String,
},);

const EarnTransaction = mongoose.model('EarnTransaction', schema);
export default EarnTransaction;