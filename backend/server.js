const express = require("express");
var cors = require('cors')
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


// Create index for full text search

Recipe.collection.createIndex({
    "soupName": "text"
})

// Search using $regex

app.post("/recipes-list-search", (req, res) => {

    Recipe.find({
            "ingredientsArray.ingredientName": {
                $regex: req.body.search,
                $options: "i"
            }
        })
        .then((result) => {
            res.send(result)
        })



})






app.post("/recipes-list-search-many", (req, res) => {


    const queryArray = []

    const regex = req.body.search.map((soup) => {
        queryArray.push(new RegExp(soup, "i"))


    });

    Recipe.find({
            "ingredientsArray.ingredientName": {
                $in: queryArray,


            }
        })
        .then((result) => {
            res.send(result)


        })


})


//  Recipes list ( limit to  first document)

app.get("/recipes-list", (req, res) => {
    Recipe.find({}).limit(1)
        .then((result) => {
            res.send(result)
        })

})


//  Recipes list (add more docs to display list)


app.get("/recipes-limited-list", (req, res) => {

    const page = req.query.page || 0
    const recipesPerPage = 2



    Recipe.find({}).limit(recipesPerPage * page)


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
            console.log(result)
        })

})