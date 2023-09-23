const app = require("./app");
const config = require("./app/config");

// start server 
const Port = config.app.port;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}.`);
})