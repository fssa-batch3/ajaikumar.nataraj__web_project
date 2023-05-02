// to get id of form
let buyer_logIn = document.getElementById("form");
console.log(buyer_logIn);

let arr = [];

// function for get value from form
buyer_logIn.addEventListener("submit", (event) => {
  event.preventDefault();

  // get details from local storage
  let defaultData = JSON.parse(localStorage.getItem("buyer_info"));
  console.log(defaultData);

  // get value from form
  let Email = document.getElementById("Email").value.toLowerCase().trim();
  let Password = document.getElementById("Password").value;

  let match = false;

  // compare the values
  for (let i = 0; i < defaultData.length; i++) {
    if (
      Email == defaultData[i]["Email"] &&
      Password == defaultData[i]["Password"]
    ) {
      match = true;
      arr.push(defaultData[i]);
      window.localStorage.setItem(
        "buyer_logIn",
        JSON.stringify(arr[0]["Email"])
      );
      break;
    } else {
      match = false;
    }
  }

  // details are same move to next page
  if (match == true) {
    alert("Success");

    window.location.href = "/pages/4.index.html";
  } else {
    alert("Login credentials not correct");
  }
});

function sign() {
  window.location.href = "/pages/1.buy-signin.html";
}
