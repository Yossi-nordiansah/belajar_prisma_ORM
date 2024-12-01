import prismaClient from '../src/prisma-client';

describe("Prisma Client", ()=>{
    it("should be able to query sql", async () => {
        const id = '1';
        const name = "Yossi Nordiansah";

        const samples = await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id}`; //$queryRaw khusus digunakan untuk select data
        for(const sample of samples){
            console.log(sample)
            console.log(`result sample id : ${sample.id} and name ${sample.name}`)
        }
    })
})