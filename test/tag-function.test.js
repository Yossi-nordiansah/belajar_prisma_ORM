function tagFunction(array, ...args){
    console.log(array);
    console.log(args);
};

test("tag function", () => {
    const name = "Yossi";
    const alamat = "Mojokerto";

    tagFunction`SELECT * FROM users WHERE name = ${name} AND alamat = ${alamat}`
})