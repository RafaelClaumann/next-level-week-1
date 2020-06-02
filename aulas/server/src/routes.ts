import express from 'express'

const routes = express.Router()
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

// GET: .../users => retorna uma lista de users.
// GET: .../users/filter?nome=rafael => retorna users com nome rafael.
// GET: .../users/1 => retorna users[1].
// POST:.../users/ cobody={nome:'user', email:'user@email.com} => adiciona user a users.

// retorna a lista de usuarios completa
routes.get('/users', (request, response) => {
  return response.json(users)
})

// Espera um query param chamado nome.
// request.query usado para acessar query params, nome neste caso.
// Função filter do javascript filtra os users com nome rafael.
// .../users/filter?nome=rafael => users[0].
routes.get('/users/filter', (request, response) => {
  if (request.query.nome) {
    var filtered = users.filter(user => user.nome == request.query.nome)
    return filtered.length != 0 ?
      response.json(filtered) :
      response.json(`No users were found with the name '${request.query.nome}'`)
  }
  return response.json('No QueryParam found!')
})

// :id em '/users/:id' é o parametro da rota chamado id.
// request.params usado para acessar os parametros da rota, id neste caso.
// id é recebido como uma string '1' ou '2' etc.
// id é usado como indice do array por isso é convertido em numero.
// localhost:3333/0 => users[0]
routes.get('/users/:id', (request, response) => {
  var id = Number(request.params.id)
  return response.json(users[id])
})

// Espera um objeto JSON no request body com o seguinte formato:
// {nome: 'user', email: 'user@email.com.br'}
// Adiciona o novo objeto no array users com o push do javascript.
routes.post('/users', (request, response) => {
  users.push({ nome: request.body.nome, email: request.body.email })
  return response.json(users)
})

export default routes
