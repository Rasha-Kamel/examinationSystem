   // Retrieve the score from sessionStorage
   const score = localStorage.getItem('score');
   const total = localStorage.getItem('total');
   var fName = localStorage.getItem('f-name');
   var lName = localStorage.getItem('l-name');

   // console.log(count + "/ 10");
   if (score === total) {
    document.querySelector('img').style.display = 'block';
    document.getElementById('full-score').innerText = `
        Congratulations
        ${fName}

        You Got The Full Mark
        ${score}/ ${total}
       `;
    }
    else {
         window.location.href = 'score.html';
   }