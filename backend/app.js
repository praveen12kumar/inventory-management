import express from 'express';
import {config} from "dotenv";
import cors from "cors";
import helmet from 'helmet';
import itemRouter from './routes/itemRoutes.js';
import saleRouter from './routes/saleRoute.js';
import path from "path";
config({path:"backend/config/config.env"});

const __dirname = path.resolve();

const app = express();

// using middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));


// Routes
app.use("/api/v1", itemRouter);
app.use("/api/v1/sale", saleRouter);

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})


export default app;