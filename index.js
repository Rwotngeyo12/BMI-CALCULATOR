// JavaScript code
let button = document.getElementById("btn");

button.addEventListener("click", () => {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    let height_status = false, weight_status = false;

    if (isNaN(height) || height <= 0) {
        document.getElementById("height_error").innerHTML = "Please provide a valid height";
    } else {
        document.getElementById("height_error").innerHTML = "";
        height_status = true;
    }

    if (isNaN(weight) || weight <= 0) {
        document.getElementById("weight_error").innerHTML = "Please provide a valid weight";
    } else {
        document.getElementById("weight_error").innerHTML = "";
        weight_status = true;
    }

    if (height_status && weight_status) {
        const bmi = weight / Math.pow(height, 2);

        let result = "";

        if (bmi < 20) {
            result = "Underweight";
        } else if (bmi <= 25) {
            result = "Normal weight";
        } else if (bmi <= 30) {
            result = "Overweight";
        } else {
            result = "Obese";
        }

        document.getElementById("output").innerHTML = `BMI: ${bmi.toFixed(2)} - ${result}`;
    }
});

