let buttons = document.getElementsByClassName("button");
let display = document.getElementById("display");
let operator = null;
let operand1 = 0;
let operand2 = null;
for(let i = 0;i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        let value = this.getAttribute ('data-value');
        if(value == '+'){
            operator = '+';
            operand1 = parseFloat(display.textContent);
            display.innerText = '0';


        }else if(value == '-'){
            operator = '-';
            operand1 = parseFloat(display.textContent);     
            display.innerText = '0';               
        }
        else if(value == '*'){
            operator = '*';
            operand1 = parseFloat(display.textContent); 
            display.innerText = '0';                   
        }
        else if(value == '/'){
            operator = '/';
            operand1 = parseFloat(display.textContent);    
            display.innerText = '0';                
        }
        else if(value == '='){
            operand2 = parseFloat(display.textContent);
            if(operator == '%'){
                let temp = (operand1 / 100)*operand2;
                display.innerText = temp;
            }else{
                display.innerText = eval(operand1+" "+operator+" "+operand2);
            }        
        }else if(value == '%'){
            operator = '%';
            operand1 = parseFloat(display.textContent);    
            display.innerText = '0';              
        }
        else if(value == 'p-m'){
            display.innerText = '-' + display.innerText;
        }
        else if(value == 'AC'){
            display.innerText = '0';
            operand1 = 0;
            operand2 = null;
            operator = null;
        }
        else{
            if(display.innerText == '0'){
                display.innerText = '';
            }
            display.innerText += value;
           
        }


    });

   
}