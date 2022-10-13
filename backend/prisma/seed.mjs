
import { inventory } from './inventory.mjs'
import { candyCorp } from './candyCorp.mjs'
import { theSweetSuite } from './theSweetSuite.mjs'
import { dentistsHateUs } from './dentistsHateUs.mjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
    await prisma.inventory.createMany({
        data: inventory
    })
    await prisma.candyCorp.createMany({
        data: candyCorp
    })
    await prisma.theSweetSuite.createMany({
        data: theSweetSuite
    })
    await prisma.dentistsHateUs.createMany({
        data: dentistsHateUs
    })
}

// async function main() {
//    await prisma.inventory.createMany({
//     data: inventory
//    })
// }

main()
    .catch(err => {
        console.log(err)
        process.exit(1)
    })
    .finally(() => {
        prisma.$disconnect()
    })