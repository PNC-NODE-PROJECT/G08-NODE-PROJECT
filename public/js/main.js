// import function hide, show
import { hide, show } from "../Utils/hide_show.js";
const url = "http://localhost:1000"
const main_container = document.querySelector(".home_page");
const add_container = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container_3 = document.querySelector(".container3");
const heading_3 = document.querySelector(".heading-3");
const paragraph = document.querySelector(".paragraph");
const btn_add_play = document.querySelector(".btn_add_play");
const modal_header = document.querySelector(".modal-header");
const modal_title = document.querySelector(".modal-title");
const all_input_question = document.getElementsByClassName("input");
const all_input_radio = document.getElementsByName("input");
const score_of_question = document.querySelector("#score_input");
const start_quiz = document.getElementById("start")
const dom_quiz = document.getElementById("quiz");
const play_view = document.getElementById("play_view")
let to_edit_questions = null;
let question = document.querySelector("#input_question");
let answers = document.querySelectorAll(".input");
let answers1 = document.getElementsByName("input");
let answers2 = document.getElementsByClassName("input");
let score_display = document.getElementById("score_p");
let dom_score = document.querySelector("#score_display");
dom_score.appendChild(score_display);
let scores = document.querySelector("#score_input");
let all_answers = [];
let current_question_index = 0;
let score = 0;
let btn_nav_play = document.querySelector(".btn_nav_play");
let view_list_question = document.querySelector(".view_list_question");
const dom_question = document.getElementById("question")

