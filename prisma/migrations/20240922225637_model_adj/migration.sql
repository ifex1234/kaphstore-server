/*
  Warnings:

  - The `quantity` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `productUrl` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `currentPrice` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `previousPrice` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "productUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "quantity",
ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1,
DROP COLUMN "currentPrice",
ADD COLUMN     "currentPrice" INTEGER NOT NULL,
DROP COLUMN "previousPrice",
ADD COLUMN     "previousPrice" INTEGER NOT NULL;
