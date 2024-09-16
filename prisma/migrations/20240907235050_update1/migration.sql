/*
  Warnings:

  - You are about to drop the column `currPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `prevPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - Added the required column `currentPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previousPrice` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "currPrice",
DROP COLUMN "prevPrice",
DROP COLUMN "price",
ADD COLUMN     "currentPrice" INTEGER NOT NULL,
ADD COLUMN     "previousPrice" INTEGER NOT NULL,
ALTER COLUMN "quantity" SET DEFAULT 1;
