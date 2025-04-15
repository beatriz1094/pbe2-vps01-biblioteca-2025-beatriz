const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res)=>{
    const aluno = await prisma.aluno.create({
        data: req.body
    });
    res.status(201).json(aluno).end();
}

const read = async (req,res)=>{
    const aluno = await prisma.aluno.findMany();
    res.status(201).json(aluno).end();
}

const readOne = async (req, res) => {
    try {
        const aluno = await prisma.aluno.findUnique({
            select: {
                ra: true,
                nome: true,
                telefone: true
            },
            where: {
                ra: req.params.ra
            }
        });
        return res.json(aluno);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res)=>{
    const aluno = await prisma.aluno.update({
        data: req.body,
        where:{
            ra: Number(req.params.ra)
        }
    });
    res.status(204).json(aluno).end();
}

const remove = async (req, res)=>{
    const aluno = await prisma.aluno.delete({
        where:{
            ra: Number(req.params.ra)
        }
    });
    res.status(204).json(aluno).end();
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}