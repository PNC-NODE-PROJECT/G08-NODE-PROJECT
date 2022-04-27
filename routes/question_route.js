const fs = require('fs');
const express = require('express');
let router = express.Router();
// const { v4: uuidv4 } = require('uuid');
const models_question = require('../models/question_models');

// question route
// get all the questions and answers
router.get('/', (req, res) => {
        models_question.questions_models.find()
            .then((result) => {
                res.send(result);
                console.log(result);
            })
            .catch((err) => {
                res.send(err)
                console.error(err)
            })
    })
    // create the question answers
router.post('/create', (req, res) => {
    console.log(req.body)
    models_question.questions_models.create(req.body)
        .then((result) => {
            res.send(result);
            console.log(result);
        })
        .catch((err) => {
            res.send(err)
            console.error(err)
        })
})
router.delete('/delete/:id', (req, res) => {
    models_question.questions_models.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.send(result);
            console.log(result);
        })
        .catch((err) => {
            res.send(err)
            console.error(err)
        })
})
router.put("/update/:id", (req, res) => {
    let data = req.body
    models_question.questions_models.updateOne({ _id: req.params.id }, data)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.send(err);
            console.error(err)
        })
})
module.exports = router;