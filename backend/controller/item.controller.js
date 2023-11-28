import Item from "../models/item.model.js";

const addItem = async(req, res)=>{
    try {
        const item = await Item.create(req.body);
       
        res.status(201).json({
            sucess:true,
            item,
        })

    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error.message,
        })
    }
};

const deleteItem = async(req, res)=>{
    try {
        const item = await Item.findById(req.params.id);
        if(!item){
            return res.status(404).json({
                sucess:false,
            message:"Item not found",
            })
        }
        await item.deleteOne();
        res.status(200).json({
            sucess: true,
            message:"Item deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error.message,
        })
    }
};


const updateItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if(!item){
            return res.status(404).json({
                sucess: false,
                message: "Item not found",
            })
        };
        await item.updateOne(req.body);
        res.status(200).json({
            sucess: true,
            message: "Item updated successfully",
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error.message,
        })
    }
}

const getAllItems = async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).json({
            sucess: true,
            items,
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error.message,
        })
    }
}

export {
    addItem,
    deleteItem,
    updateItem,
    getAllItems,
}