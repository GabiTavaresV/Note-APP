const express = require('express')
const app = express()

app.get('', function (req, res, next) {
    res.send(' Hello World');
    next()
 })

 app.post('', function (req, res, next) {
     let nome = req.query.nome;
     let note = JSON.stringify(req.body);
     console.debug(note)
     res.send(note)
    // res.send(` E aí Mano? ${nome}`);
    next()
 })

app.listen(3000,() => {
    console.debug('Ouvindo a porta 3000');
})



console.log("Hello World")

// retornar a mensagem e a data da execução atual
//datetimenow date()