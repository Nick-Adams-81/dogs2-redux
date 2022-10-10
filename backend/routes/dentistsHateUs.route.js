const router = require('express').Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

router.get('/dentistsHateUs', async (req, res, next) => {
    try {
        const product = await prisma.dentistsHateUs.findMany({})
        res.json(product)
    } catch (err) {
        next(err)
    }
})

router.get('/dentistsHateUs/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await prisma.dentistsHateUs.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(product)
    } catch (err) {
        next(err)
    }
})

router.post('/newDentistsHateUsItem', async (req, res, next) => {
    try {
        const data = req.body
        const product = await prisma.dentistsHateUs.create({
            data: data
        })
        res.json(product)
    } catch (err) {
        next(err)
    }
})

router.patch('/updateDentistsHateUsItem/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await prisma.dentistsHateUs.update({
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

router.delete('/deleteDentistsHateUsItem/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedItem = await prisma.dentistsHateUs.delete({
            where: {
                id: Number(id)
            }
        })
        res.json(deletedItem)
    } catch (err) {
        next(err)
    }
})

module.exports = router