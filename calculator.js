function appendToDisplay(input) {
    // Prevent the form from submitting
    event.preventDefault();
    var display = document.getElementById('display');

    display.value += input;
}

function clearDisplay() {
    // Prevent the form from submitting
    event.preventDefault();
    var display = document.getElementById('display');

    display.value ='';
}

function calculate() {
    // Prevent the form from submitting
    event.preventDefault();
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Syntax Error";
    }
}