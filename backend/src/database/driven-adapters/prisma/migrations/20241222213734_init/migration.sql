-- CreateEnum

CREATE TYPE "barcodeType" AS ENUM('qr', 'aztec', 'code_128', 'code_39', 'code_93', 'data_matrix', 'ean_13', 'ean_8', 'itf', 'pdf_417', 'upc_a', 'upc_e', 'codabar');



-- CreateTable
CREATE TABLE "barcode" (
    "id" TEXT NOT NULL,
    "type" "barcodeType" NOT NULL,
    "data" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "barcode_pkey" PRIMARY KEY ("id")
);
