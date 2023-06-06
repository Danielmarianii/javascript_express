const port = 3003

const express = require("express")
const app = express()
const bancoDeDados = require("./bancoDeDados")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/produtos", (request, response, next) => {
    response.send(bancoDeDados.getProdutos())
})

app.get("/produtos/:id", (request, response, next) => {
    response.send(bancoDeDados.getProduto(request.params.id))
})

app.post("/produtos", (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        name: request.body.name,
        price: request.body.price
    })
    response.send(produto)
})

app.put("/produtos/:id", (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: request.body.id,
        name: request.body.name,
        price: request.body.price
    })
    response.send(produto)
})

app.delete("/produtos/:id", (request, response, next) => {
    const produto = bancoDeDados.deleteProduto(request.params.id)
    response.send(produto)
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})