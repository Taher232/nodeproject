const myModule = require("./mymodule.js");
const extention = process.argv[3];
const fileUrl = process.argv[5];

myModule(fileUrl, extention, (err, filter) => {
    if (err) return console.error(err);
    filter.forEach((e) => console.log(e));
});