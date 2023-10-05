//javascript code
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
        return resL = 
    }   
});

