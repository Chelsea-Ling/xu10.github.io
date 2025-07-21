// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get references to the HTML elements
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    // Add a click event listener to the button
    calculateBtn.addEventListener('click', () => {
        // Get values from input fields and convert them to numbers
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        // Validate the inputs
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultDiv.textContent = 'Please enter valid values for height and weight.';
            return;
        }

        // Convert height from cm to meters
        const heightInMeters = height / 100;

        // Calculate BMI using the formula: BMI = weight(kg) / [height(m)]^2
        const bmi = weight / (heightInMeters * heightInMeters);

        // Determine the BMI category
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        // Display the result
        // .toFixed(2) rounds the BMI to two decimal places
        resultDiv.innerHTML = `Your BMI is <strong>${bmi.toFixed(2)}</strong>. <br> This is considered: <strong>${category}</strong>.`;
    });
});