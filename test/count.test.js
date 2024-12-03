import prismaClient from '../src/prisma-client';

describe("Prisma Client", ()=>{
    it("should be able to count", async () => {
      const total = await prismaClient.customer.count({
        where : {
            name : "Yossi Nordiansah"
        }
      });
      expect(total).toBe(1);
    })
})