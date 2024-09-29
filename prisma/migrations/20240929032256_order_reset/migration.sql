/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `productName` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Order` table. All the data in the column will be lost.
  - Added the required column `orderId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "imageUrl",
DROP COLUMN "price",
DROP COLUMN "productName",
DROP COLUMN "quantity",
ADD COLUMN     "orderId" INTEGER NOT NULL;
