// pobierz wyświetlacz
var display = document.getElementById("display");

// wyczyść po każdym odświeżeniu strony
window.onload = function () {
    display.value = "";
};

// dodawanie znaków
function append(value) {
    display.value += value;
}

// czyszczenie
function clearDisplay() {
    display.value = "";
}

// obliczanie
function calculate() {
    try {
        var result = eval(display.value);
        display.value = result;

        // jeśli wynik to 67 → odśwież po 5 sekundach
        if (result === 67) {
            setTimeout(function () {
                location.reload();
            }, 5000);
        }
    } catch (error) {
        display.value = "Błąd";
    }
}
