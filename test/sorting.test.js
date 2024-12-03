import prismaClient from '../src/prisma-client';

//pagig digunakan untuk fitur pagination
describe('prisma client', () => {
    it("should can do sorting", async () => {
        const customers = await prismaClient.customer.findMany({
            skip : 0,
            take : 10,
            orderBy : [
                {name : "asc"},
                {email : "asc"}
            ]
        });
        console.info(customers)
    })
})