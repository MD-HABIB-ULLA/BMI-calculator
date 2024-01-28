function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const feet = document.getElementById("feet").value;
  const inches = document.getElementById("inches").value;

  if (weight >= 0 && feet && inches) {
    const totalInches = parseInt(feet) * 12 + parseInt(inches);
    const meters = (totalInches * 0.0254);
    const bmi = (weight / (meters ** 2)).toFixed(2);
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Your BMI is: ${bmi}`;
    console.log(bmi);
    
    const myModal = document.getElementById("my_modal_5");
        myModal.showModal();
  } else {
    alert("Please enter both weight and height correctly and dont enter negetive vlaue.");
  }
}
