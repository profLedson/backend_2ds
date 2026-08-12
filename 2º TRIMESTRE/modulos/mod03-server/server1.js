const http = require('node:http')
const path  = require('node:path')
const fs = require('node:fs')
const porta = 8005
// Carrega o caminho dos arquivos
const home = path.join(__dirname, 'pages/index.html')
const sobre = path.join(__dirname, 'pages/sobre.html')

const server = http.createServer((req, res) => {
  // qual informação eu tenho?
  const urlTratada = new URL(req.url, `http://${req.headers.host}`)//limpeza de URL
  const recurso = urlTratada.pathname  // em qual rota estamos?

  if (recurso === '/') { // Página inicial
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    return res.end(fs.readFileSync(home, 'utf-8'))

  } if (recurso === '/sobre') { // Sobre nós
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    return res.end(fs.readFileSync(sobre, 'utf-8'))
  }  else {
    res.statusCode = 401
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('401 Não Autorizado')
  }
})

server.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`)
})