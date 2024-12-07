-- CreateTable
CREATE TABLE "Vehicle" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantityPassengers" TEXT NOT NULL,
    "quantityBaggage" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pricePerHour" INTEGER NOT NULL,
    "pricePerMile" INTEGER NOT NULL,
    "images" TEXT[],

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);
