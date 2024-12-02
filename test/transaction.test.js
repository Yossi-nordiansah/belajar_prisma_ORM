import prismaClient from '../src/prisma-client';

describe("Prisma Client", ()=>{
    it("sequential transaction", async () => {
       const [yossi, eva] = await prismaClient.$transaction([
            prismaClient.customer.create({
                data:{
                    id: "47yr835umt",
                    email: "yossi.nordiansah99@gmail.com",
                    name: "Yossi Nordiansah",
                    phone: "085655230897"
                }
            }),
            prismaClient.customer.create({
                data: {
                    id: "47yr835uht",
                    email: "yossi.nordiansah07@gmail.com",
                    name: "Eva Maulinda",
                    phone: "085645551560"
                }
            }),
        ])

        expect(yossi.name).toBe("Yossi Nordiansah");
        expect(eva.name).toBe("Eva Maulinda");
        console.log(yossi)
    });
})