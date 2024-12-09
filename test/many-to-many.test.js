import prismaClient from '../src/prisma-client';

describe('Prisma Client', function () {
    it("should can insert and include", async () => {
        const like = await prismaClient.like.create({
            data: {
                customer_id: '47xr835msc',
                product_id: 'P0001'
            },
            include: {
                customer: true,
                product: true
            }
        });
        console.log(like)
    });

    it("should can findmany with many to many relation", async () => {
        const like = await prismaClient.customer.findUnique({
            where: {
                id: '47xr835msc'
            },
            include: {
                likes: {
                    include: {
                        product: true
                    }
                }
            }
        });
        console.log(like)
    });

    it("should can find one with many to many relation", async () => {
        const customer = await prismaClient.customer.findMany({
            where: {
                likes: {
                    some: {
                        product: {
                            name: {
                                contains: "A"
                            }
                        }
                    }
                }
            },
            include: {
                likes: {
                    include: {
                        product: true
                    }
                }
            }
        });
        console.log(customer)
    });

    it("should create implicit relation", async () => {
        const customer = await prismaClient.customer.update({
            where: {
                id: "47yr735myt"
            },
            data: {
                loves: {
                    connect: [
                        {
                            id: "P0001"
                        },
                        {
                            id: "P0002"
                        }
                    ]
                }
            },
            include : {
                loves: true
            }

        });
        console.info(customer)
    });
    
    it("should findmany implicit relation", async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                loves : {
                    some : {
                        name : {
                            contains : "A"
                        }
                    }
                }
            },
            include : {
                loves: true
            }

        });
        console.info(customers)
    });
});