/*
  Warnings:

  - You are about to drop the column `variationTypeId` on the `ProductVariation` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `ProductVariation_variationTypeId_fkey` ON `ProductVariation`;

-- AlterTable
ALTER TABLE `ProductVariation` DROP COLUMN `variationTypeId`;