// function to add question
function add_question(e) {
    e.preventDefault(e);
    // var question = document.querySelector("#input_question");
    // var answers = document.querySelectorAll(".input");
    let score_input = scores.value
        // let score = document.querySelector("#score");
    let question_text = question.value;
    let body = { question: question_text, answers: all_answers, score: score_input };
    answers.forEach(answer => {
        let object_answers = {}
        object_answers.answer = answer.value;
        let radio = answer.previousElementSibling;
        if (radio.checked) {
            object_answers.correct_answer = true;
        }
        all_answers.push(object_answers);
    })
    console.log(all_answers)
    if (question.value !== "" && all_answers.answer !== "") {
        axios.post(url + "/questions/create", body)
            .then((result) => {
                display_question()
            })
    } else {
        confirm("You cannot add the question.")
    }
}
// function to show add question
function refresh_question(all_data) {
    while (container2.firstChild) {
        container2.removeChild(container2.lastChild);
    }
    for (let i = 0; i < all_data.length; i++) {
        let main_container = document.createElement('div');
        main_container.className = 'main_container1';
        let question_and_button = document.createElement('div');
        question_and_button.className = 'question_and_button';
        let question = document.createElement('div');
        question.className = 'question';
        question.textContent = all_data[i].question;
        let score_show = document.createElement('p');
        score_show.textContent = all_data[i].score + "pts";
        let answer = document.createElement('div');
        answer.className = 'answer_to_display';
        let answer_1 = document.createElement('div');
        answer_1.className = 'answer_1';
        answer_1.textContent = all_data[i].answers[0].answer;
        if (all_data[i].answers[0].correct_answer == true) {
            answer_1.style.background = "blue";
        } else {
            answer_1.style.background = "red";
        }
        let answer_2 = document.createElement('div');
        answer_2.className = 'answer_2';
        answer_2.textContent = all_data[i].answers[1].answer;
        if (all_data[i].answers[1].correct_answer == true) {
            answer_2.style.background = "blue";
        } else {
            answer_2.style.background = "red";
        }
        let answer_3 = document.createElement('div');
        answer_3.className = 'answer_3';
        answer_3.textContent = all_data[i].answers[2].answer;
        if (all_data[i].answers[2].correct_answer == true) {
            answer_3.style.background = "blue";
        } else {
            answer_3.style.background = "red";
        }
        let answer_4 = document.createElement('div');
        answer_4.className = 'answer_4';
        answer_4.textContent = all_data[i].answers[3].answer;
        if (all_data[i].answers[3].correct_answer == true) {
            answer_4.style.background = "blue";
        } else {
            answer_4.style.background = "red";
        }
        answer.append(answer_1);
        answer.append(answer_2);
        answer.append(answer_3);
        answer.append(answer_4);
        let div_button = document.createElement('div');
        div_button.className = 'button';
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');

        let button_edit = document.createElement('div');
        button_edit.id = all_data[i]._id;
        button_edit.className = 'btn_edit';
        let img_edit = document.createElement('i');
        img_edit.className = 'fa fa-edit';
        img_edit.setAttribute("data-toggle", "modal");
        img_edit.setAttribute("data-target", "#myModal");
        img_edit.addEventListener("click", click_on_edit_question);

        img_edit.id = all_data[i]._id;
        button_edit.appendChild(img_edit);

        let button_delete = document.createElement('div');
        button_delete.id = all_data[i]._id
        button_delete.className = 'btn_delete';
        let img_delete = document.createElement('i');
        img_delete.className = "fa fa-trash-o ";
        button_delete.appendChild(img_delete);
        button1.appendChild(button_edit);
        button2.appendChild(button_delete);
        div_button.appendChild(button1);
        div_button.appendChild(button2);
        div_button.appendChild(score_show)
        question_and_button.appendChild(question);
        question_and_button.appendChild(div_button);
        main_container.appendChild(question_and_button);
        main_container.appendChild(answer);
        container2.append(main_container);
    }
    container2.parentElement.appendChild(container2)
}
// function to display the question
function display_question(e) {
    hide(heading_3);
    hide(paragraph);
    hide(btn_add_play);
    hide(main_container)
    axios.get(url + "/questions/").then((result) => {
        console.log(result.data)
            // TODO: request tasks from server and update DOM
        refresh_question(result.data);
    })
    show(container2);
    // show(btn_nav_play)
    // hide(play_view)
}
// function view list the questions 
function view_list_of_questions() {
    axios.get(url + "/questions/").then((all_data) => {
            console.log(all_data.data)
                // while (view_list_of_questions.firstChild) {
                //     view_list_of_questions.removeChild(view_list_of_questions.firstChild);
                // }
            for (let i = 0; i < all_data.data.length; i++) {
                let main_container = document.createElement('div');
                main_container.className = 'main_container1';
                let question_and_button = document.createElement('div');
                question_and_button.className = 'question_and_button';
                let question = document.createElement('div');
                question.className = 'question';
                question.textContent = all_data.data[i].question;
                let score_show = document.createElement('p');
                score_show.textContent = all_data.data[i].score + "pts";
                let answer = document.createElement('div');
                answer.className = 'answer_to_display';
                let answer_1 = document.createElement('div');
                answer_1.className = 'answer_1';
                answer_1.textContent = all_data.data[i].answers[0].answer;
                if (all_data.data[i].answers[0].correct_answer == true) {
                    answer_1.style.background = "blue";
                } else {
                    answer_1.style.background = "red";
                }
                let answer_2 = document.createElement('div');
                answer_2.className = 'answer_2';
                answer_2.textContent = all_data.data[i].answers[1].answer;
                if (all_data.data[i].answers[1].correct_answer == true) {
                    answer_2.style.background = "blue";
                } else {
                    answer_2.style.background = "red";
                }
                let answer_3 = document.createElement('div');
                answer_3.className = 'answer_3';
                answer_3.textContent = all_data.data[i].answers[2].answer;
                if (all_data.data[i].answers[2].correct_answer == true) {
                    answer_3.style.background = "blue";
                } else {
                    answer_3.style.background = "red";
                }
                let answer_4 = document.createElement('div');
                answer_4.className = 'answer_4';
                answer_4.textContent = all_data.data[i].answers[3].answer;
                if (all_data.data[i].answers[3].correct_answer == true) {
                    answer_4.style.background = "blue";
                } else {
                    answer_4.style.background = "red";
                }
                answer.append(answer_1);
                answer.append(answer_2);
                answer.append(answer_3);
                answer.append(answer_4);
                let div_button = document.createElement('div');
                div_button.className = 'button';

                div_button.appendChild(score_show)
                question_and_button.appendChild(question);
                question_and_button.appendChild(div_button);
                main_container.appendChild(question_and_button);
                main_container.appendChild(answer);
                view_list_question.append(main_container);
            }
        })
        // show(btn_nav_create)
    hide(main_container);
    hide(container_3)
    hide(btn_nav_view)
        // view_list_question.parentElement.appendChild(view_list_question)
}
// function to edit question
function click_on_edit_question(e) {
    modal_title.textContent = "Edit question";
    modal_header.style.background = "#00bfff";
    to_edit_questions = e.target.parentElement.id;
    if (to_edit_questions !== null) {
        axios.get(url + "/questions/").then((result) => {
            let all_questions = result.data;
            for (let data_all_question of all_questions) {
                // to check if id of  button edit equal to id of question
                if (to_edit_questions == data_all_question._id) {
                    document.querySelector("#input_question").value = data_all_question.question
                    for (let k = 0; k < all_input_question.length; k++) {
                        all_input_question[k].value = data_all_question.answers[k].answer;
                    }
                    for (let t = 0; t < all_input_radio.length; t++) {
                        if (data_all_question.answers[t].correct_answer == true) {
                            all_input_radio[t].checked = true;
                        }
                    }
                    console.log(score_of_question)
                    score_of_question.value = data_all_question.score;
                }
            }
        })
    }
}

