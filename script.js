function appendToOutput(value) {
    document.getElementById("output").value += value;
}

function clearOutput() {
    document.getElementById("output").value = "";
}

function appendOperator(operator) {
    document.getElementById("output").value += operator;
}

function calculate() {
    var expression = document.getElementById("output").value;
    var result;
    try {
        result = eval(expression);
        if (result === Infinity || isNaN(result)) {
            throw "Error";
        }
        document.getElementById("output").value = result;
    } catch (error) {
        document.getElementById("output").value = "Error";
    }
}
