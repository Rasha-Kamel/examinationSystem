


const containerDiv = document.querySelector(".container")


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
            data.questions.forEach((quiz,index)=>{
                const quesionDiv = document.createElement('div');
                quesionDiv.classList.add("qTitle");        
                quesionDiv.innerHTML = `
                    <h2>Q${index + 1}: ${quiz.question}</h2>            
                `;
                containerDiv.appendChild(quesionDiv);
                quiz.options.forEach(option=>{
                    const optParagraph = document.createElement('p');
                    optParagraph.classList.add("choose"); 
                    optParagraph.innerHTML = `<label><input type="radio" name="question${index}" value="${option}"> ${option}</label>`;
                    quesionDiv.appendChild(optParagraph);
                })     
            })
        })
        // .catch((error) =>{
        //     console.error(error);
        // });
});
