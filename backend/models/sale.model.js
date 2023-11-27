import mongoose  from "mongoose";

const saleSchema = new mongoose.Schema({
    description:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
    },
    quantity:{
        type:Number,
        required:true,
    },
});

const Sale = mongoose.model('Sale', saleSchema);
export default Sale;

