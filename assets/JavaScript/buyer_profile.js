const oneUser = JSON.parse(localStorage.getItem("buyer_logIn"));

const buyer_info = JSON.parse(localStorage.getItem("buyer_info"));
let select_user = buyer_info.find(function (event) {
  let customerEmail = event["Email"];
  if (buyer_info == customerEmail) {
    return true;
  } else if (oneUser == customerEmail) {
    return true;
  }
});

console.log(select_user);
// to get value from registration form
const email = document.getElementById("Email");
const phNo = document.getElementById("Phone_Number");
const userName = document.getElementById("First_name");
const password = document.getElementById("password");
const DOB = document.getElementById("DOB");
const transport_DOB = document.getElementById("DOB");
const Home_Address = document.getElementById("Home_Address");
const District = document.getElementById("District");
const gender = document.getElementById("gender");
const farmer = document.getElementById("farmer");
const Aadhar_number = document.getElementById("Aadhar_number");
const state = document.getElementById("state");
const country = document.getElementById("country");

// // Compare the values

email.value = select_user["Email"];
phNo.value = select_user["Phone_number"];
userName.value = select_user["FullName"];
password.value = select_user["Password"];
DOB.value = select_user["DOB"];
transport_DOB.value = select_user["DOB"];
Home_Address.value = select_user["Home_Address"] || "";
District.value = select_user["District"] || "";
gender.value = select_user["gender"] || "";
farmer.value = select_user["farmer"] || "";
Aadhar_number.value = select_user["Aadhar_number"] || "";
state.value = select_user["state"] || "";
country.value = select_user["country"] || "";

// to replace the values
const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  //   let FullName = document.getElementById("First_name").value;
  //   let Email = document.getElementById("Email").value;
  //   let Phone_number = document.getElementById("Phone_Number").value;
  //   let Password = document.getElementById("password").value;
  //   let DOB = document.getElementById("DOB").value;
  //   let transport_DOB = document.getElementById("DOB").value;
  //   let Home_Address = document.getElementById("Home_Address").value;
  //   let District = document.getElementById("District").value;
  //   let gender = document.getElementById("gender").value;
  //   let farmer = document.getElementById("farmer").value;
  //   let Aadhar_number = document.getElementById("Aadhar_number").value;
  //   let state = document.getElementById("state").value;
  //   let country = document.getElementById("country").value;

  //   let newData = {
  //     FullName,
  //     Email,
  //     Phone_number,
  //     Password,
  //     DOB,
  //     transport_DOB,
  //     Home_Address,
  //     District,
  //     gender,
  //     farmer,
  //     Aadhar_number,
  //     state,
  //     country,
  //   };
  //   console.log(newData);

  //   // assign the value to

  //   const combineData = Object.assign(select_user, newData);
  //   console.log(combineData);
  //   alert("successfully changed");

  //   let findIndex = buyer_info.indexOf(select_user);
  //   buyer_info[findIndex] = combineData;
  //   localStorage.setItem("buyer_info", JSON.stringify(buyer_info));
});

function change() {
  window.location.href = "/pages/profileedit_buy.html";
}

// delete option in the page

let delete_user = document.getElementById("delete");
delete_user.addEventListener("click", function (event) {
  event.preventDefault();
  let indexDel = buyer_info.indexOf(select_user);
  let msg = confirm("Are you sure you want to delete this account");
  if (msg !== true) {
    return;
  } else {
    buyer_info.splice(indexDel, 1);
    console.log(buyer_info);
    localStorage.setItem("buyer_info", JSON.stringify(buyer_info));
    window.location.href = "/pages/1.signin.html";
  }
});

let logout_user = document.getElementById("logout");
logout_user.addEventListener("click", function (event) {
  event.preventDefault();
  let indexDel = buyer_info.indexOf(select_user);
  let msg = confirm("Are you sure you want to logout this account");
  if (msg !== true) {
    return;
  } else {
    window.location.href = "/pages/2.Login.html";
  }
});

function back() {
  window.location.href = "/pages/4.index.html";
}

// to show and hide password
const togglePassword = document.querySelector("#togglePassword");

const change = document.querySelector("#password");

togglePassword.addEventListener("click", () => {
  const type = change.getAttribute("type") === "password" ? "text" : "password";

  change.setAttribute("type", type);

  this.classList.toggle("bi-eye");
});
