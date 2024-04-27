document.addEventListener('DOMContentLoaded', () => {
let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;

    if (isNaN(height) || height <= 0) {
        document.getElementById('height_error').innerHTML = 'Please provide a valid Height';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    if (isNaN(weight) || weight <= 0) {
        document.getElementById('weight_error').innerHTML = 'Please provide a valid Weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if (height_status && weight_status) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = 'Underweight : ' + bmi;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 'Normal Weight : ' + bmi;
        } else if (bmi >= 24.9 && bmi < 29.9) {
            result.innerHTML = 'Overweight : ' + bmi;
        } else {
            result.innerHTML = 'Obese : ' + bmi;
        }
    } else {
        alert("The Form has Errors...");
        result.innerHTML = '';
    }
});
});