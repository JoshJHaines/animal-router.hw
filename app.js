const express = require("express")
const path = require("path")
const logger = require("morgan");

const app = express()

console.log(__dirname)
console.log(path.join(__dirname, "views"))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

//tells app to use logger/morgan
app.use(logger("combined"));

const PORT = process.env.PORT || 3000

app.get("/", function(req, res){
    res.render("index")
})

app.listen(PORT, function(){
    console.log(`Server is now running on PORT: ${PORT}`)
})