let logIn = document.getElementById("form");
console.log(logIn);

let arr = [];

logIn.addEventListener("submit", (event) => {
  event.preventDefault();
  let defaultData = JSON.parse(localStorage.getItem("admin_info"));
  console.log(defaultData);

  let Email = document.getElementById("Email").value.toLowerCase().trim();
  let Password = document.getElementById("Password").value;

  let match = false;

  for (let i = 0; i < defaultData.length; i++) {
    if (
      Email == defaultData[i]["Email"] &&
      Password == defaultData[i]["Password"]
    ) {
      match = true;
      arr.push(defaultData[i]);
      window.localStorage.setItem(
        "admin_logIn",
        JSON.stringify(arr[0]["Email"])
      );
      break;
      // i = i + defaultData.length;
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
