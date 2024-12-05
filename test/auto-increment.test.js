import prismaClient from '../src/prisma-client';

describe("Prisma Client", () => {
  it('should be able to create with auto increment primary key', async () => {
    const category = await prismaClient.category.create({
      data : {
        name : "food"
      }
    });

    console.info(category);
  });
});
