import prismaClient from '../src/prisma-client';

describe('Prisma Client', function () {
    it('should can create one to one', async ()=> {
        const wallet = await prismaClient.wallet.create({
            data : {
                id: '001',
                customer_id: "49yr835myt",
                balance : 100000
            },
            include : {
                customer : true
            }
        })

        console.info(wallet);
    });

    it('should can create one to one with relation', async ()=> {
        const customer = await prismaClient.customer.create({
            data : {
                id: '49yr835myx',
                name : "Luthwig",
                email : 'luthwig00$gmail.com',
                phone : "085676456661",
                wallet : {
                    create : {
                        id: "002",
                        balance : 500000
                    }
                }
            },
            include : {
                wallet : true
            }
        })

        console.info(customer);
    });

    it('should can find one to one with relation', async ()=> {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id : "49yr835myx"
            },
            include : {
                wallet : true
            }
        })

        console.info(customer);
    });

    it('should can findmany one to one with relation', async ()=> {
        const customer = await prismaClient.customer.findMany({
            where: {
                wallet : {
                    isNot : null
                }
            },
            include : {
                wallet : true
            }
        })

        console.info(customer);
    });
});