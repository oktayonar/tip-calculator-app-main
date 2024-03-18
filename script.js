const numberOfPeople = [];
const customTip = [];
const bill = [];

let tipAmount;
let total;

document.querySelector("#tip-5").addEventListener("click", function () {
  numberOfPeople.push(document.querySelector("#number_people").value);
  bill.push(document.querySelector("#total_price").value);
  if (numberOfPeople[numberOfPeople.length - 1] != "") {
    tipAmount =
      Math.floor(
        ((bill[bill.length - 1] * 5) /
          100 /
          numberOfPeople[numberOfPeople.length - 1]) *
          100
      ) / 100;
    total =
      Math.floor(
        (bill[bill.length - 1] / numberOfPeople[numberOfPeople.length - 1] +
          tipAmount) *
          100
      ) / 100;
    document.querySelector("#tip_amount").innerText = `$${tipAmount}`;
    document.querySelector("#total").innerText = `$${total}`;
  } else if (numberOfPeople == "") {
    alert("Can't be zero number of people");
  }
});

document.querySelector("#tip-10").addEventListener("click", function () {
  numberOfPeople.push(document.querySelector("#number_people").value);
  bill.push(document.querySelector("#total_price").value);
  if (numberOfPeople[numberOfPeople.length - 1] != "") {
    tipAmount =
      Math.floor(
        ((bill[bill.length - 1] * 10) /
          100 /
          numberOfPeople[numberOfPeople.length - 1]) *
          100
      ) / 100;
    total =
      Math.floor(
        (bill[bill.length - 1] / numberOfPeople[numberOfPeople.length - 1] +
          tipAmount) *
          100
      ) / 100;
    document.querySelector("#tip_amount").innerText = `$${tipAmount}`;
    document.querySelector("#total").innerText = `$${total}`;
  } else if (numberOfPeople == "") {
    alert("Can't be zero number of people");
  }
});

document.querySelector("#tip-15").addEventListener("click", function () {
  numberOfPeople.push(document.querySelector("#number_people").value);
  bill.push(document.querySelector("#total_price").value);
  if (numberOfPeople[numberOfPeople.length - 1] != "") {
    tipAmount =
      Math.floor(
        ((bill[bill.length - 1] * 15) /
          100 /
          numberOfPeople[numberOfPeople.length - 1]) *
          100
      ) / 100;
    total =
      Math.floor(
        (bill[bill.length - 1] / numberOfPeople[numberOfPeople.length - 1] +
          tipAmount) *
          100
      ) / 100;
    document.querySelector("#tip_amount").innerText = `$${tipAmount}`;
    document.querySelector("#total").innerText = `$${total}`;
  } else if (numberOfPeople == "") {
    alert("Can't be zero number of people");
  }
});

document.querySelector("#tip-25").addEventListener("click", function () {
  numberOfPeople.push(document.querySelector("#number_people").value);
  bill.push(document.querySelector("#total_price").value);
  if (numberOfPeople[numberOfPeople.length - 1] != "") {
    tipAmount =
      Math.floor(
        ((bill[bill.length - 1] * 25) /
          100 /
          numberOfPeople[numberOfPeople.length - 1]) *
          100
      ) / 100;
    total =
      Math.floor(
        (bill[bill.length - 1] / numberOfPeople[numberOfPeople.length - 1] +
          tipAmount) *
          100
      ) / 100;
    document.querySelector("#tip_amount").innerText = `$${tipAmount}`;
    document.querySelector("#total").innerText = `$${total}`;
  } else if (numberOfPeople == "") {
    alert("Can't be zero number of people");
  }
});

document.querySelector("#tip-50").addEventListener("click", function () {
  numberOfPeople.push(document.querySelector("#number_people").value);
  bill.push(document.querySelector("#total_price").value);
  if (numberOfPeople[numberOfPeople.length - 1] != "") {
    tipAmount =
      Math.floor(
        ((bill[bill.length - 1] * 50) /
          100 /
          numberOfPeople[numberOfPeople.length - 1]) *
          100
      ) / 100;
    total =
      Math.floor(
        (bill[bill.length - 1] / numberOfPeople[numberOfPeople.length - 1] +
          tipAmount) *
          100
      ) / 100;
    document.querySelector("#tip_amount").innerText = `$${tipAmount}`;
    document.querySelector("#total").innerText = `$${total}`;
  } else if (numberOfPeople == "") {
    alert("Can't be zero number of people");
  }
});

document.querySelector("#custom").addEventListener("keypress", function (e) {
  numberOfPeople.push(document.querySelector("#number_people").value);
  customTip.push(document.querySelector("#custom").value);
  bill.push(document.querySelector("#total_price").value);
  if (e.key === "Enter") {
    if (customTip[customTip.length - 1] != "") {
      tipAmount =
        Math.floor(
          ((bill[bill.length - 1] * customTip[customTip.length - 1]) /
            100 /
            numberOfPeople[numberOfPeople.length - 1]) *
            100
        ) / 100;
      total =
        Math.floor(
          (bill[bill.length - 1] / numberOfPeople[numberOfPeople.length - 1] +
            tipAmount) *
            100
        ) / 100;
      document.querySelector("#tip_amount").innerText = `$${tipAmount}`;
      document.querySelector("#total").innerText = `$${total}`;
    } else if (customTip[customTip.length - 1] == "") {
      alert("Please Select or Enter Tip");
    } else if (numberOfPeople == "") {
      alert("Can't be zero number of people");
    }
  }
});

document.querySelector("#reset").addEventListener("click", function () {
  document.querySelector("#tip_amount").innerText = "$0.00";
  document.querySelector("#total").innerText = "$0.00";
  document.querySelector("#number_people").value = "";
  document.querySelector("#total_price").value = "";
  document.querySelector("#custom").value = "";
});
