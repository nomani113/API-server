import express from 'express'
const app = express()
const port = process.env.PORT || 3000

let todos=[];

app.post('/todos', (req, res) => {
    todos.push(req.body.text);
  res.send('Hello World from abdullah computer!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})