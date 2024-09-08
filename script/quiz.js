const contentDiv = document.querySelector(".content");
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn'); 
let currentQIndex = 0;
let randomQuestions = [];


document.addEventListener('DOMContentLoaded', () => {
    const request = fetch ('./jsonFile/quesions.json');
    request
        .then((response)=>{
            if (!response.ok) {
                throw new Error('Network response was not ok ');
            }
            return response.json();
        })
        .then((data)=>{
            //specefic 10 random questions
            randomQuestions = getRandomQ(data.questions, 10);
             displayQuestion(currentQIndex);
        })
        .catch((error) =>{
            console.error(error);
        });   
});

// Function to get a specified number of random questions
function getRandomQ(questions, numQ) {
    let randomQuestions = [];
    let indexes = new Set();   
    while (randomQuestions.length < numQ) {
        let randomIndex = Math.floor(Math.random() * questions.length);
        // Ensure no duplicate questions
        if (!indexes.has(randomIndex)) {
            randomQuestions.push(questions[randomIndex]);
           indexes.add(randomIndex);
        }
    }   
    return randomQuestions;
};


function displayQuestion(index) {
    // Clear the container
    contentDiv.innerHTML = '';

    const quiz = randomQuestions[index];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add("qTitle");
    questionDiv.innerHTML = `
        <h2>Q${index + 1}: ${quiz.question}</h2>
    `;
    contentDiv.appendChild(questionDiv);
    //to display answers of each question
    quiz.options.forEach(option => {
        const optParagraph = document.createElement('p');
        optParagraph.classList.add("choose");
        optParagraph.innerHTML = `
            <label>
                <input type="radio" class="radio" name="question${index}" value="${option}"> ${option}
            </label>
        `;
        optParagraph.querySelector('.radio').addEventListener('click', function () {
            checkAnswer(option, quiz.correct_answer,index);
        });
        questionDiv.appendChild(optParagraph);
    });
};

// Function to check the selected answer and update the question status
//index for current question
function checkAnswer(selectedOption, correctAnswer, index) {
    if (selectedOption === correctAnswer) {
        randomQuestions[index].right = true;
        console.log("Correct!");
    } else {
        randomQuestions[index].right = false;
        console.log("Wrong!");
    }
};

// Set the initial state
prevBtn.disabled = true;  // Disable the Previous button on the first question
nextBtn.disabled = false; // Ensure the Next button is enabled initially

nextBtn.addEventListener('click', () => {   
    currentQIndex++;
    // Enable the Previous button when moving past the first question
    prevBtn.disabled = false;

    // If we've reached the last question, disable the Next button
    if (currentQIndex == randomQuestions.length - 1) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }

    // Display the current question
    if (currentQIndex < randomQuestions.length) {
        displayQuestion(currentQIndex);
    }
});

prevBtn.addEventListener('click', () => {
    currentQIndex--;
    // Enable the Next button when moving back from the last question
    nextBtn.disabled = false;

    // If we're back at the first question, disable the Previous button
    if (currentQIndex == 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }
    // Display the current question
    if (currentQIndex < randomQuestions.length) {
        displayQuestion(currentQIndex);    
    }
});

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', () => {
    // Calculate the score
    var count = 0;
    randomQuestions.forEach(e => {
        if (e.right) {
            count++;
        }
    });
    localStorage.setItem('score', count);
    localStorage.setItem('total', randomQuestions.length);
    window.location.href = 'result.html';
});
