import Sale from "../models/sale.model.js";
import Item from "../models/item.model.js";


const addSaleItem = async (req, res)=>{
    try {
        const item = await Item.findById(req.params.id);
        if(!item){
            return res.status(404).json({
                sucess: false,
                message: "Item not found",
            })
        };
        // check inventory quantity must be greater than sale quantity
        if(item.quantity < req.body.quantity){
            return res.status(404).json({
                sucess: false,
                message: "Item quantity must be greater than sale quantity",
            })
        };

        const netQuantity = item.quantity - req.body.quantity;
        const totalPrice = item.price * req.body.quantity;

        const newSaleItem = {
            description: item._id,
            quantity: req.body.quantity,
            price:totalPrice,
            name:item.name,
        }
        const newSale = await Sale.create(newSaleItem);
        item.quantity = netQuantity;
        await item.save();

       res.status(201).json({
        success: true,
        newSale,
       }) 
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}


const getAllSale = async(req, res) => {
    try {
        const allSale = await Sale.find({}).populate("description", );
        const SaleArray = [];
        allSale.forEach((item)=>{
            if(item.description !== null){
                SaleArray.push(item);
            }
        })
        console.log(SaleArray);
        res.status(200).json({
            success: true,
            SaleArray, 
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

export {
    addSaleItem,
    getAllSale,
}