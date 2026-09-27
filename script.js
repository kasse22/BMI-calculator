const height =document.querySelector(".height"); 
const weight=document.querySelector(".weight"); 
const btnbmi=document.querySelector(".btn"); 
const result=document.querySelector(".m-h1"); 

btnbmi.addEventListener("click", function(e){  
    e.preventDefault();
    const heightvalue=Number(height.value); 
    const weightvalue=Number(weight.value); 

if(heightvalue<=0|| weightvalue<=0){ 
result.innerHTML="Please enter a valid height an weight"; 


return;
}
 const heightInMeters = heightvalue / 100;

const bmi = weightvalue / (heightInMeters * heightInMeters);

let category; 
let explnation; 
  if (bmi <= 15) {
        category = "Very Low BMI";
        explnation = "Your BMI is very low. Consider paying attention to your nutrition and overall health."; 
       
    } 
    else if (bmi <= 18.5) {
        category = "Underweight";
        explnation = "Your BMI is below the normal range. A balanced diet and healthy lifestyle can help support your overall health.";
    } 
    else if (bmi <= 25) {
        category = "Normal Weight";
        explnation = "Your BMI is within the normal range. Maintaining a balanced diet and regular physical activity can help you stay healthy.";
    } 
    else if (bmi <= 30) {
        category = "Overweight";
        explnation = "Your BMI is above the normal range. Regular physical activity and balanced nutrition can support a healthier lifestyle.";
    } 
    else {
        category = "Obesity";
        explnation = "Your BMI is in the obesity range. Healthy eating habits and regular physical activity may help improve your overall health.";
    } 
result.innerHTML = `
    Your BMI is ${bmi.toFixed(1)}
    <br>
    ${category}
    <br>
    <small>${explnation}</small>
`;

}); 

