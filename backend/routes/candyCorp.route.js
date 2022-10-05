const router = require('express').Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

router.get('/candyCorp', async (req, res, next) => {
    try {
        const products = await prisma.candyCorp.findMany({})
        res.json(products)
    } catch (err) {
        next(err)
    }
})

router.get('/candyCorp/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await prisma.candyCorp.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(product)
    } catch (err) {
        next(err)
    }
})

router.post('/newCandyCorpItem', async (req, res, next) => {
    try {
        const data = req.body
        const product = await prisma.candyCorp.create({
            data: data
        })
        res.json(product)
    } catch (err) {
        next(err)
    }
})

router.patch('/candyCorp/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await prisma.candyCorp.update({
            where: {
                id: Number(id)
            },
            data: req.body
        })
        res.json(product)
    } catch (err) {
        next(err)
    }
})

router.delete('/candyCorpDelete/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const deleteProduct = await prisma.candyCorp.delete({
            where: {
                id: Number(id)
            }
        })
        res.json(deleteProduct)
    } catch (err) {
        next(err)
    }
})

module.exports = router