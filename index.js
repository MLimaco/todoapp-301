import express from "express"
import { PrismaClient } from "@prisma/client";
import todosRouter from "./routes/todosRoutes.js";


const app = express();
const prisma = new PrismaClient();

app.get ("/", (req, res) => {
    res.send("Hello World");
});

app.use('/api/todos', todosRouter);

app.listen(3000, () => console.log("Estoy vivo en el puerto 3000"));