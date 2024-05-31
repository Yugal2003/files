import express from "express";
import router from "./routes/routes.js";
import cors from 'cors';
import DBconnection from "./database/db.js";

const app = express();

app.use(cors());

app.use("/" ,router);

const PORT = 10000;

DBconnection();

app.listen(PORT , () => {
    console.log(`Server Running on Port : ${PORT}`);
}) 