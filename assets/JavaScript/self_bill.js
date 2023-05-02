// to get the upload details from the local storage
let Card = JSON.parse(localStorage.getItem("newly_added"));
let total = 0;

// creating table by java script
let table_card = document.createElement("table");

let th_tr1 = document.createElement("tr");
table_card.append(th_tr1);

let th1_tr = document.createElement("th");
th1_tr.innerText = "Products Name";
th_tr1.append(th1_tr);

let th2_tr = document.createElement("th");
th2_tr.innerText = "Quantity";
th_tr1.append(th2_tr);

let th4_tr = document.createElement("th");
th4_tr.innerText = "Price";
th_tr1.append(th4_tr);

let th3_tr = document.createElement("th");
th3_tr.innerText = "Total Amount";
th_tr1.append(th3_tr);

// for loop for creating the details
for (let i = 0; i < Card.length; i++) {
  let td_tr2 = document.createElement("tr");
  table_card.append(td_tr2);

  let td1_tr = document.createElement("td");
  td1_tr.innerText = Card[i]["Name"];
  td_tr2.append(td1_tr);
  console.log(Card);

  let td2_tr = document.createElement("td");
  td2_tr.innerText = Card[i]["Qty"] + " kg";
  td_tr2.append(td2_tr);

  let td4_tr = document.createElement("td");
  td4_tr.innerText = "Rs." + Card[i]["Price"];
  td_tr2.append(td4_tr);

  let td3_tr = document.createElement("td");
  td3_tr.innerText = "Rs. " + Card[i]["Price"] * Card[i]["Qty"];
  td_tr2.append(td3_tr);

  // creating the total amount by price and qty
  total += parseInt(Card[i]["Price"]) * parseInt(Card[i]["Qty"]);

  document.querySelector("table").append(table_card);
}

// to set the total amount
let total_value = document.getElementById("operoation");
total_value.append("₹" + total);

// to get the user's detail by comparing login email
const oneUser = JSON.parse(localStorage.getItem("logIn"));
const user_info = JSON.parse(localStorage.getItem("user_info"));
let select_user = user_info.find(function (event) {
  let customerEmail = event["Email"];
  if (user_info == customerEmail) {
    return true;
  } else if (oneUser == customerEmail) {
    return true;
  }
});

console.log(select_user);
// to get value from registration form
const phNo = document.getElementById("Phone_Number");
const userName = document.getElementById("First_name");
// const transport_DOB = document.getElementById("Pickup_date");
const Land_Address = document.getElementById("Land_Address");

// Compare the values
phNo.value = select_user["Phone_number"];
userName.value = select_user["FullName"];
// transport_DOB.value = select_user["transport_DOB"];
Land_Address.value = select_user["Land_Address"] || "";

// to replace the values
const form = document.getElementById("form");
form.addEventListener("change", function (event) {
  event.preventDefault();

  let FullName = document.getElementById("First_name").value;
  let Phone_number = document.getElementById("Phone_Number").value;
  // let transport_DOB = document.getElementById("Pickup_date").value;
  let Land_Address = document.getElementById("Land_Address").value;

  let newData = {
    FullName,
    Phone_number,
    // transport_DOB,
    Land_Address,
  };
  console.log(newData);

  // assign the changed value
  const combineData = Object.assign(select_user, newData);
  console.log(combineData);
  // alert("successfully changed");

  let findIndex = user_info.indexOf(select_user);
  user_info[findIndex] = combineData;
  localStorage.setItem("user_info", JSON.stringify(user_info));
});

function account() {
  window.location.href = "/pages/13.Acct.detail.html";
}
function profile() {
  window.location.href = "/pages/profile.html";
}
