// importação moderna com ESM (import)
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Home Ok!')
})
app.get('/roupas', (req, res) => {
    res.send('Minha roupa de sair...!')
})

app.listen(3000, ()=> {console.log('Servidor está vivo!')})