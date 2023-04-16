const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "pug")

//Assignment-2

app.get('/', (req, res) => {
  res.send("Hello, My Server!")
})
// app.get('/:getData', (req, res) => {
//     const getData = req.params.getData
//     const number = req.query.number

//     if(!number){
//         res.send("Lack of Parameter")
//     }else if(Number(number) > 0){ // && Number.isInterger(number)
//         let total = (Number(number) +1) * Number(number) /2
//         res.send("" + total)
//     }else{
//         res.send("Wrong Parameter")
//     }
// })

//Assignment-3

app.use(express.static("./public"))
app.post("/sum", (req,res) => {
    let number = req.query.number
    const button = document.querySelector("#button")
    button.addEventListener("click", (number) => {
        (number+1)*number/2
    })
    res.send(number)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})