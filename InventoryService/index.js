const express = require('express')

const app = express()

app.get('/api/invoices/:id', (req, res) => {
  const id = parseInt(req.params.id)
  res.json({
    id: id,
    ref: `INV-${id}`,
    amount: id * 100,
    balance: id * 100 - 10
  })
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Invoice service running on ${port}`)
})