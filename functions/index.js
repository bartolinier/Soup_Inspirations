const functions = require("firebase-functions");

const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const recipeSchema = new Schema({

    soupName: {
        type: String,
        require: true,
        index: true
    },
    preparationTime: {
        type: Number,
        require: true
    },
    vegetarian: {
        type: Boolean,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    steps: {
        type: String,
        require: true
    },
    tips: {
        type: String,
        require: true
    },
    ingredientsArray: [{
        ingredientId: Number,
        ingredientName: String,
        ingredientQuantity: String,
        ingredientUnit: String
    }],
    userID: {
        type: String,
        require: true
    },
    vegetarian: {
        type: Boolean,
        require: true
    }
}, {
    timestamps: true
});

const Recipe = mongoose.model('Recipe', recipeSchema)



require('dotenv').config()

const app = express()
app.use(cors())




const dbURI = process.env.DBURI

mongoose.connect(dbURI)

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


app.get("/test", (req, res) => {


    res.send("OK")

})


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app)