   // Retrieve the score from sessionStorage
   const score = localStorage.getItem('score');
   const total = localStorage.getItem('total');
   var fName = localStorage.getItem('f-name');
   var lName = localStorage.getItem('l-name');
   var secLeft = localStorage.getItem('sec-left');
   var minLeft = localStorage.getItem('min-left');
   const scoreDiv =  document.getElementById('score');
   console.log(minLeft)
   console.log(secLeft)


  if (secLeft==0 && minLeft==0){
   
   scoreDiv.innerText = `
   Your Time Is Out
   
   Your Score Is : 
   ${score}/ ${total}
   `;
  }else{
   scoreDiv.innerText = `
   Hi ${fName} ${lName}
   
   Your Score Is : 
   ${score}/ ${total}
   `;
  }