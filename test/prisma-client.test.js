import prismaClient from "../src/prisma-client"

describe("prisma client",()=>{
    it("should be able to connect to database", async () => {
        await prismaClient.$connect();
    
        await prismaClient.$disconnect();
    })
})