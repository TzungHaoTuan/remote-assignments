const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "pug")

app.get('/', (req, res) => {
  res.send("Hello, My Server!")
})

//Assignment-3

app.use(express.static("public"))
app.post("/:sum.html", (req, res) => {
  
})

//Assignment-2

app.get('/:getData', (req, res) => {
    const getData = req.params.getData
    const number = req.query.number
    
    if(!number){
      res.send("Lack of Parameter")
    }else if(isNaN(parseInt(number)) ){
      res.send("Wrong Parameter")
    }else{
      let positiveInterger = parseInt(number)
      let total = (positiveInterger+1)*positiveInterger/2
      let output = total.toString()
      res.send(output)
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})