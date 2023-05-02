let Card = JSON.parse(localStorage.getItem("user_info"));

Card.sort((a, b) => b.points - a.points);

let table_card = document.createElement("table");
table_card.setAttribute("id", "leaderboard");

let th_tr1 = document.createElement("tr");
table_card.append(th_tr1);

let th1_tr = document.createElement("th");
th1_tr.innerText = "Rank";
th_tr1.append(th1_tr);

let th5_tr = document.createElement("th");
th5_tr.innerText = "Points";
th_tr1.append(th5_tr);

let th2_tr = document.createElement("th");
th2_tr.innerText = "User ID";
th_tr1.append(th2_tr);

let th3_tr = document.createElement("th");
th3_tr.innerText = "Name";
th_tr1.append(th3_tr);

let th4_tr = document.createElement("th");
th4_tr.innerText = "Phone Number";
th_tr1.append(th4_tr);
for (let i = 0; i < Card.length; i++) {
  let td_tr2 = document.createElement("tr");
  table_card.append(td_tr2);

  let td0_tr = document.createElement("td");
  // td0_tr.setAttribute("value", "li") || "ol";
  td0_tr.innerText = i + 1;
  td_tr2.append(td0_tr);

  let td1_tr = document.createElement("td");
  td1_tr.innerText = Card[i]["points"] || "0";
  td_tr2.append(td1_tr);

  let td2_tr = document.createElement("td");
  td2_tr.innerText = Card[i]["id"];
  td_tr2.append(td2_tr);

  let td3_tr = document.createElement("td");
  td3_tr.innerText = Card[i]["FullName"];
  td_tr2.append(td3_tr);

  let td4_tr = document.createElement("td");
  td4_tr.innerText = Card[i]["Phone_number"];
  td_tr2.append(td4_tr);

  document.querySelector(".table").append(table_card);
}

let leaderboardHTML = "<ol>";

leaderboardHTML += "</ol>";

// function for redirect pages

function sell_sign() {
  window.location.href = "/pages/1.signin.html";
}
function sell_login() {
  window.location.href = "/pages/2.Login.html";
}
function buy_sign() {
  window.location.href = "/pages/1.buy-signin.html";
}
function buy_login() {
  window.location.href = "/pages/2.buy-login.html";
}
function home() {
  window.location.href = "/index.html";
}
function admin() {
  window.location.href = "/pages/16.adminsignin.html";
}
function review() {
  window.location.href = "/pages/review.html";
}
function about() {
  window.location.href = "/pages/Aboutus.html";
}
function worker() {
  window.location.href = "/pages/worker_login.html";
}
function buyer() {
  window.location.href = "/pages/leaderboard_buyer.html";
}