function edit_question(e) {
    let body = { question: question.value, answers: all_answers, score: scores.value };
    e.preventDefault();
    // to check the form
    for (let k = 0; k < all_answers.length; k++) {
        all_answers[k].answer = answers2[k].value;
        if (answers1[k].checked) {
            all_answers[k].correct_answer = true;
        } else {
            all_answers[k].correct_answer = false;
        }
    }
    axios.put(url + '/questions/update/' + to_edit_questions, body).then((result) =>
        display_question())
}

function is_submitted(e) {
    if (to_edit_questions == null) {
        add_question(e)
    } else {
        edit_question(e)
    }
}
// function to delete a question
function click_delete(e) {
    e.preventDefault();
    let id = e.target.parentElement.id;
    if (e.target.parentElement.className == "btn_delete") {
        let isExecuted = confirm("Are you sure to delete this task?");
        if (isExecuted) {
            axios.delete(url + "/questions/delete/" + id).then(display_question())
        }
    }
}
// function play quiz
function play_quiz() {
    show(container_3)
    hide(main_container)
    view_list_question.style.display = 'none';
    hide(btn_nav_view)
    show(add_container)
    hide(container2)
}

//render question
function render_question() {
    // get_data_to_play_quiz();
    axios.get(url + "/questions/").then((result) => {
        // move();
        let data_1 = result.data[current_question_index];
        while (dom_quiz.firstChild) {
            dom_quiz.removeChild(dom_quiz.lastChild)
        }

        if (current_question_index < result.data.length) {
            dom_question.textContent = data_1.question;
            dom_quiz.appendChild(dom_question)
            const choice = document.createElement("div");
            choice.id = "choices";
            for (let i = 0; i < data_1.answers.length; i++) {
                let button_answer = document.createElement('button');
                if (data_1.answers[i].correct_answer == true) {
                    button_answer.id = "true";
                } else {
                    button_answer.id = "false";
                }
                button_answer.textContent = data_1.answers[i].answer
                button_answer.addEventListener("click", return_the_value)
                choice.appendChild(button_answer)
                dom_quiz.appendChild(choice)
            }
            let dom_num_of_question = document.createElement("div");
            let num_of_questions_bar = current_question_index + 1 + "/" + result.data.length + "questions"
            dom_num_of_question.textContent = num_of_questions_bar;
            dom_quiz.appendChild(dom_num_of_question)
        } else {
            hide(dom_quiz)
        }
    })
}
// function_click_start
start_quiz.addEventListener("click", (event) => {
    hide(start_quiz);
    show(dom_quiz);

    // 2- Reset the question index to 0
    current_question_index = 0;

    // 2 - Render the first question
    render_question();
});
// return_the_value
function return_the_value(e) {
    check_all_answer(e.target.textContent)
}
// check_answer
function check_all_answer(answer) {
    axios.get(url + "/questions/").then((result) => {
        let data = result.data[current_question_index].answers;
        for (let k = 0; k < data.length; k++) {
            if (data[k].correct_answer == true) {
                if (data[k].answer == answer) {
                    score += result.data[current_question_index].score;
                }
            }
        }
        if (current_question_index < result.data.length - 1) {
            current_question_index += 1;
            render_question();
        } else {
            view_score()
        }
    })
}
// function view score
function view_score() {
    hide(dom_quiz)
    show(dom_score)
    axios.get(url + "/questions/").then((result) => {
        score_display.textContent = "Your scores" + " : " + score;
    })
}


let btn_add_questions = document.querySelector("#add_questions");
btn_add_questions.addEventListener("click", is_submitted);
let btn_play_quiz = document.querySelector("#play_quiz");
btn_play_quiz.addEventListener("click", play_quiz);

btn_nav_play.addEventListener("click", play_quiz);
let btn_nav_view = document.querySelector(".btn_nav_view");
btn_nav_view.addEventListener("click", view_list_of_questions)
container2.addEventListener("click", click_delete);
container2.addEventListener("click", click_delete);