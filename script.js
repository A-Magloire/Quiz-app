const quizData = [
    {
        question: 'How old is Adam?',
        a: '20',
        b: '23',
        c: '27',
        d: '19',
        correct: 'b'

    },
    {
        question: 'What is the most used programming language in 2021?',
        a: 'Python',
        b: 'Java',
        c: 'C',
        d: 'JavaScript',
        correct: 'd'

    },
    {
        question: 'Who is the Prime Minister of Canada',
        a: 'Justin Trudeau',
        b: 'Donald Trump',
        c: 'Luke Skywalker',
        d: 'Bill Cosby',
        correct: 'a'

    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Horny tweaking manic lollygager',
        c: 'JavaScript Object Notation',
        d: 'Cascading Style Sheets',
        correct: 'a'

    },
    {
        question: 'What language is used for Machine learning?',
        a: 'Php',
        b: 'Java',
        c: 'R',
        d: 'JavaScript',
        correct: 'c'

    }
];
//get entire quiz
const quiz = document.getElementById("quiz");
//get radio answers
const answersEls = document.querySelectorAll(".answer");
//get questions and answer text
const questionEl = document.getElementById('question')
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    //assign the quiz data to the question elements defined in HTML
    const currentQuizData = quizData[currentQuiz];
    //clear radio buttons
    deselectAnswers();

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    //get answer values (selected or deselected)
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false
        });
 }

submitBtn.addEventListener("click", () => {
    //check to see the answer
    const answer = getSelected();

    if(answer) {

        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`
        }
    }

    if (currentQuiz < quizData.length-1) {
        submitBtn.innerText = 'Next Question'
    } else {
        submitBtn.innerText = 'Submit'
    }
});