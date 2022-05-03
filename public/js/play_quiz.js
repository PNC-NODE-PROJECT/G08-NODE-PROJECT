
const url = "http://localhost:1000";
const dom_question = document.getElementById("question")
const dom_choiceA = document.getElementById("A");
const dom_choiceB = document.getElementById("B");
const dom_choiceC = document.getElementById("C");
const dom_choiceD = document.getElementById("D");
let currentQuestionIndex = 0;

function checkAnswer(choice) {
    // axios.get(url + "/questions/").then((result) => {
    //     console.log(result.data)
    //     dom_question.textContent = result.data[currentQuestionIndex].question
    //     console.log(dom_question.textContent)
    //     dom_choiceA.textContent = result.data[currentQuestionIndex].answers[0].answer;
    //     console.log(dom_choiceA.textContent)
    //     dom_choiceB.textContent = result.data[currentQuestionIndex].answers[1].answer;
    //     console.log(dom_choiceB.textContent)
    //     dom_choiceC.textContent = result.data[currentQuestionIndex].answers[2].answer;
    //     console.log(dom_choiceC.textContent)
    //     dom_choiceD.textContent = result.data[currentQuestionIndex].answers[3].answer;
    //     console.log(dom_choiceD.textContent)
    //     console.log(result.data[0].answers[0].correct_answer)
    //     if (true == result.data[0].answers[0].correct_answer ||
    //         true == result.data[2].answers[1].correct_answer ||
    //         true == result.data[3].answers[2].correct_answer ||
    //         true == result.data[currentQuestionIndex].answers[3].correct_answer) {
    //         console.log("so score");
    //     }
    //     if (currentQuestionIndex < result.data.length - 1) {
    //         currentQuestionIndex += 1
    renderQuestion()
        //     }
        //     // for (let i = 0; i < result.data.length; i++)
        //     //     console.log(result.data[currentQuestionIndex].answers[currentQuestionIndex].correct_answer)
        //     // if (choice === result.data[currentQuestionIndex]) {
        //     //     score += 1;
        //     // }
        //     // console.log(question)
        //     // console.log(question.correct)
        //     // console.log(choice)
        //     // if (currentQuestionIndex < questions.length - 1) {
        //     //     // Go to the next question
        //     //     currentQuestionIndex += 1;

    //     //     // Render the nex quesiton
    //     //     renderQuestion();
    //     // } else {
    //     //     // display score
    //     //     showScore();
    //     // }
    // })
    alert(choice);
}

