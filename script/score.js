   // Retrieve the score from sessionStorage
   const score = localStorage.getItem('score');
   const total = localStorage.getItem('total');
   var fName = localStorage.getItem('f-name');
   var lName = localStorage.getItem('l-name');

    document.getElementById('score').innerText = `
    Hi ${fName} ${lName}
    
    Your Score Is : 
    ${score}/ ${total}
    `;
  