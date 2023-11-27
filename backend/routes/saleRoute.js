import express from 'express';
import { addSaleItem, getAllSale } from '../controller/sale.controller.js';
const saleRouter = express.Router();


saleRouter.post('/add/:id', addSaleItem);
saleRouter.get('/all', getAllSale);


export default saleRouter;