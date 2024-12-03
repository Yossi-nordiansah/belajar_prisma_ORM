import prismaClient from '../src/prisma-client';

//pagig digunakan untuk fitur pagination
describe('prisma client', () => {
    it("should can do paging", async () => {
        const page1 = await prismaClient.customer.findMany({
            skip : 0,
            take : 1
        });
        expect(page1.length = 1)
        const page2 = await prismaClient.customer.findMany({
            skip : 1,
            take : 1
        });
        expect(page2.length = 1)
        const page3 = await prismaClient.customer.findMany({
            skip : 2,
            take : 1
        });
        expect(page3.length = 1)
    })
})