const { indexOf } = require("lodash")

function displayTransaction(transaction){ // fonction qui retourne  une transaction selon le parametre avec HTML
    return `<h1>${transaction.nom_client} ${transaction.montant}</h1>`
}

function displayAllTransactions(transactions) {   // fonction qui retourne la liste des transaction en hypertext HTML
            
   let items = transactions.map((transaction)=>         
    `<li>
        <a href="http://localhost:9000/html/transaction/${transactions.indexOf(transaction)}" " target="_blank" >
            ${transaction.nom_client} ${transaction.montant}
        </a>
    </li>`
   
    )
return items
   

}   



module.exports.displayTransaction=displayTransaction
module.exports.displayAllTransactions=displayAllTransactions