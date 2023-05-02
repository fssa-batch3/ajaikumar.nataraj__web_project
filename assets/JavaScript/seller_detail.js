let Card = JSON.parse(localStorage.getItem("user_info"));
let table_card = document.createElement("table");

let th_tr1 = document.createElement("tr");
table_card.append(th_tr1);

let th1_tr = document.createElement("th");
th1_tr.innerText = "Name/ID";
th_tr1.append(th1_tr);

let th2_tr = document.createElement("th");
th2_tr.innerText = "Phone No";
th_tr1.append(th2_tr);

let th3_tr = document.createElement("th");
th3_tr.innerText = "Email";
th_tr1.append(th3_tr);

let th4_tr = document.createElement("th");
th4_tr.innerText = "Address";
th_tr1.append(th4_tr);
for (let i = 0; i < Card.length; i++) {
  let td_tr2 = document.createElement("tr");
  table_card.append(td_tr2);

  let td1_tr = document.createElement("td");
  td1_tr.innerText = Card[i]["FullName"];
  td_tr2.append(td1_tr);

  let td2_tr = document.createElement("td");
  td2_tr.innerText = Card[i]["Phone_number"];
  td_tr2.append(td2_tr);

  let td3_tr = document.createElement("td");
  td3_tr.innerText = Card[i]["Email"];
  td_tr2.append(td3_tr);

  let td4_tr = document.createElement("td");
  td4_tr.innerText = Card[i]["Home_Address"];
  td_tr2.append(td4_tr);

  document.querySelector(".table").append(table_card);
}
