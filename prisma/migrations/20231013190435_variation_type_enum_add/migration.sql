/*
  Warnings:

  - You are about to drop the `VariationType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `variationType` to the `ProductVariation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ProductVariation` DROP FOREIGN KEY `ProductVariation_variationTypeId_fkey`;

-- AlterTable
ALTER TABLE `ProductVariation` ADD COLUMN `variationType` ENUM('SIMPLE', 'SET') NOT NULL;

-- DropTable
DROP TABLE `VariationType`;
