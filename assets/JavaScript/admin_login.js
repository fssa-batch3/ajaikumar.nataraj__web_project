// get the inputs from the login page
let logIn = document.getElementById("form");
console.log(logIn);

let arr = [];

logIn.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    let getAdminInfo = JSON.parse(localStorage.getItem("admin_info"));
    console.log(getAdminInfo);

    // get the values by id
    let Email = document.getElementById("Email").value.toLowerCase().trim();
    let Password = document.getElementById("Password").value;

    // let match = false;

    // check the values in admin list
    for (let info of getAdminInfo) {
      if (Email == info["Email"] && Password == info["Password"]) {
        match = true;
        alert("Success");

        arr.push(info);

        // store the user's login details for further use
        window.localStorage.setItem(
          "admin_logIn",
          JSON.stringify(arr[0]["Email"])
        );
        window.location.href = "/pages/17-admin-index.html";
        break;
      } else {
        match = false;
        alert("Login credentials not correct");
      }
    }
  } catch (error) {
    console.error(error);
  }
});
function sign() {
  window.location.href = "/pages/16.adminsignin.html";
}
