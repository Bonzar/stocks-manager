/*
  Warnings:

  - A unique constraint covering the columns `[externalId,marketplaceId]` on the table `MarketplaceVariation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `MarketplaceVariation_externalId_marketplaceId_key` ON `MarketplaceVariation`(`externalId`, `marketplaceId`);
