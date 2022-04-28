
function addQuestion(event){
    event.preventDefault();
    // let title = document.querySelector("title");
    let question = document.querySelector("question").value;
    let answer1 = document.getElementsByClassName("answer1").value;
    let answer2 = document.getElementsByClassName("answer2").value;
    let answer3 = document.getElementsByClassName("answer3").value;
    let answer4 = document.getElementsByClassName("answer4").value;

    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);

    let arrayAnswer = [answer1, answer2, answer3, answer4];

    // let questions = {
    //     "question": question,
    //     "answers": arrayAnswer
    // }

    let questions = {
        "question": question,
        "answers": arrayAnswer
    }
    
    axios.post("http://localhost:1000/question", questions)
    .then((response) => {
        console.log("add success")
    })
    .catch((error) => {
        console.log("error")
    })
}

function display_questions(questions) {
    let display_container = document.createElement("div");
    display_container.className = "container";

    
    let each_question = document.createElement("div");
    each_question.className = "question";

    let ques = document.createElement("div");
    ques.className = "ques";
    let h3 = document.createElement("h3");
    h3.textContent = "What is google ";
    ques.appendChild(h3);

    let edit_ques = document.createElement("div");
    edit_ques.className = "edit";
    let img_edit = document.createElement("img");
    img_edit.src =".images/";
    edit_ques.appendChild(img_edit);


    let delete_ques = document.createElement("div");
    delete_ques.className = "delete";
    let img_delete = document.createElement(".images/");
    img_delete.src = "images/";
    delete_ques.appendChild(img_delete);

    each_question.appendChild(ques);
    each_question.appendChild(edit_ques);
    each_question.appendChild(delete_ques);


    display_container.appendChild(each_question)
    document.body.appendChild(display_container)
}


let add_question = document.querySelector("#add");
add_question.addEventListener("click",display_container())


