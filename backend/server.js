const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const Recipe = require("../backend/models/Recipe");



require('dotenv').config()

const app = express()
app.use(cors())




const dbURI = process.env.DBURI

mongoose.connect(dbURI)
    .then(app.listen(4444, () => {

        console.log(" DB connected, Server running")

    }))
    .catch((err) => console.log(err))

const db = mongoose.connection;
app.use(express.static('public'))

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());

// Add recipe

app.post("/user/add-recipe", (req, res) => {
    const userRecipe = new Recipe(req.body);
    userRecipe.save()


})




//  Recipes list 

app.get("/recipes-list", (req, res) => {
    Recipe.find({})
        .then((result) => {
            res.send(result)
        })

})

//  Recipe by ID

app.post("/recipe", (req, res) => {


    Recipe.find({
            "_id": req.body.id
        })

        .then((result) => {
            res.send(result)

        })

        .catch((error) => res.send(error))

})