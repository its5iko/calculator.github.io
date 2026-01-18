let display = document.getElementById("display");

// zawsze czyść po odświeżeniu
window.onload = () => {
    display.value = "";
};

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
                location.reload(); // odśwież stronę po 5 sekundach
            }, 5000);
        }
    } catch {
        display.value = "Błąd";
    }
}
