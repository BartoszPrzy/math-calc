document.addEventListener("DOMContentLoaded", function() {
    // Get references to HTML elements
    const numberInput1 = document.getElementById('numberInput1');
    const numberInput2 = document.getElementById('numberInput2');
    const operationSelect = document.getElementById('select');
    const resultDiv = document.getElementById('result');

    // Function to calculate the result
    function calculateResult() {
        const num1 = parseFloat(numberInput1.value);
        const num2 = parseFloat(numberInput2.value);
        const operation = operationSelect.value;
        let result;
        
        if (operation === "add") {
            result = num1 + num2;
        } else if (operation === "subtract") {
            result = num1 - num2;
        }

        resultDiv.textContent = `Result: ${result}`;
    }

    // add EventListener
    numberInput1.addEventListener('input', calculateResult);
    numberInput2.addEventListener('input', calculateResult);
    operationSelect.addEventListener('change', calculateResult);

    // Call the function once at startup
    calculateResult();
});



