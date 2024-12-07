import prismaClient from '../src/prisma-client';

describe('Prisma Client', function () {
   it("should can insert and include", async () => {
    const comment = await prismaClient.comment.create({
        data : {
            customer_id : "47yr835uyt",
            title : "Insert Comment",
            description : "description Comment"
        },
        include : {
            customer : true
        }
    });
    console.log(comment)
   });

   it("should can insert and many relation", async () => {
    const comment = await prismaClient.customer.create({
        data : {
            id : '47xr835msc',
            name : 'Aleix',
            email : 'aleix00@gmail.com',
            phone: '086788909887',
            comment : {
                createMany : {
                    data : [
                        {
                            title : "comment 1",
                            description : "description 1"
                        },
                        {
                            title : "comment 2",
                            description : "description 2"
                        }
                    ]
                }
            }
        },
        include : {
            comment : true
        }
    });
    console.log(comment)
   });

   
   it("should can find many with filter relation", async () => {
        const customers = await prismaClient.customer.findMany({
            where : {
                comment : {
                    some : {
                        title : {
                            contains : "Comment"
                        }
                    }
                }
            },
            include : {
                comment : true
            }
        });

        console.log(customers)
   });
});