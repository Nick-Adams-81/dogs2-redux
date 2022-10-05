const router = require('express').Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

router.get('/inventory', async (req, res, next) => {
  try {
    const products = await prisma.inventory.findMany({})
    res.json(products)
  } catch(err) {
    next(err)
  }
});

router.get('/inventory/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await prisma.inventory.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(product)
    } catch(err) {
        next(err)
    }
})

router.post('/newInventory', async (req, res, next) => {
    try {
        const data = req.body
        const product = await prisma.inventory.create({
            data: data
        })
        res.json(product)
    } catch(err) {
        next(err)
    }
})

router.patch('/updateInventory/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await prisma.inventory.update({
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

router.delete('/deleteInventory/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedProduct = await prisma.inventory.delete({
            where: {
                id: Number(id)
            }
        })
        res.json(deletedProduct)
    } catch (err) {
        next(err)
    }
})

module.exports = router;