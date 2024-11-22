


const resultValue = document.querySelector("#resultValue");

// j'ecoute le bouton convertire //
document.getElementById("convertButton").addEventListener("click" ,function(){
//je recupère la valeur//
  const inputValue = document.querySelector("#inputValue").value;
  console.log(inputValue);

// je recupere mes option //
const inputUnit = document.querySelectorAll(".inputUnit");

const outputUnit = document.querySelectorAll(".outputUnit");

console.log(inputUnit);
console.log(outputUnit);

})
