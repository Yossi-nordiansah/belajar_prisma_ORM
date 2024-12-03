import prismaClient from '../src/prisma-client';

describe("prisma client", () => {
    it('should can create many records', async () => {
        const {count} = await prismaClient.customer.createMany({
            data: [
                {
                    id: "47yr835uyt",
                    email: "yossi.nordiansah99@gmail.com",
                    name: "Eva Maulinda",
                    phone: "085655230897"
                },
                {
                    id: "47yr835myt",
                    email: "yossi.nordiansah07@gmail.com",
                    name: "Yossi Nordiansah",
                    phone: "085655230898"
                }
            ]
        });
        expect(count).toBe(2);
    });

    it('should can update many records', async () => {
        const {count} = await prismaClient.customer.updateMany({
            data : {
                email : "yossi.nordiansah13@gmail.com"
            },
            where : {
                name : "Yossi Nordiansah"
            }
        });
        expect(count).toBe(1);
    });//kalau menggunakan customer.update() where nya harus kolom yang unique, tp untuk updatemany, tidak harus unique

    it('should can delete many records', async () => {
        const {count} = await prismaClient.customer.deleteMany({
            where : {
                name : "Yossi"
            }
        });
        expect(count).toBe(0);
    });//delete many sifatnya sama dengan update many 

    it('should can read many records', async () => {
        const customer = await prismaClient.customer.findMany({});
        console.log(customer);
        expect(customer.length).toBe(2);
    });//delete many sifatnya sama dengan update many 

});
