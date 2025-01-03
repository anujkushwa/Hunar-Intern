function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
  
    if (!weight || !height || weight <= 0 || height <= 0) {
      alert("Please enter valid values for weight and height.");
      return;
    }
  
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  
    let category = "";
  
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    document.getElementById("bmi-value").textContent = bmi;
    document.getElementById("bmi-category").textContent = `Category: ${category}`;
  }
  