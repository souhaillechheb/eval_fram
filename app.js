const { response, request } = require('express')
const express = require('express')
const app = express()
const port = 2000
//let transact = require("./transaction.js")
import { transactions } from './transaction.js'

console.log(transactions)

/*
app.get("/get-transactions", (request, response) => {
    
        response.send(transact.get_transactions(transact.transactions))
  })*/





  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })