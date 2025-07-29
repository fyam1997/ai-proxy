import http from "http"

const ports = [9020, 9021]

for (let port of ports) {
    const server = http.createServer((req, res) => {
        res.end(`Server ${port}`)
    })
    server.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
}
