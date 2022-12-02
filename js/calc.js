// imports
import allClear from './functions.js'

// varibales and creatind Elements 
let body = document.querySelector('body');
let calc = document.createElement('div');
let displayCalc = document.createElement('p');
let btnsDiv = document.createElement('div');
// exports
export default displayCalc


//creating btns
for (let i = 0; i <= 15; i++){
   const btn = document.createElement('button');
    btn.textContent = [i];
    btn.style.width = 50 + 'px';
    btn.style.height = 60 + 'px';

  
    
    btnsDiv.append(btn);

}

// styles
//areaCalc style start
    calc.style.display = 'flex';
    calc.style.flexDirection = 'column';
    calc.style.justifyContent = 'space-between'
    calc.style.width = 450 + 'px';
    calc.style.height = 700 + 'px';
    calc.style.backgroundColor = 'gray';
    calc.style.margin = 'auto';
    calc.style.paddingTop = 30 + 'px';
// areaCalc style end   

// displayCalc
    displayCalc.style.display = 'flex';
    displayCalc.style.alignItems = 'end';
    displayCalc.style.justifyContent = 'end'
    displayCalc.style.width = 400 + 'px';
    displayCalc.style.height = 70 + 'px'
    displayCalc.style.backgroundColor = 'white';
    displayCalc.style.margin = 'auto';
    displayCalc.style.fontFamily = 'Arial';
    displayCalc.style.fontSize = 25 + 'px';
    displayCalc.style.paddingRight = 10 + 'px';
// displayCalc

//btnsDiv
    btnsDiv.className = 'btns';
    btnsDiv.id = 'main';
    btnsDiv.style.width = 400 + 'px';
    btnsDiv.style.height = 550 + 'px';
    btnsDiv.style.backgroundColor = 'white';
    btnsDiv.style.margin = 'auto';
    btnsDiv.style.display = 'flex';
    btnsDiv.style.flexWrap = 'wrap'
    btnsDiv.style.gap = 10 + 'px';
    btnsDiv.style.justifyContent = 'center';
    btnsDiv.style.alignItems = 'center';
    
     //add styles for btns with numbers
   
     btnsDiv.childNodes[6].style.width = 100 + 'px';
     btnsDiv.childNodes[7].style.width = 100 + 'px';
     btnsDiv.childNodes[8].style.width = 100 + 'px';
     btnsDiv.childNodes[9].style.width = 100 + 'px';
     btnsDiv.childNodes[10].style.width = 100 + 'px';
     btnsDiv.childNodes[11].style.width = 100 + 'px';
     btnsDiv.childNodes[12].style.width = 100 + 'px';
     btnsDiv.childNodes[13].style.width = 100 + 'px';
     btnsDiv.childNodes[14].style.width = 100 + 'px';
     btnsDiv.childNodes[15].style.width = 50 + '%';
     

    console.log(btnsDiv);
//btnsDiv

// end style    
    
// appending nodes in html
    body.insertAdjacentElement("afterbegin", calc);
    calc.insertAdjacentElement("afterbegin", displayCalc);
    calc.insertAdjacentElement("beforeend", btnsDiv);
   


//log check
console.log(body.childNodes);
displayCalc.textContent = '0';


// replacment textContent in btn
btnsDiv.childNodes[0].textContent = 'AC';
btnsDiv.childNodes[1].textContent = '*';
btnsDiv.childNodes[2].textContent = '/';
btnsDiv.childNodes[3].textContent = '%';
btnsDiv.childNodes[4].textContent = '+';
btnsDiv.childNodes[5].textContent = '=';
btnsDiv.childNodes[6].textContent = '7';
btnsDiv.childNodes[7].textContent = '8';
btnsDiv.childNodes[8].textContent = '9';
btnsDiv.childNodes[9].textContent = '4';
btnsDiv.childNodes[10].textContent = '5';
btnsDiv.childNodes[11].textContent = '6';
btnsDiv.childNodes[12].textContent = '1';
btnsDiv.childNodes[13].textContent = '2';
btnsDiv.childNodes[14].textContent = '3';
btnsDiv.childNodes[15].textContent = '0';
// replacment textContent in btn

console.log(displayCalc.textContent)

//События 
let actions = ['+', '-', '*', '/', '%', '='];

btnsDiv.childNodes.forEach((item) => {
    item.addEventListener('click', (event) => {
        displayCalc.textContent =  event.currentTarget.textContent
    })
})

