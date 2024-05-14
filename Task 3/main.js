function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const conversionSelect = document.getElementById("conversion");
    const resultDisplay = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);

    if (isNaN(temperature)) {
        resultDisplay.textContent = "Please enter a valid number for temperature.";
        return;
    }

    const conversionType = conversionSelect.value;
    let convertedTemperature;
    let unit;

    switch (conversionType) {
        case "celsius":
            convertedTemperature = (temperature - 32) * 5 / 9;
            unit = "°C";
            break;
        case "fahrenheit":
            convertedTemperature = temperature * 9 / 5 + 32;
            unit = "°F";
            break;
        case "kelvin":
            convertedTemperature = temperature + 273.15;
            unit = "K";
            break;
        default:
            resultDisplay.textContent = "Invalid conversion type.";
            return;
    }

    resultDisplay.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit}`;
}