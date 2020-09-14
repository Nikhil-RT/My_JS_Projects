const quizData = [
    {
        question: "Which month is Nikhil's Birthday ?",
        a : 'January, February, or March',
        b : 'April, May, or June',
        c : 'July, August, or September',
        d : 'October, November, or December',
        correct : 'c',
    }, {
        question: "What is Nikhil's favourite sport ?",
        a:'Football',
        b:'Tennis',
        c:'Cricket',
        d:'Swimming',
        correct:'b',
    }, {
        question: 'When Nikhil is bored, what does he do? ',
        a:'Reads a book',
        b:'Watch a movie',
        c:'Calls a friend',
        d:'Coding',
        correct : 'b',
    }, {
        question: 'What type of movies does Nikhil like?',
        a:'Horror',
        b:'Romance',
        c:'Thriller',
        d:'All the above',
        correct : 'd',
    }, {
        question: "What is Nikhil's favourite dish?",
        a:'Mutton',
        b:'Chicken',
        c:'Prawns',
        d:'Fish',
        correct : 'a',
    }, {
        question: "How many siblings does Nikhil have?",
        a:'0',
        b:'5',
        c:'2',
        d:'1',
        correct : 'c',
    }, {
        question: " What is Nikhil most afraid of?",
        a:'Cockroaches',
        b:'Trekking',
        c:'losing',
        d:'Girls',
        correct : 'd',
    }, {
        question: " Which drink does Nikhil like the most?",
        a:'Beer',
        b:'Whiskey',
        c:'Coffee',
        d:'Tea',
        correct : 'a',
    }, {
        question: "What is Nikhil's favourite TV series ",
        a:'Game of Thrones',
        b:'13 Reasons Why',
        c:'Mirzapur',
        d:'Lucifer',
        correct : 'c',
    },

]

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit_btn = document.getElementById('submit');
// console.log(a_text);

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function select() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submit_btn.addEventListener("click", () => {

    //check to see answer
    const answer = select();
    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>  You answered ${score}/${quizData.length} questions correctly.</h2>`;
        }
    }
});

  