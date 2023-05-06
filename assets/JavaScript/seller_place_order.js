// to get the upload details from the local storage
let Card = JSON.parse(localStorage.getItem("newly_added"));
console.log(Card);

const detail = JSON.parse(localStorage.getItem("newly_added"));

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

  let image = document.createElement("img");
  // console.log(Card[i]);
  image.setAttribute("src", Card[i]["Url"]);
  image.setAttribute("alt", "image");
  image.setAttribute("id", "pUrl");
  div_card.append(image);

  let fruit_name = document.createElement("input");
  fruit_name.setAttribute("value", Card[i]["Name"]);
  fruit_name.setAttribute("id", "pName");
  fruit_name.setAttribute("disabled", " ");
  div_card.append(fruit_name);

  let rupees = document.createElement("input");
  rupees.setAttribute("value", Card[i]["Price"]);
  rupees.setAttribute("id", "pPrice");
  rupees.setAttribute("type", "text");
  div_card.append(rupees);

  let input_value = document.createElement("input");
  input_value.setAttribute("value", Card[i]["Qty"]);
  // input_value.setAttribute("type", "number");
  input_value.setAttribute("width", "10px");
  input_value.setAttribute("id", "pQty");
  div_card.append(input_value);

  let edit = document.createElement("button");
  edit.innerText = "Edit";
  edit.setAttribute("id", "submit");
  edit.setAttribute("type", "submit");
  div_card.append(edit);

  let button = document.createElement("button");
  button.innerText = "Delete";
  button.setAttribute("id", "delete");
  button.setAttribute("value", "delete");
  div_card.append(button);

  // edit the price or qty for the products
  edit.addEventListener("click", function (event) {
    event.preventDefault();

    let changeData = {
      Name: fruit_name.value,
      Price: rupees.value,
      Qty: input_value.value,
    };
    console.log(changeData);

    const assignData = Object.assign(findDetail, changeData);

    let findIndex = detail.indexOf(findDetail);
    detail[findIndex] = assignData;
    localStorage.setItem("newly_added", JSON.stringify(detail));
    alert("Succesfully changed");
  });

  // to delete the product by clicking the delete button
  button.addEventListener("click", function (event) {
    event.preventDefault();
    let deleteData = JSON.parse(localStorage.getItem("deleted_list"));
    let findIndex = detail.indexOf(findDetail);
    let msg = confirm("Are you sure you want to delete this product");
    if (msg !== true) {
      return;
    } else {
      if (deleteData === null) {
        let array = [];
        array.push(Card[findIndex]);
        localStorage.setItem("deleted_list", JSON.stringify(array));
      } else {
        deleteData.push(Card[findIndex]);
        localStorage.setItem("deleted_list", JSON.stringify(deleteData));
      }

      detail.splice(findIndex, 1);
      localStorage.setItem("newly_added", JSON.stringify(detail));
    }
    location.reload();
  });

  document.querySelector(".card_main").append(div_card);
}

// set the edited details in the individual object
const pname = document.getElementById("pName");
const price = document.getElementById("pPrice");
const qty = document.getElementById("pQty");

pname.value = detail["Name"];
price.value = detail["Price"];
qty.value = detail["Qty"];

const div = document.getElementById("div");
div.addEventListener("submit", function (event) {
  event.preventDefault();
  let Name = document.getElementById("pName").value;
  let Price = document.getElementById("pPrice").value;
  let Qty = document.getElementById("pQty").value;

  let changeData = {
    Name,
    Price,
    Qty,
  };
});

function deleted() {
  window.location.href = "/pages/10.deleted_list.html";
}
function bill() {
  window.location.href = "/pages/12.bill.html";
}
function profile() {
  window.location.href = "/pages/profile.html";
}
