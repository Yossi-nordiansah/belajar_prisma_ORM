import prismaClient from '../src/prisma-client';

describe('prisma client', () => {
    it("should can do create", async () => {
        const customers = await prismaClient.customer.create({
           data : {
            id: "49yr835myt",
            email: "ronaldo@gmail.com",
            name: "C Ronaldo",
            phone: "085655230813"
           },
           select : {
            id : true,
            name : true
           }
        });
        expect(customers.id).toBe("49yr835myt");
        expect(customers.name).toBe('C Ronaldo');
        expect(customers.phone).toBe(undefined);
        expect(customers.email).toBe(undefined);
    });

    it("should can do findMany", async () => {
        const customers = await prismaClient.customer.findMany({
            select : {
                id : true,
                name : true
            }
       });
        for(let customer of customers){
            expect(customer.id).toBeDefined();
            expect(customer.name).toBeDefined();
            expect(customer.phone).toBeUndefined();
            expect(customer.email).toBeUndefined();
        }
    })
})