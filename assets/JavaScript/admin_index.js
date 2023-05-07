// get the mail from logined user and check in the user's list
const oneUser = JSON.parse(localStorage.getItem("admin_logIn"));

const user_info = JSON.parse(localStorage.getItem("admin_info"));
// compare and check the list
let select_user = user_info.find(function (event) {
  let customerEmail = event["Email"];
  if (user_info == customerEmail) {
    return true;
  } else if (oneUser == customerEmail) {
    return true;
  }
});
// show the user's name in box
const name = document.getElementById("profile");

name.value = select_user["FullName"];

function customer() {
  window.location.href = "/pages/buyer.html";
}
function seller() {
  window.location.href = "/pages/seller.html";
}
function new_order() {
  window.location.href = "/pages/20-customer-order-list.html";
}
function new_upload() {
  window.location.href = "/pages/21-new-upload.html";
}
function delievered_orders() {
  window.location.href = "/pages/22-com-ord.html";
}
function picked_up_orders() {
  window.location.href = "/pages/23-picked-up-order.html";
}
function deliever_orders() {
  window.location.href = "/pages/24-inprogress-orders.html";
}
function pickup_orders() {
  window.location.href = "/pages/24-inprogress-pickup.html";
}
