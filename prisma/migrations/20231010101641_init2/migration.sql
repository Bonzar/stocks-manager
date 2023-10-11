/*
  Warnings:

  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `products`;

-- CreateTable
CREATE TABLE `DryPowder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL DEFAULT 0,
    `code` VARCHAR(191) NULL,
    `productId` INTEGER NOT NULL,

    UNIQUE INDEX `DryPowder_code_key`(`code`),
    UNIQUE INDEX `DryPowder_productId_key`(`productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Product_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VariationType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `VariationType_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VariationVolume` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `minCount` INTEGER NOT NULL,
    `priority` INTEGER NOT NULL,
    `dryCoefficient` DOUBLE NOT NULL,

    UNIQUE INDEX `VariationVolume_name_key`(`name`),
    UNIQUE INDEX `VariationVolume_priority_key`(`priority`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductVariation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,
    `productId` INTEGER NOT NULL,
    `variationTypeId` INTEGER NOT NULL,
    `variationVolumeId` INTEGER NULL,

    UNIQUE INDEX `ProductVariation_productId_variationVolumeId_key`(`productId`, `variationVolumeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VariationSet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `parentVariationId` INTEGER NOT NULL,
    `componentVariationId` INTEGER NOT NULL,

    UNIQUE INDEX `VariationSet_parentVariationId_key`(`parentVariationId`),
    UNIQUE INDEX `VariationSet_parentVariationId_componentVariationId_key`(`parentVariationId`, `componentVariationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MarketplaceProduct` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productVariationId` INTEGER NOT NULL,
    `externalId` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `quantityOnMarketplace` INTEGER NULL,
    `marketplaceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Marketplace` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `coefficient` DOUBLE NOT NULL,
    `haveWarehouse` BOOLEAN NOT NULL,

    UNIQUE INDEX `Marketplace_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `action` VARCHAR(191) NOT NULL,
    `details` VARCHAR(191) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DryPowder` ADD CONSTRAINT `DryPowder_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductVariation` ADD CONSTRAINT `ProductVariation_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductVariation` ADD CONSTRAINT `ProductVariation_variationTypeId_fkey` FOREIGN KEY (`variationTypeId`) REFERENCES `VariationType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductVariation` ADD CONSTRAINT `ProductVariation_variationVolumeId_fkey` FOREIGN KEY (`variationVolumeId`) REFERENCES `VariationVolume`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VariationSet` ADD CONSTRAINT `VariationSet_parentVariationId_fkey` FOREIGN KEY (`parentVariationId`) REFERENCES `ProductVariation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VariationSet` ADD CONSTRAINT `VariationSet_componentVariationId_fkey` FOREIGN KEY (`componentVariationId`) REFERENCES `ProductVariation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MarketplaceProduct` ADD CONSTRAINT `MarketplaceProduct_marketplaceId_fkey` FOREIGN KEY (`marketplaceId`) REFERENCES `Marketplace`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MarketplaceProduct` ADD CONSTRAINT `MarketplaceProduct_productVariationId_fkey` FOREIGN KEY (`productVariationId`) REFERENCES `ProductVariation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
