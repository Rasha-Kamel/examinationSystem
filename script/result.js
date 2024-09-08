   // Retrieve the score from sessionStorage
   const score = localStorage.getItem('score');
   const total = localStorage.getItem('total');
   // console.log(count + "/ 10");
   if (score == total) {
    result.parentElement.querySelector('img').style.display = '';
    }
   // Display the score
   if (score !== null && total !== null) {
       document.getElementById('score').innerText = `You scored ${score} out of ${total}`;
   } else {
       document.getElementById('score').innerText = 'No score available.';
   }