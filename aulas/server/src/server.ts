import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ mensagem: 'Hello World' })
})

app.listen(3333, () => { console.log('🚀 !backend iniciado! 🚀') })