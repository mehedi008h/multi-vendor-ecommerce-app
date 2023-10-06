/*
  Warnings:

  - You are about to drop the column `rememberToken` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "rememberToken",
ADD COLUMN     "refreshToken" TEXT;
