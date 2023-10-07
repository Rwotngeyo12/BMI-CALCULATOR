//javascript code for the bmi calculator
let button = document.getElementById("btn");

button.addEventListener("click", () => {
    const height = parseInt(document.getElementById(height).value);
    const weight = parseInt(document.getElementById(weight).value);
    const output = parseInt(document.getElementById(output).value);
    let height_status = false, weight_status = false;
    if (height = "" || isNaN(height) || (height <= 0)) {
        document.getElementById("height_error").innerHTML = "Please provide a valid height";}
        else {
            document.getElementById("height_error").innerHTML = "";
            height_status = true;
        };
    
    if (weight = "" || isNaN(weight) || (weight <= 0)) {
        document.getElementById("weight_error").innerHTML = "Please provide a valid weight";}
        else {
            document.getElementById("weight_error").innerHTML = "";
            weight_status = true;
        };
        if (height_status && weight_status) {
            const bmi = (weight / (height * height));
            return bmi;
        }
     if (bmi < 20) {
        XPathResult.innerHTML = "under weight";
    } else if (bmi <= 20 && bmi <= 30) {
        XPathResult.innerHTML = "normal";
    }
    else if (bmi > 30){
        XPathResult.innerHTML = "over weight";
    }
    else  {
        alert("This is incorrect");
        XPathResult.innerHTML = "";
    }   
});

