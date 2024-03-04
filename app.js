const questions = [
    {
        question: "Html stands for?" ,
        answers: [
            {text: "Hyper Text Modul Language" , correct: false},
            {text: "Hyper Text Markup Language" , correct: true},
            {text: "Hyper Test Markup Language" , correct: false},
            {text: "Hyperlink Markup Language" , correct: false},
        ]
    },
    {
        question: "< h3 > tag is the biggest heading tag" ,
        answers: [
            {text: "True" , correct: false},
            {text: "False" , correct: true},
            {text: "None of them" , correct: false},
        ]
    },
    {
        question: "Which of the following table tags is used to create a table row?" ,
        answers: [
            {text: " < th >" , correct: false},
            {text: "< tr >" , correct: true},
            {text: "< td >" , correct: false},
            {text: "< table >" , correct: false},
        ]
    },
    {
        question: "Which is the correct HTML tag for a new paragraph?" ,
        answers: [
            {text: "< pargraph >" , correct: false},
            {text: "< p >" , correct: true},
            {text: "< pre >" , correct: false},
        ]
    },
    {
        question: "Which of the following HTML tags is not valid??" ,
        answers: [
            {text: "< h1 >" , correct: false},
            {text: "< h8 >" , correct: true},
            {text: "< h4 >" , correct: false},
            {text: "< h5 >" , correct: false},
        ]
    },
    {
        question: "What is the HTML attribute used to reference the location of an image inside the <img> tag?" ,
        answers: [ 
            {text: "href" , correct: false},
            {text: "Src" , correct: true},
            {text: "Link" , correct: false},
            {text: "Location" , correct: false},
        ]
    },
    {
        question: "Is it possible to use a table inside another table?" ,
        answers: [
            {text: "Yes" , correct: true},
            {text: "No" , correct: false},
            {text: "None of them" , correct: false},
        ]
    },
    {
        question: "Which HTML tag is used to create a clickable hyperlink?" ,
        answers: [
            {text: "< Link >" , correct: false},
            {text: "< href >" , correct: false},
            {text: "< a >" , correct: true},
            {text: "< web >" , correct: false},
        ]
    },
    {
        question: "What does the HTML< strong >tag represent?" ,
        answers: [
            {text: "Strong importance or emphasis" , correct: true},
            {text: "Text align" , correct: false},
            {text: "Highlighted text" , correct: false},
            {text: "Underline text" , correct: false},
        ]
    },
    {
        question: "What does the HTML< blockquote >tag represent?" ,
        answers: [
            {text: "A block of code" , correct: false},
            {text: "A highlighted text" , correct: false},
            {text: "A comment block" , correct: false},
            {text: "A section of quote text" , correct: true},
        ]
    },
    {
        question: "What does the HTML< ol >tag represent?" ,
        answers: [
            {text: "An ordered (numbered) list" , correct: true},
            {text: "An unorderd list" , correct: false},
            {text: "Elephant" , correct: false},
            {text: "Giraffe" , correct: false},
        ]
    },
    {
        question: "How you can open the link in a new window?" ,
        answers: [
            {text: "target=_new" , correct: false},
            {text: "target=_Window" , correct: false},
            {text: "target=_blank" , correct: true},
        ]
    },
    {
        question: "Which is the use of Html?" ,
        answers: [
            {text: "structure" , correct: true},
            {text: "styling" , correct: false},
            {text: "presentation" , correct: false},
        ]
    },
    {
        question: "__attribute is used to specify where to open the linked document.?" ,
        answers: [
            {text: "target" , correct: true},
            {text: "coords" , correct: false},
            {text: "rel" , correct: false},
            {text: "none of the above" , correct: false},
        ]
    },
    {
        question: "Which of the anchor attribute is used to specify the language of the linked document?" ,
        answers: [
            {text: "alang" , correct: false},
            {text: "lang" , correct: false},
            {text: "href_lang" , correct: true},
        ]
    },
    {
        question: " Relationship between the current document and the linked document is specified using the ___ attribute?" ,
        answers: [
            {text: "relation" , correct: false},
            {text: "rel" , correct: true},
            {text: "href" , correct: false},
            {text: "target" , correct: false},
        ]
    },
    {
        question: " The ___ attribute is used to specify MIME type of the linked document." ,
        answers: [
            {text: "MIME" , correct: false},
            {text: "Media" , correct: false},
            {text: "Type" , correct: true},
            {text: "None of above" , correct: false},
        ]
    },
    {
        question: "What is the correct syntax of doctype in HTML5?" ,
        answers: [
            {text: "< !DOCTYPE html >" , correct: true},
            {text: "< doctype html! >" , correct: false},
            {text: "< doctype >" , correct: false},
            {text: "< //doctype html >" , correct: false},
        ]
    },
    {
        question: "In which part of the HTML metadata is contained??" ,
        answers: [
            {text: "< head > tag" , correct: true},
            {text: "< html > tag" , correct: false},
            {text: "< head > tag" , correct: false},
            {text: "<  title > tag" , correct: false},
        ]
    },
    {
        question: "Which element is used to get highlighted text in HTML5?" ,
        answers: [
            {text: "< highlight >" , correct: false},
            {text: "< b >" , correct: false},
            {text: "< mark >" , correct: true},
            {text: "< u >" , correct: false},
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

    if(score >= 12){
        alert("Wow your Html is Very Strong")
    }
    else{
        alert("oops! your Html is very week please prcactice again and again")
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
