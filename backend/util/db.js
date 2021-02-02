const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo:27017/paleopinoy", {
  user: "root",
  pass: "root",
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", function () {
  console.log("Connection Successful!");

  // define Schema
  var RecipeSchema = mongoose.Schema({
    name: String,
    ingredients: [
      {
        amount: Number,
        measurement: String,
        ingredientName: String,
      },
    ],
    steps: [
      {
        stepId: Number,
        step: String,
      },
    ],
    notes: [String],
    rating: Number,
  });

  // compile schema to model
  var Recipe = mongoose.model("Recipes", RecipeSchema, "recipes");

  // a document instance
  var recipe1 = new Recipe({
    name: "cool recipe",
    ingredients: [
      {
        amount: 1,
        measurement: "tso",
        ingredientName: "food",
      },
    ],
    steps: [
      {
        stepId: 1,
        step: "cook",
      },
    ],
    notes: ["idk"],
    rating: 10,
  });

  // save model to database
  recipe1.save(function (err, recipe) {
    if (err) return console.error(err);
    console.log(recipe.name + " saved to recipe collection.");
  });
});
