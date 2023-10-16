/*
  Warnings:

  - You are about to drop the column `shopCategory` on the `Shop` table. All the data in the column will be lost.
  - Added the required column `shopOwnerId` to the `Shop` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `mails` on the `Shop` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "Shop_mails_key";

-- AlterTable
ALTER TABLE "Shop" DROP COLUMN "shopCategory",
ADD COLUMN     "shopOwnerId" INTEGER NOT NULL,
DROP COLUMN "mails",
ADD COLUMN     "mails" JSONB NOT NULL,
ALTER COLUMN "secret" DROP NOT NULL;

-- CreateTable
CREATE TABLE "_CategoryToShop" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToShop_AB_unique" ON "_CategoryToShop"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToShop_B_index" ON "_CategoryToShop"("B");

-- AddForeignKey
ALTER TABLE "Shop" ADD CONSTRAINT "Shop_shopOwnerId_fkey" FOREIGN KEY ("shopOwnerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToShop" ADD CONSTRAINT "_CategoryToShop_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToShop" ADD CONSTRAINT "_CategoryToShop_B_fkey" FOREIGN KEY ("B") REFERENCES "Shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
