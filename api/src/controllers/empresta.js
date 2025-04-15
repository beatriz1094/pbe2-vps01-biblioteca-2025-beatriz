const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res)=>{
    const empresta = await prisma.empresta.create({
        data: req.body
    });
    res.status(201).json(empresta).end();
}

const read = async (req,res)=>{
    const empresta = await prisma.empresta.findMany();
    res.status(201).json(empresta).end();
}

const readOne = async (req, res) => {
    try {
        const empresta = await prisma.empresta.findUnique({
            select: {
                id: true,
                alunoRa: true,
                livroId: true,
                retirada: true,
                devolucao: true,
                muita: true
            },
            where: {
                id: req.params.id
            }
        });
        return res.json(empresta);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res)=>{
    const empresta = await prisma.empresta.update({
        data: req.body,
        where:{
            id: Number(req.params.id)
        }
    });
    res.status(204).json(empresta).end();
}

const remove = async (req, res)=>{
    const empresta = await prisma.empresta.delete({
        where:{
            id: Number(req.params.id)
        }
    });
    res.status(204).json(empresta).end();
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}