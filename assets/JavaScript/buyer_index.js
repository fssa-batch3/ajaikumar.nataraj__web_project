// compare the mail from login and user details array and get the logined email's object and take the name
const oneUser = JSON.parse(localStorage.getItem("buyer_logIn"));

const user_info = JSON.parse(localStorage.getItem("buyer_info"));
let select_user = user_info.find(function (event) {
  try {
    let customerEmail = event["Email"];
    if (user_info == customerEmail) {
      return true;
    } else if (oneUser == customerEmail) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
});

const name = document.getElementById("profile");

name.value = select_user["FullName"];

// submitForm();
// code for redirection of page
function submit() {
  window.location.href = "/pages/2.buy-login.html";
}
function fruit() {
  window.location.href = "/pages/5a-fruits.html";
}
function veg() {
  window.location.href = "/pages/5b-vegetables.html";
}
function coffee() {
  window.location.href = "/pages/5c-tea.html";
}
function grain() {
  window.location.href = "/pages/5d-grain.html";
}
function profile() {
  window.location.href = "/pages/profile_buy.html";
}
