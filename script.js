const numberOfPeople = [];

const bill = [];

let tipAmount;
let total;

document.querySelector("#tip-5").addEventListener("click", function () {
  numberOfPeople.push(document.querySelector("#number_people").value);
  bill.push(document.querySelector("#total_price").value);
  if (numberOfPeople[numberOfPeople.length - 1] != "") {
    tipAmount =
      (bill[bill.length - 1] * 5) /
      100 /
      numberOfPeople[numberOfPeople.length - 1];
    total =
      bill[bill.length - 1] / numberOfPeople[numberOfPeople.length - 1] +
      tipAmount;
    document.querySelector("#tip_amount").innerText = tipAmount;
    document.querySelector("#total").innerText = total;
  }
});
console.log("d");
