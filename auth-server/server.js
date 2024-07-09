const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//parse requests of content-type json
app.use(express.json());

//parse requests of content-type urlencoded
app.use(
    cookieSession({
        name: "journal-session",
        keys: ["COOKIE_SECRET"], //secret env variable
        httpOnly: true
    })
);

app.get("/", (req, res) => {
    res.json({message: "Welcome to Alexie's Journal"});
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});