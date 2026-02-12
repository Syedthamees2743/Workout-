let result = document.getElementById("result");
let content = document.getElementById("content")

function calculateBMI() {

    let weightValue = document.getElementById("weight").value;
    let heightValue = document.getElementById("height").value;

    weightValue = parseInt(weightValue);
    heightValue = parseInt(heightValue);

    heightValue = heightValue / 100;

    let bmiResult = weightValue / (heightValue * heightValue);

    if (bmiResult <= 18.4) {
        result.innerText = "Result : Under Weight";
        result.style.color = "yellow";
        content.innerText = " Focus on healthy, nutrient-dense foods rather than fast food"
    }
    else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
        result.innerText = "Result : Normal";
        result.style.color = "green";
        content.innerText = "Regular physical activity, a good diet, and managing stress are crucial to remaining in this range. "
    }
    else if (bmiResult >= 25 && bmiResult <= 39.9) {
        result.innerText = "Result : Over Weight";
        result.style.color = "orange";
        content.innerText = "Aim for at least (150) minutes of moderate-intensity aerobic activity per week, such as brisk walking, to improve cardiovascular health and assist with weight loss."
    }
    else {
        result.innerText = "Result : Obese";
        result.style.color = "red";
        content.innerText = " Aim for at least 150 minutes of moderate-intensity aerobic activity per week, plus muscle-strengthening exercises."
    }
}
