const { request, response } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 3333
//Importar o módulo conn para as operações com o banco

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Middleware para arquivos estáticos

//Rota home ('/')
app.get('/', (request, response)=>{
  return response.render('home')
})

//Rota cadastro ('/cadastro')
app.post('/cadastro', (request, response) => {
  const {nome, categoria, descricao, preco, estoque } = request.body

  console.log(nome, categoria, descricao, preco, estoque)
  const sql = `insert into book (nome, categoria, descricao, preco, estoque) values (${nome}, ${categoria}, ${descricao}, ${preco}, ${estoque})`

    pool(sql,data, function(err){
      if(err){
          console.log(err)
      }
      response.redirect('/')
  })
})

app.get('/cadastro', (request, response) => {

  const sql = 'select * from book'

})

//Rota informação do livro ('/detalhes')
app.get('/detalhes', (request, response) => {
  return response.render('detalhes')
})

// Rota editar livro ('/atualizar')
app.get('/atualizar', (request, response) => {
  return response.render('atualizar')
})

//Rota livros disponiveis ('/estoque')
app.get('/estoque', (request, response) => {
  return response.render('estoque')
})

app.listen(PORT, ()=>{
  console.log(`Servidor rodando na porta ${PORT}`)
})

