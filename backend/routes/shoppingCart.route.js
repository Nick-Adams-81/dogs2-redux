const router = require('express').Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

router.get('/shoppingCart', async (req, res, next) => {
    try {
        const products = await prisma.shoppingCart.findMany({})
        res.json(products)
    } catch(err) {
        next(err)
    }
})

router.get('/shoppingCart/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await prisma.shoppingCart.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(product)
    } catch(err) {
        next(err)
    }
})

router.post('/postCartItem', async (req, res, next) => {
    try {
        const data = req.body
        const product = await prisma.shoppingCart.create({
            data: data
        })
        res.json(product)
    } catch(err) {
        next(err)
    }
})

router.patch('/updateCartItem/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await prisma.shoppingCart.update({
            where: {
                id: Number(id)
            },
            data: req.body
        })
        res.json(product)
    } catch(err) {
        next(err)
    }
})

router.delete('/deleteCart', async (req, res, next) => {
    try {
        const deletedCart = await prisma.shoppingCart.deleteMany({})
        res.json(deletedCart)
    } catch(err) {
        next(err)
    }
})

module.exports = router