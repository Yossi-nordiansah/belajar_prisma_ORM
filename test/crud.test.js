import prismaClient from '../src/prisma-client';

describe("Prisma Client", ()=>{
    it("create", async () => {
        const customer = await prismaClient.customer.create({
            data : {
                id: "47yr835uyt",
                email: "yossi.nordiansah99@gmail.com",
                name: "Yossi Nordiansah",
                phone: "085655230897"
            }
        })

        expect(customer.id).toBe("47yr835uyt");
        expect(customer.name).toBe("Yossi Nordiansah");
        expect(customer.email).toBe("yossi.nordiansah99@gmail.com");
        expect(customer.phone).toBe("085655230897");
    });

    it("update", async () => {
        const customer = await prismaClient.customer.update({
            data : {
                id: "47yr835uyt",
                email: "yossi.nordiansah99@gmail.com",
                name: "Eva Maulinda",
                phone: "085655230897"
            },
            where : {
                id : "47yr835uyt"
            }
        })

        expect(customer.id).toBe("47yr835uyt");
        expect(customer.name).toBe("Eva Maulinda");
        expect(customer.email).toBe("yossi.nordiansah99@gmail.com");
        expect(customer.phone).toBe("085655230897");
    })

    it("read data uniq, gunakan findUnique", async () => {
        const customer = await prismaClient.customer.findUnique({
            where : {
                id : "47yr835uyt" //hanya bisa kolom yang bersifat uniq
            }
        })

        expect(customer.id).toBe("47yr835uyt");
        expect(customer.name).toBe("Eva Maulinda");
        expect(customer.email).toBe("yossi.nordiansah99@gmail.com");
        expect(customer.phone).toBe("085655230897");
    });

    it("delete", async () => {
        const customer = await prismaClient.customer.delete({
            where : {
                id : "47yr835uyt" //hanya bisa kolom yang bersifat uniq
            }
        })

        expect(customer.id).toBe("47yr835uyt");
        expect(customer.name).toBe("Eva Maulinda");
        expect(customer.email).toBe("yossi.nordiansah99@gmail.com");
        expect(customer.phone).toBe("085655230897");
    });
})