// enviroment process
require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// const PORT = 3000;
// app.use(cors({ origin: '*' })); // To allow any origin
app.use(express.urlencoded())
app.use(express.json());
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
})
let add_question_route = require("./routes/question_route");
app.use("/questions", add_question_route);