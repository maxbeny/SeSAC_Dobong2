function cal() {
    const value1 = parseFloat(document.getElementById('value1').value); 
    const value2 = parseFloat(document.getElementById('value2').value); 
    const operator = document.getElementById('operator').value; 
    const resultInput = document.getElementById('result'); 

    let result;
    
    switch (operator) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
        case '×':
            result = value1 * value2;
            break;
        case '/':
            if (value2 !== 0) {
                result = value1 / value2;
            } else {
                resultInput.value = '0으로 나눌 수 없습니다.';
                return;
            }
            break;
        default:
            resultInput.value = '유효한 연산자를 입력하세요.';
            return;
    }

    resultInput.value = result;
}

function resetInput() {
    document.getElementById('value1').value = ''; 
    document.getElementById('value2').value = ''; 
    document.getElementById('operator').value = ''; 
    document.getElementById('result').value = ''; 
}