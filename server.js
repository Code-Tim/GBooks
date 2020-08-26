const express = require("express");
const path = require("path");
const { default: Axios } = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios")
require("dotenv").config()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/googs/:sTerm", async (req, res) => {
    console.log("GOOG IT: ", req.params.sTerm)
    const { sTerm } = req.params
    //make a google books api call
    let googStuff = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${sTerm}&key=${process.env.GOOGS_KEY}`)
    console.log(googStuff)
    let { data } = googStuff
    res.json({ nice: true, data })
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
