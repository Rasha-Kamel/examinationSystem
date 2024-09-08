const containerDiv = document.querySelector(".container");
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
    containerDiv.innerHTML = '';

    const quiz = randomQuestions[index];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add("qTitle");
    questionDiv.innerHTML = `
        <h2>Q${index + 1}: ${quiz.question}</h2>
    `;
    containerDiv.appendChild(questionDiv);
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

prevBtn.style.display ='none';
nextBtn.addEventListener('click', () => {   
    currentQIndex++;
    prevBtn.style.display ='block';
    if(currentQIndex == 9){
        nextBtn.style.display ='none';   
    }
    if (currentQIndex < randomQuestions.length) {
        displayQuestion(currentQIndex);
    } else {
        // Optional: You can disable the button or show a message when there are no more questions
        nextBtn.disabled = true;
        containerDiv.innerHTML = '<p>No more questions!</p>';
    }
});

prevBtn.addEventListener('click', () => {
    currentQIndex--;
    nextBtn.disabled = false;
    nextBtn.style.display ='block';
    if (currentQIndex == 0){
        prevBtn.style.display ='none';   
    }
    if (currentQIndex < randomQuestions.length) {
        displayQuestion(currentQIndex);    
    } else {
        // Optional: You can disable the button or show a message when there are no more questions
        prevBtn.disabled = true;
        containerDiv.innerHTML = '<p>No more questions!</p>';
    }

});

