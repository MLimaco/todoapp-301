import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async(req, res) => {
    const todos = await prisma.todo.findMany();
    res.json({todos: todos});
}
);

export default router;