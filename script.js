var buttons = document.getElementsByClassName("btn");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
var op = null;
function operatorin(value){
    return value == "+" || value == "-" || value == "*" || value == "/";
}
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function (){
        var value = this.getAttribute('data-value');
        var input = display.textContent.trim();
        if(operatorin(value)){
            operator = value;
            operand1 = parseFloat(input);
            op = input + value;
            display.textContent = op;
        } else if(value == '='){
            operand2 = parseFloat(input);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else if(value == 'AC'){
            display.innerText = ''  
        } else if(value == '.'){
            if (input.length && !input.includes('.')) {
                display.textContent = input + '.';
            }
        } else if(value == 'sign'){
            operand1 = parseFloat(input);
            operand1 = -1*operand1;
            display.textContent = operand1;
        } else if(value == '%'){
            operand1 = parseFloat(input);
            operand1 = operand1/100;
            display.textContent = operand1;         
        } else {
            display.innerText  += value;
        }
    });
} 
