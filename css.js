const questions = [
    {
        question: "Css Stands for?" ,
        answers: [
            {text: "Castle Styling slide" , correct: false},
            {text: "Cascading styling" , correct: false},
            {text: "Cascading Style Sheet" , correct: true},
        ]
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?" ,
        answers: [
            {text: "At the end of the document" , correct: false},
            {text: "In the < head > section" , correct: false},
            {text: "In the < body > section" , correct: true},
        ]
    },

    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: [
            {text: "< Script >" , correct: false},
            {text: "< Css >" , correct: false},
            {text: "< Style >" , correct: true},
        ]
    },
    {
        question: " How do you insert a comment in a CSS file?",
        answers: [
            {text: "/* this is a comment */" , correct: true},
            {text: "// this is a comment //" , correct: false},
            {text: " ' this is a comment '' " , correct: false},
            {text: "// this is a commrnt " , correct: false},
        ]
    },
    {
        question: "Which property is used to change the background color?",
        answers: [
            {text: "background-color" , correct: true},
            {text: "color" , correct: false},
            {text: "bgcolor" , correct: false},
        ]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            {text: "fgcolor" , correct: false},
            {text: "color" , correct: true},
            {text: "text-color" , correct: false},
        ]
    },
    {
        question: "Which CSS property controls the text size?",
        answers: [
            {text: "text-size" , correct: false},
            {text: "text-style" , correct: false},
            {text: "font-style" , correct: false},
            {text: "font-size" , correct: true},
        ]
    },
    {
        question: "What is the correct CSS syntax for making all the < p > elements bold?",
        answers: [
            {text: "p { font-weight: bold};" , correct: true},
            {text: "< p style= 'font-size: bold:' >" , correct: false},
            {text: "font-bold: bolder;" , correct: false},
            {text: "p { text-size: bold;}" , correct: false},
        ]
    },

    {
        question: "Which property is used to change the font of an element?",
        answers: [
            {text: "family-font" , correct: false},
            {text: "font-style" , correct: false},
            {text: "font-family" , correct: true},
            {text: "font-weight" , correct: false},
        ]
    },
   
    {
        question: "Which of these are valid CSS3 transformation statements?" ,
        answers: [ 
            {text: "skip()" , correct: false},
            {text: "modify()" , correct: false},
            {text: "matrix()" , correct: true},
            {text: "simulate()" , correct: false},
        ]
    },
    {
        question: "How to re-size/scale objects using CSS3?" ,
        answers: [
            {text: "Scale: (2,4);" , correct: false},
            {text: "Sacle-object: (2.4);" , correct: false},
            {text: "transform: scale(1.1);" , correct: true},
            {text: "None of them" , correct: false},
        ]
    },
    {
        question: "Look at the code. What piece of code is missing when make a text shadow? #basicTextShadow p{ text-shadow: 1px 1px 3px; }?" ,
        answers: [
            {text: "the #id name" , correct: false},
            {text: "the color" , correct: true},
            {text: "the element" , correct: false},
            {text: "the text shadpw height" , correct: false},
        ]
    },
    {
        question: "Does the box-shadow support all browsers?" ,
        answers: [
            {text: "Yes" , correct: false},
            {text: "No" , correct: true},
        ]
    },
    {
        question: "What does RGBa mean??" ,
        answers: [
            {text: "Red Grey Brown aplpha" , correct: false},
            {text: "Red Gold Black aplpha" , correct: false},
            {text: "Red Green Blue aplpha" , correct: true},
            {text: "Ranger Grade bytes aplpha" , correct: false},
        ]
    },
    {
        question: "Box-Shadow is a property that allows developers to apply a....?" ,
        answers: [
            {text: "Border" , correct: false},
            {text: "Rounded Corner" , correct: false},
            {text: "Background" , correct: true},
            {text: "Drop-Shadow" , correct: false},
        ]
    },
    {
        question: "Has CSS3 been fully supported by all browsers?" ,
        answers: [
            {text: "Yes" , correct: true},
            {text: "No" , correct: false},
        ]
    },
    {
        question: "How to rotate objects using CSS3" ,
        answers: [
            {text: "object-rotation: 30deg;" , correct: false},
            {text: "rotate-object: 30deg;" , correct: false},
            {text: "transform: rotate-30deg-clockwise;" , correct: false},
            {text: "transform: rotate(30deg);" , correct: true},
        ]
    },
  
 
    {
        question: "How can you created rounded corners using CSS3?" ,
        answers: [
            {text: "border[round]: 30px;" , correct: false},
            {text: "corner-effect: round;" , correct: false},
            {text: "alpha-effect: round-corner;" , correct: false},
            {text: "border-radius: 30px;" , correct: true},
        ]
    },
    {
        question: " How do you add shadow to elements in CSS3?" ,
        answers: [
            {text: "box-shadow: 10px 10px 5px grey;" , correct: true},
            {text: "sahdow-color: grey;" , correct: false},
            {text: "shadow-right: 10px shadow-box: 10px;" , correct: false},
            {text: "alpha-effect[ shadow ]: 10px 10px 5px grey" , correct: false},
        ]
    },
    {
        question: " How to resize a background image using CSS3?" ,
        answers: [
            {text: "background-size: 80px 60px;" , correct: true},
            {text: "bg-dimension: 80px 60px;" , correct: false},
            {text: "background-prportion: 80px 60px;" , correct: false},
            {text: "None of above" , correct: false},
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

    if(score >= 14){
        alert("Wow your Css Very Strong")
    }
    else{
        alert("oops! your Css is very week please prcactice again and again")
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
