import express from 'express'
import routes from './routes'

const app = express()
app.use(express.json())  // express passa a entender RequestBody em formato JSON
app.use(routes)

app.listen(3333, () => { console.log('🚀 !backend iniciado! 🚀') })
