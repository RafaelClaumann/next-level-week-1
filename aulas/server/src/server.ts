import express from 'express'

const app = express()

const users = [
  {
    nome: 'rafael',
    email: 'rafael@email.com.br'
  },
  {
    nome: 'douglas',
    email: 'douglas@email.com.br'
  },
  {
    nome: 'guilherme',
    email: 'guilherme@email.com.br'
  }
]

// GET: http://localhost:3333/users => retornar uma lista de usuarios.
// GET: http://localhost:3333/users/1 => retornar um de usuario com id = 1.

// retorna a lista de usuarios completa
app.get('/users', (request, response) => {
  return response.json(users)
})

// :id em '/users/:id' é o parametro da rota chamado.
// request.params.id usado para acessar os parametros da rota, id neste caso.
// id é recebido como uma string '1' ou '2' etc.
// id é usado como indice do array por isso é convertido em numero.
// localhost:3333/0 retorna {name: 'rafael', email: 'rafael@email.com.br'}
app.get('/users/:id', (request, response) => {
  var id = Number(request.params.id)
  return response.json(users[id])
})

app.listen(3333, () => { console.log('🚀 !backend iniciado! 🚀') })