const inputDate = document.getElementById("DOB");
const today = new Date();
today.setFullYear(today.getFullYear() - 18);
const minDate = today.toISOString().split("T")[0];
inputDate.setAttribute("max", minDate);

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
const email = document.getElementById("Email");
const phNo = document.getElementById("Phone_Number");
const userName = document.getElementById("First_name");
const password = document.getElementById("password");
const DOB = document.getElementById("DOB");
const transport_DOB = document.getElementById("DOB");
const Home_Address = document.getElementById("Home_Address");
const Land_Address = document.getElementById("Land_Address");
const gender = document.getElementById("gender");
const farmer = document.getElementById("farmer");
const Aadhar_number = document.getElementById("Aadhar_number");
const state = document.getElementById("state");
const country = document.getElementById("country");

// Compare the values

email.value = select_user["Email"];
phNo.value = select_user["Phone_number"];
userName.value = select_user["FullName"];
password.value = select_user["Password"];
DOB.value = select_user["DOB"];
transport_DOB.value = select_user["DOB"];
Home_Address.value = select_user["Home_Address"] || "";
Land_Address.value = select_user["Land_Address"] || "";
gender.value = select_user["gender"] || "";
farmer.value = select_user["farmer"] || "";
Aadhar_number.value = select_user["Aadhar_number"] || "";
state.value = select_user["state"] || "";
country.value = select_user["country"] || "";

// to replace the values
const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let FullName = document.getElementById("First_name").value;
  // let Email = document.getElementById("Email").value;
  let Phone_number = document.getElementById("Phone_Number").value;
  let Password = document.getElementById("password").value;
  let DOB = document.getElementById("DOB").value;
  let transport_DOB = document.getElementById("DOB").value;
  let Home_Address = document.getElementById("Home_Address").value;
  let Land_Address = document.getElementById("Land_Address").value;
  let gender = document.getElementById("gender").value;
  let farmer = document.getElementById("farmer").value;
  let Aadhar_number = document.getElementById("Aadhar_number").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;

  let newData = {
    FullName,
    // Email,
    Phone_number,
    Password,
    DOB,
    transport_DOB,
    Home_Address,
    Land_Address,
    gender,
    farmer,
    Aadhar_number,
    state,
    country,
  };
  console.log(newData);

  // assign the value to

  const combineData = Object.assign(select_user, newData);
  console.log(combineData);
  alert("successfully changed");

  let findIndex = user_info.indexOf(select_user);
  user_info[findIndex] = combineData;
  localStorage.setItem("user_info", JSON.stringify(user_info));
  // window.location.href = "/pages/profile.html";
  window.history.back();
});

// delete option in the page

let delete_user = document.getElementById("delete");
delete_user.addEventListener("click", function (event) {
  event.preventDefault();
  let indexDel = user_info.indexOf(select_user);
  let msg = confirm("Are you sure you want to delete this account");
  if (msg !== true) {
    return;
  } else {
    user_info.splice(indexDel, 1);
    console.log(user_info);
    localStorage.setItem("user_info", JSON.stringify(user_info));
    window.location.href = "/pages/1.signin.html";
  }
});

let logout_user = document.getElementById("logout");
logout_user.addEventListener("click", function (event) {
  event.preventDefault();
  let indexDel = user_info.indexOf(select_user);
  let msg = confirm("Are you sure you want to logout this account");
  if (msg !== true) {
    return;
  } else {
    window.location.href = "/pages/2.Login.html";
  }
});
