/*
  Warnings:

  - You are about to drop the column `cartID` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_cartID_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "cartID";
