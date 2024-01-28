/*
  Warnings:

  - Added the required column `expires_date` to the `UserToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserToken" ADD COLUMN     "expires_date" TIMESTAMP(3) NOT NULL;
