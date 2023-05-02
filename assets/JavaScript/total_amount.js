// get detail from add to cart stored data
let Card = JSON.parse(localStorage.getItem("added_list"));
let total = 0;

console.log(Card);

const detail = JSON.parse(localStorage.getItem("added_list"));

// Card creating by using JavaScript
for (let i = 0; i <= Card.length; i++) {
  let findDetail = detail.find(function (event) {
    let id = event["ProductId"];
    if (Card[i]["ProductId"] == id) {
      return true;
    }
  });
  // console.log(Card[i]["Url"]);
  let div_card = document.createElement("div");
  div_card.setAttribute("class", "card_div");
  div_card.setAttribute("type", "button");
  div_card.setAttribute("id", "div");
  // div_card.setAttribute("id", Card[i]["id"]);
  // div_card.setAttribute("onclick", "card(this.id)");

  let fruit_name = document.createElement("input");
  fruit_name.setAttribute("value", Card[i]["Name"]);
  fruit_name.setAttribute("id", "pName");
  fruit_name.setAttribute("disabled", " ");
  div_card.append(fruit_name);

  let rupees = document.createElement("input");
  rupees.setAttribute("value", "Rs." + Card[i]["Price"] + " /kg");
  rupees.setAttribute("id", "pPrice");
  rupees.setAttribute("type", "text");
  rupees.setAttribute("disabled", " ");
  div_card.append(rupees);

  let input_value = document.createElement("input");
  input_value.setAttribute("value", Card[i]["bQty"] + " kg");
  // input_value.setAttribute("type", "number");
  input_value.setAttribute("width", "10px");
  input_value.setAttribute("id", "pQty");
  input_value.setAttribute("disabled", " ");
  div_card.append(input_value);

  let image = document.createElement("input");
  // console.log(Card[i]);
  image.setAttribute("value", "Rs." + Card[i]["Price"] * Card[i]["bQty"]);
  image.setAttribute("alt", "image");
  image.setAttribute("id", "pUrl");
  image.setAttribute("disabled", " ");
  div_card.append(image);

  let delete_product = document.createElement("button");
  delete_product.innerText = "Cancel";
  delete_product.setAttribute("id", "submit");
  delete_product.setAttribute("type", "submit");
  div_card.append(delete_product);

  // code for delete the product
  delete_product.addEventListener("click", function (event) {
    event.preventDefault();
    let addData = JSON.parse(localStorage.getItem("added_list"));
    let findIndex = detail.indexOf(findDetail);
    let msg = confirm(
      "Are you sure you want to remove this product from your cart"
    );
    if (msg !== true) {
      return;
    } else {
      detail.splice(findIndex, 1);
      localStorage.setItem("added_list", JSON.stringify(detail));
    }
  });

  // for total amount
  total += parseInt(Card[i]["Price"]) * parseInt(Card[i]["bQty"]);

  document.querySelector(".card_main").append(div_card);
}
// for get users details

// set place for show total amount
let total_value = document.getElementById("operoation");
total_value.append("₹" + total);

// to get details of the users for delivery ..
const oneUser = JSON.parse(localStorage.getItem("buyer_logIn"));

const user_info = JSON.parse(localStorage.getItem("buyer_info"));
let select_user = user_info.find(function (event) {
  let customerEmail = event["Email"];
  if (user_info == customerEmail) {
    return true;
  } else if (oneUser == customerEmail) {
    return true;
  }
});

console.log(select_user);
// to get value from delivery form
const phNo = document.getElementById("Phone_Number");
const userName = document.getElementById("First_name");
const Land_Address = document.getElementById("Land_Address");

// Compare the values

phNo.value = select_user["Phone_number"];
userName.value = select_user["FullName"];
Land_Address.value = select_user["Land_Address"] || " ";

// to replace the values
const form = document.getElementById("form");
form.addEventListener("change", function (event) {
  event.preventDefault();

  let FullName = document.getElementById("First_name").value;
  let Phone_number = document.getElementById("Phone_Number").value;
  let Land_Address = document.getElementById("Land_Address").value;

  let newData = {
    FullName,
    Phone_number,
    Land_Address,
  };
  console.log(newData);

  // code for change the delivery address
  const combineData = Object.assign(select_user, newData);
  console.log(combineData);

  let findIndex = user_info.indexOf(select_user);
  user_info[findIndex] = combineData;
  localStorage.setItem("buyer_info", JSON.stringify(user_info));
});

function order() {
  window.location.href = "/pages/8.payment-page.html";
}

function back() {
  window.location.href = "/pages/6.buy-2.html";
}
function profile() {
  window.location.href = "/pages/profile_buy.html";
}
