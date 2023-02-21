const { response, request } = require('express')   // configuation du serveur local
const express = require('express')
const app = express()
const port = 9000
app.use(express.json())

let transact = require("./transaction") // importation du fichier javaScript  transaction
let transact_views = require("./src/views") // importation du fichier javaScript  views


app.get("/get-transactions", (request, response) => {     // endpoint avec  get pour afficher de toutes les transactions

           response.json( transact.get_transactions())
})


app.get("/get-transaction/:id", (request, response) => {   // endpoint avec  get pour afficher une transaction selon le parametre 
    
    response.json( transact.get_transaction(request.params.id))
})

app.post("/new-transaction",(request,response)=>{    // ajout d'une transaction avec la method post
    transact.new_transaction(request.body.nom_client,request.body.montant)
    response.json("ajout effectué")
})

app.get("/html/transaction/:id", (request, response) => { // endpoint avec  get pour afficher une transaction selon le parametre avec HTML
    let id =request.params.id
    let trans=transact.get_transaction(id)
    response.send(transact_views.displayTransaction(trans))
})

app.get("/html/all-transactions", (request, response) => {  // endpoint avec  get pour afficher toutes les  transaction  avec HTML
  let tran_html=transact.get_transactions()
  response.send(`<ul >${transact_views.displayAllTransactions(tran_html)}</ul>`)
})

app.listen(port, () => {  // un listener pour tester le serveur
  console.log(`Example app listening on port ${port}`)
})




