/*
  Warnings:

  - You are about to drop the `MarketplaceProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `MarketplaceProduct` DROP FOREIGN KEY `MarketplaceProduct_marketplaceId_fkey`;

-- DropForeignKey
ALTER TABLE `MarketplaceProduct` DROP FOREIGN KEY `MarketplaceProduct_productVariationId_fkey`;

-- DropTable
DROP TABLE `MarketplaceProduct`;

-- CreateTable
CREATE TABLE `MarketplaceVariation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productVariationId` INTEGER NOT NULL,
    `externalId` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `quantityOnMarketplace` INTEGER NULL,
    `marketplaceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MarketplaceVariation` ADD CONSTRAINT `MarketplaceVariation_marketplaceId_fkey` FOREIGN KEY (`marketplaceId`) REFERENCES `Marketplace`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MarketplaceVariation` ADD CONSTRAINT `MarketplaceVariation_productVariationId_fkey` FOREIGN KEY (`productVariationId`) REFERENCES `ProductVariation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
