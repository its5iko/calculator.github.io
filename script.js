// GLOBALNY display
var display;

// inicjalizacja po załadowaniu strony
window.onload = function () {
    display = document.getElementById("display");
    display.value = "";
};

// dodanie znaku / liczby
function append(value) {
    display.value += value;
}

// czyszczenie wyświetlacza
function clearDisplay() {
    display.value = "";
}

// obliczanie
function calculate() {
    try {
        var result = eval(display.value);
        display.value = result;

        // jeśli wynik = 67 → odśwież po 5 sekundach
        if (result === 67) {
            setTimeout(function () {
                location.reload();
            }, 5000);
        }
    } catch (e) {
        display.value = "Błąd";
    }
}
