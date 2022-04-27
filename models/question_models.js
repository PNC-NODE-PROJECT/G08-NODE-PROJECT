const mongoose = require('mongoose');
// connect to mongodb server
mongoose.connect("mongodb://localhost:27017/quiz_app_g08", { useUnifiedTopology: true });
//check if connection is successfull
const db = mongoose.connection;
db.on("error", console.error.bind(console,
    db.once("open", function() {
        console.log("Connected successfully");
    })
));
// schema of questions 
const questions_schema = new mongoose.Schema({
        question: {
            type: String,
            required: true
        },
        answers: {
            type: Array,
            required: true
        }
        // correct_answer: {
        //     type: String,
        //     required: true
        // },
        // score: {
        //     type: Number,
        //     required: true
        // }
    })
    //  create collection 
const questions_models = mongoose.model('add_questions', questions_schema);
module.exports.questions_models = questions_models;