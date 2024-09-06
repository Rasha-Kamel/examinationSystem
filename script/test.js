document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');

    fetch('./jsonFile/quesions.json')
        .then(response => response.json())
        .then(data => {
            data.questions.forEach((questionObj, index) => {
                const questionElement = document.createElement('div');
                questionElement.classList.add('question');
                questionElement.innerHTML = `<h2>Q${index + 1}: ${questionObj.question}</h2>`;

                const optionsList = document.createElement('ul');
                optionsList.classList.add('options');

                questionObj.options.forEach(option => {
                    const optionItem = document.createElement('li');
                    optionItem.innerHTML = `<label><input type="radio" name="question${index}" value="${option}"> ${option}</label>`;
                    optionsList.appendChild(optionItem);
                });

                questionElement.appendChild(optionsList);
                quizContainer.appendChild(questionElement);
            });
        })
        .catch(error => console.error('Error fetching the questions:', error));
});
