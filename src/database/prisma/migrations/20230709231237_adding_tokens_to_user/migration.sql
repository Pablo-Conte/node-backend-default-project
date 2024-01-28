-- CreateTable
CREATE TABLE "UserToken" (
    "id_i" SERIAL NOT NULL,
    "id_e" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserToken_pkey" PRIMARY KEY ("id_e")
);

-- AddForeignKey
ALTER TABLE "UserToken" ADD CONSTRAINT "UserToken_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id_e") ON DELETE RESTRICT ON UPDATE CASCADE;
