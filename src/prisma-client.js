import {PrismaClient} from "@prisma/client";

const prismaClient = new PrismaClient({
    errorFormat: "pretty",
    log: ["info", "warn", "error", "query"]
});

export default prismaClient;