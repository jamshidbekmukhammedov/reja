const http = require("http");
const mongodb = require("mongodb")

let db;
const connectionString = "mongodb+srv://Marco:bek50900309%40@cluster0.7oeltoc.mongodb.net/";

mongodb.connect(connectionString, {
    userNewUrlParser: true, 
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed")
        module.exports = client;
        const app = require("./app")
        const server = http.createServer(app);
        let PORT = 4008;
        server.listen(PORT, function () {
            console.log(`The server is running succsessfully on port: ${PORT}, http://localhost:${PORT}`);
});
    }
});

