(function calculate() {

    window.addEventListener("load", init);

    function init() {
        const buttons = qsa("button");
        buttons.forEach((button) => button.addEventListener("click", storeValue));
    }

    const values = {
        "firstNum": '',
        "operatorSymbol": '',
        "lastNum": '',
    }

    function storeValue(e) {
        if (!isNaN(e.target.value) && values.operatorSymbol === '') {
            values.firstNum += e.target.value;
            showDisplayNumber(values.firstNum);
        } else if (!isNaN(e.target.value) && values.operatorSymbol !== '') {
            values.lastNum += e.target.value;
            showDisplayNumber((values.firstNum + values.operatorSymbol + values.lastNum));
        } else if (e.target.value === "clear") {
            clearCalculator();
            showDisplayNumber("0")
        } else if (e.target.value === "=") {
            values.firstNum = Number(values.firstNum);
            values.lastNum = Number(values.lastNum);
            let result = operate(values.firstNum, values.operatorSymbol, values.lastNum);
            showDisplayNumber(result);
            clearCalculator();
        } else {
            values.operatorSymbol = e.target.value;
        }
    }

    function showDisplayNumber(value) {
        const displayText = qs(".display__text");
        displayText.textContent = value
    }

    function clearCalculator() {
        values.firstNum = 0;
        values.lastNum = 0;
        values.operatorSymbol = '';
    }

    function qsa(element) {
        return document.querySelectorAll(element);
    }

    function qs(element) {
        return document.querySelector(element); 
    }

    function add(firstNum, lastNum) {
        return firstNum + lastNum;
    }

    function subtract(firstNum, lastNum) {
        return firstNum - lastNum;
    }

    function multiply(firstNum, lastNum) {
        return firstNum * lastNum;
    }

    function divide(firstNum, lastNum) {
        return firstNum / lastNum;
    }

    function operate(firstNum, operator, lastNum) {
        switch (operator) {
            case "+":
                return add(firstNum, lastNum);
            case "-":
                return subtract(firstNum, lastNum);
            case "*":
                return multiply(firstNum, lastNum);
            case "/": 
                return divide(firstNum, lastNum);
            default:
                break;
        }
    }

}());

