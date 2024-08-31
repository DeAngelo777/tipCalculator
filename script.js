
const inputV = document.querySelector("input");
const button = document.querySelector(".btn");
const tip = document.querySelector("#tipAmount");
const totalSum = document.querySelector(".totalSum");
const tipSum = document.querySelector(".tipSum");
button.addEventListener("click", tipcal);


function tipcal() {
    const bill = inputV.value;
    const tip2 = tip.value;
    
    tipSum.innerHTML = `<span>${bill * tip2 / 100} Eur</span> tips`;
    totalSum.innerHTML = `Total pay <span>${bill * tip2 / 100 + parseInt(bill)}</span> Eur
`;
}

