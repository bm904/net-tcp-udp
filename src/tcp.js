const net = require("net")

const server = net.createServer(socket => {
    socket.write("Welcome.")
    socket.on("data", data => {
        console.log(data.toString())
    })
})

server.listen(8080, () => console.log("Starting server TCP on 8080"))