const express = require('express')
const app = express()
const API_NOTE = "/api/note"

app.use(express.json())
app.use(express.urlencoded({extended:true}))

var dados = [{
	"ID": 2,
	"Usuario": "ViVieira",
	"Titulo": "Jogos",
	"Conteudo": "Jogo de futebol",
	"Data": "2021-08-14T00:00:00.000Z"
},{
	"ID": 2,
	"Usuario": "ViVieira",
	"Titulo": "Jogos",
	"Conteudo": "Jogo de futebol",
	"Data": "2021-08-14T00:00:00.000Z"
},{
	"ID": 2,
	"Usuario": "ViVieira",
	"Titulo": "Jogos",
	"Conteudo": "Jogo de futebol",
	"Data": "2021-08-14T00:00:00.000Z"
}]


app.get(API_NOTE, function (req, res, next) {
    let jsonDados = JSON.stringify(dados) 
    res.send(jsonDados);
    next()
 })

 app.post(API_NOTE, function (req, res, next) { // adicionar
     //let nome = req.query.nome;
     let note = JSON.stringify(req.body);
     console.debug(note)
     res.send(note)
    // res.send(` E aí Mano? ${nome}`);
    next()
 })

 app.delete(API_NOTE, function (req, res, next){
     let id = req.query.id
     res.send(`Item deletado: ${id}`)
     next()

 })
 
 app.post(`${API_NOTE}/Criar`, function (req, res, next) { // adicionar
    let note = JSON.stringify(req.body);
    console.debug(note)
    res.send(` Esses são meus dados: ${note}`)
   next()
})

app.put(API_NOTE, function (req, res, next){

})

app.listen(3000,() => {
    console.debug('Ouvindo a porta 3000');
})



console.log("Hello World")

// retornar a mensagem e a data da execução atual
//datetimenow date()