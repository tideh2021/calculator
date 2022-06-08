const display1 = document.querySelector('.display1');
const displayWin = document.querySelector('.display_win');
const btnWrapper = document.querySelector('.btn_wrapper');
const closeSpan = document.getElementById("closeSpan");

// convert the button object to array
const buttons = Array.from(document.getElementsByClassName('button'));
// map() method creates a new array populated with the results of calling evenlistener on every element in the calling array.
buttons.map(button => {
  button.addEventListener('click', (event) => {
    // console.log(event.target.innerText);
   switch(event.target.innerText) {
     case 'C': 
       displayWin.innerText = '';
       display1.innerText = '';
        break;
     case '←':
       if (displayWin.innerText) {
         displayWin.innerText = displayWin.innerText.slice(0, -1);
         break;
       } else {
         displayWin.innerText = 'Error';
         break;
       }      
     case '=':
      // ÷ /  x *
       textinputs = displayWin.innerText;
       display1.innerText = textinputs;
      displayWin.innerText = eval(display1.innerText);
         break; 
    
     case 'x²' : 
       if (displayWin.innerText){
         let x = displayWin.innerText;
         displayWin.innerText = x*x;
         break;
       } else {
         displayWin.innerText = 'Error';
         break;
       }      
     case '√x':
       if (displayWin.innerText) {
         let x = displayWin.innerText;
         display1.innerText = `√${x}`;
         displayWin.innerText = Math.sqrt(x);
         break;
       } else {
         displayWin.innerText = 'Error';
         break;
       }
     case 'sin':
       if (displayWin.innerText) {
         let x = displayWin.innerText;
         display1.innerText = `sin(${x}⁰) = ` +  "\r\n" ;
         displayWin.innerText = Math.sin(x);
         break;
       } else {
         displayWin.innerText = 'Error';
         break;
       }
     case 'cos':
       if (displayWin.innerText) {
         let x = displayWin.innerText;
         display1.innerText = `cos(${x}⁰) = ` + "\r\n";
         displayWin.innerText = Math.cos(x);
         break;
       } else {
         displayWin.innerText = 'Error';
         break;
       }
     case 'tan':
       if (displayWin.innerText) {
         let x = displayWin.innerText;
         display1.innerText = `tan(${x}⁰) = ` + "\r\n";
         displayWin.innerText = Math.tan(x);
         break;
       } else {
         displayWin.innerText = 'Error';
         break;
       }
     case 'log':
       if (displayWin.innerText) {
         let x = displayWin.innerText;
         display1.innerText = `log(${x}) = ` + "\r\n";
         displayWin.innerText = Math.log(x);
         break;
       } else {
         displayWin.innerText = 'Error';
         break;
       }
     case '±':
          displayWin.innerText = '-';
         break;
       
     default:
       displayWin.innerText += event.target.innerText;
   }
  });
});

closeSpan.addEventListener('click', () => {

  closeWindow();
});
function closeWindow() {
  window.close();
}


