const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res)=>{
    const livro = await prisma.livro.create({
        data: req.body
    });
    res.status(201).json(livro).end();
}

const read = async (req,res)=>{
    const livro = await prisma.livro.findMany();
    res.status(201).json(livro).end();
}

const readOne = async (req, res) => {
    try {
        const livro = await prisma.livro.findUnique({
            select: {
                id: true,
                titulo: true,
                autor: true,
                prateleira : true
            },
            where: {
                id: req.params.id
            }
        });
        return res.json(livro);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res)=>{
    const livro = await prisma.livro.update({
        data: req.body,
        where:{
            id: Number(req.params.id)
        }
    });
    res.status(204).json(livro).end();
}

const remove = async (req, res)=>{
    const livro = await prisma.livro.delete({
        where:{
            id: Number(req.params.id)
        }
    });
    res.status(204).json(livro).end();
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}