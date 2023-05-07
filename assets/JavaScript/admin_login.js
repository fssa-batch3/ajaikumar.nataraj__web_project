// get the inputs from the login page
let logIn = document.getElementById("form");
console.log(logIn);

let arr = [];

logIn.addEventListener("submit", (event) => {
  event.preventDefault();
  let getAdminInfo = JSON.parse(localStorage.getItem("admin_info"));
  console.log(getAdminInfo);

  // get the values by id
  let Email = document.getElementById("Email").value.toLowerCase().trim();
  let Password = document.getElementById("Password").value;

  let match = false;

  // check the values in admin list
  for (let i = 0; i < getAdminInfo.length; i++) {
    if (
      Email == getAdminInfo[i]["Email"] &&
      Password == getAdminInfo[i]["Password"]
    ) {
      match = true;
      arr.push(getAdminInfo[i]);

      // store the user's login details for further use
      window.localStorage.setItem(
        "admin_logIn",
        JSON.stringify(arr[0]["Email"])
      );
      break;
    } else {
      match = false;
    }
  }

  if (match == true) {
    alert("Success");

    window.location.href = "/pages/17-admin-index.html";
  } else {
    alert("Login credentials not correct");
  }
});
function sign() {
  window.location.href = "/pages/16.adminsignin.html";
}
