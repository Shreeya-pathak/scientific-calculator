const display = document.getElementById('display');

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Use eval for basic math operations
    let result = eval(display.value);
    if (result === undefined) result = '';
    display.value = result;
  } catch {
    alert("Invalid Expression");
  }
}

function applyFunction(fn) {
  try {
    let val = parseFloat(display.value);
    if (isNaN(val)) {
      alert("Enter a valid number first");
      return;
    }
    let result;
    switch (fn) {
      case 'sin':
        result = Math.sin(toRadians(val));
        break;
      case 'cos':
        result = Math.cos(toRadians(val));
        break;
      case 'tan':
        result = Math.tan(toRadians(val));
        break;
      case 'log':
        if (val <= 0) {
          alert("Logarithm undefined for zero or negative numbers");
          return;
        }
        result = Math.log10(val);
        break;
      case 'sqrt':
        if (val < 0) {
          alert("Square root of negative number is not supported");
          return;
        }
        result = Math.sqrt(val);
        break;
      case 'exp':
        result = Math.exp(val);
        break;
      case 'pow2':
        result = Math.pow(val, 2);
        break;
      default:
        alert("Unknown function");
        return;
    }
    display.value = result;
  } catch {
    alert("Error in calculation");
  }
}

function toRadians(deg) {
  return deg * (Math.PI / 180);
}
