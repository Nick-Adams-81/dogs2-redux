const router = require('express').Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

router.get('/theSweetSuite', async (req, res, next) => {
    try {
        const product = await prisma.theSweetSuite.findMany({})
        res.json(product)
    }
    catch (err) {
        next(err)
    }
})

router.get('/theSweetSuite/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await prisma.theSweetSuite.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(product)
    } catch (err) {
        next(err)
    }
})

router.post('/newSweetSuiteItem', async (req, res, next) => {
    try {
        const data = req.body
        const product = await prisma.theSweetSuite.create({
            data: data
        })
        res.json(product)
    } catch (err) {
        next(err)
    }
})

router.patch('/updateSweetSuite/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await prisma.theSweetSuite.update({
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

router.delete('/deleteSweetSuiteItem/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const deleteProduct = await prisma.theSweetSuite.delete({
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