const mongoose = require('mongoose')
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

module.exports = Recipe