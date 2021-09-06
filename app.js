const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express()

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.locals.data1 = require("./stocklist1.json");

app.get("/", function(req, res) {
    res.render("index")
})
app.get("/chart", function(req, res) {
    res.render("chart")
})

app.listen(3000, function() {
    console.log("Successfully started the port on 3000")
})