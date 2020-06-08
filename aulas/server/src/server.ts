import express from 'express'
import routes from './routes'
import path from 'path'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())  // express passa a entender RequestBody em formato JSON
app.use(routes)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333, () => { console.log('🚀 !backend iniciado! 🚀') })
