let transactions =
[{nom_client:"ahmed" ,montant:30},
{nom_client:"ali" ,montant:400},   // tableau d'objet 
{nom_client:"hassan" ,montant:300},
{nom_client:"hussein" ,montant:200}
]  


function get_transactions (){      // fonction qui retourne toutes tranasaction 
       return transactions
}

function get_transaction(transaction_number) {   //  fonction qui retourne une transation selon l'id communiqué en parametre
       return transactions[transaction_number]
}

function new_transaction(customer_name, amount){       // fonction pour ajouter une transation
    let obj={nom_client:customer_name,
    montant:amount}
    return transactions.push(obj)
}
module.exports.get_transactions=get_transactions   // l'exportation des methodes
module.exports.get_transaction=get_transaction
module.exports.new_transaction=new_transaction
