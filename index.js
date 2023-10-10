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
  //bmi calculator code
    function bmiCalculator (weight, height) {
    // code of functions
    if (BMI < 18.5){
        if(BMI > 18.5 && BMI > 24.9){
            if(BMI > 24.9){
                return "so you are over weight";
            }
            return "so you have a normal weight";
        }
        return "so your under weight";
    }
}

