import express from "express";
import { addItem,
        deleteItem,
        getAllItems,
        updateItem,
} from "../controller/item.controller.js";


const itemRouter = express.Router();

itemRouter.post("/item/new", addItem);
itemRouter.delete('/item/delete/:id', deleteItem);
itemRouter.put("/item/update/:id", updateItem)
itemRouter.get('/item/all', getAllItems)

export default itemRouter;