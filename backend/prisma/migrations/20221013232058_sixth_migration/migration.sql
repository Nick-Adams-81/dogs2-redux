/*
  Warnings:

  - You are about to alter the column `cost` on the `candyCorp` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `cost` on the `dentistsHateUs` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `itemtotalPrice` on the `shoppingCart` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `cost` on the `theSweetSuite` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `candyCorp` MODIFY `cost` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `dentistsHateUs` MODIFY `cost` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `shoppingCart` MODIFY `itemtotalPrice` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `theSweetSuite` MODIFY `cost` DOUBLE NOT NULL;
