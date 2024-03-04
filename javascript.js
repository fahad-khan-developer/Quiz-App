const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?" ,
        answers: [
            {text: "< Javascript >" , correct: false},
            {text: "< script >" , correct: true},
            {text: "< js >" , correct: false},
            {text: "< scription >" , correct: false},
        ]
    },
    {
        question: "Where is the correct place to insert a JavaScript?" ,
        answers: [
            {text: "Both the < head > section and the < body > are corret" , correct: true},
            {text: "The < head > section" , correct: false},
            {text: "The < body > section " , correct: false},
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called xxx.js?" ,
        answers: [
            {text: "< script href =xxx.js >" , correct: false},
            {text: "< script name =xxx.js >" , correct: false},
            {text: "< script src =xxx.js >" , correct: true},
        ]
    },
    {
        question: "The external JavaScript file must contain the < script > tag ?" ,
        answers: [
            {text: "Yes" , correct: false},
            {text: "No" , correct: true},
        ]
    },
    {
        question: "How do you write Hello World in an alert box?" ,
        answers: [
            {text: "msgBox(Hello World);" , correct: false},
            {text: "msgBox(' Hello World ');"  , correct: true},
            {text: "msgBox(Hello World);"  , correct: false},
            {text: "msgBox(Hello World);"  , correct: false},
        ]
    },

    {
        question: "How do you create a function in JavaScript?" ,
        answers: [
            {text: "function myFunction()" , correct: true},
            {text: "function:myFunction()" , correct: false},
            {text: "function = myFunction()" , correct: false},
        ]
    },
    {
        question: "How do you call a function named myFunction?" ,
        answers: [ 
            {text: "myFunction()" , correct: true},
            {text: "call function myFunction()" , correct: false},
            {text: "call myFunction" , correct: false},
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?" ,
        answers: [
            {text: "if i = 5 then" , correct: false},
            {text: "if i = 5" , correct: false},
            {text: "if (i==5)" , correct: true},
            {text: "if i == 5" , correct: false},
        ]
    },
    {
        question: "How to write an IF statement for executing some code if i  is NOT equal to 5?        ?" ,
        answers: [
            {text: "if i =! 5 then" , correct: false},
            {text: "if (i != 5)" , correct: true},
            {text: "if i < > 5" , correct: false},
            {text: "if (i < > 5)" , correct: false},
        ]
    },
    {
        question: "How can you add a comment in a JavaScript?" ,
        answers: [
            {text: "< !--- This is a comment -- >" , correct: false},
            {text: "//This is a comment" , correct: true},
            {text: "'This is a comment" , correct: false},
        ]
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?" ,
        answers: [
            {text: "Math.rnd(7.25)" , correct: false},
            {text: "round(7.25)" , correct: false},
            {text: "Math.round(7.25)" , correct: true},
            {text: "rnd(7.25)" , correct: false},
        ]
    },
    {
        question: "How do you find the number with the highest value of x and y?" ,
        answers: [
            {text: "ceil(x ,y)" , correct: false},
            {text: "top(x , y)" , correct: false},
            {text: "Math.max(x , y)" , correct: true},
            {text: "Math.ceil(x , y)" , correct: false},
        ]
    },
    {
        question: "JavaScript is the same as Java?" ,
        answers: [
            {text: "Yes" , correct: false},
            {text: "No" , correct: true},
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?" ,
        answers: [
            {text: "onchange" , correct: false},
            {text: "onmouseover" , correct: false},
            {text: "onclick" , correct: true},
            {text: "onmouseclick" , correct: false},
        ]
    },
    {
        question: "How do you declare a JavaScript variable?" ,
        answers: [
            {text: "variable carName;" , correct: false},
            {text: "let carName;" , correct: true},
            {text: "v carName;" , correct: false},
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable",
        answers: [
            {text: " x " , correct: false},
            {text: " = " , correct: true},
            {text: " - " , correct: false},
            {text: " * " , correct: false},
        ]
    },
    {
        question: "What will the following code return: Boolean(10 > 9)?" ,
        answers: [
            {text: "NaN" , correct: false},
            {text: "false" , correct: false},
            {text: "true" , correct: true},
        ]
    },
    {
        question: "Is JavaScript case-sensitive??" ,
        answers: [
            {text: "No" , correct: false},
            {text: "Yes" , correct: true},
            {text: "Both of them" , correct: false},
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?" ,
        answers: [
            {text: "var colors = [red, green, blue] " , correct: true},
            {text: "var colors = red, green, blue" , correct: false},
            {text: "var colors = 1 = red, 2 = green, 3 = blue" , correct: false},
        ]
    },
    {
        question: "How can you detect the client's browser name?" ,
        answers: [
            {text: "navigator.appName" , correct: true},
            {text: "client.navName" , correct: false},
            {text: "browser.name" , correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
       button.classList.add("btn");
       answerButtons.appendChild(button);  
       if(answer.correct){
        button.dataset.correct = answer.correct;
       }
       button.addEventListener('click' , selectAnswer);
    });
}

function   resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
const slelectBtn = e.target;
const isCorrect = slelectBtn.dataset.correct === 'true'

if(isCorrect){
  slelectBtn.classList.add("correct")
  score++;
   }
   else{
   slelectBtn.classList.add("incorrect")
   }

   Array.from(answerButtons.children).forEach(button => {

    if(button.dataset.correct === "true"){
        button.classList.add("correct")
    }
    button.disabled = true;
   });
   nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again"
    nextButton.style.display = "block"

    if(score >= 13){
        alert("Wow your javascript is Very Strong")
    }
    else{
        alert("oops! your Javascript is very week please prcactice again and again")
    }
}


function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
    showQuestion();
}
else{
    showScore();
}
}

nextButton.addEventListener("click" ,()=>{
    if(
        currentQuestionIndex < questions.length
    ){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();
