let display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;

        if (result === 67) {
            setTimeout(() => {
                // "Wyłączenie" strony
                document.body.innerHTML = "";
                document.body.style.background = "black";
            }, 3000);
        }
    } catch {
        display.value = "Błąd";
    }
}
