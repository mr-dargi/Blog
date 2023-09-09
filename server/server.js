const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");


// Create express app
const app = express();


// Connect to mongodb and also Listening on port 8000
const dbURI = "mongodb://localhost:22017/blogPosts";
mongoose.connect(dbURI)
  .then(
    // Listening on port 8000
    app.listen(8000, () => {
      console.log("listen on port 8000")
    })
  )
  .catch(err => {
    console.log(err);
  })

// Middleware
app.use(morgan("dev"));

// Blog posts
app.get("/post", (req, res) => {

})