let Card = [
  {
    Image: "../assets/image/apple.jpg",
    Name: "Apple",
    alt: "Apple",
    Price: 140,
    width: 100,
    Type: "Kashmir Reddish Apple",
    Place: "Pulwama district, Kashmir",
    Description:
      "It is a fresh and organic apple from pulwama district in kashmir",
  },
  {
    Image: "../assets/image/orange.jpg",
    Name: "Orange",
    alt: "orange",
    Price: 120,
    width: 95,
    Type: "Nagpur Santra",
    Place: "Nagpur, Maharashtra",
    Description:
      "It is a fresh and organic orange from Nagpur district in Maharashtra",
  },
  {
    Image: "../assets/image/banana.webp",
    Name: "Banana",
    alt: "banana",
    Price: 50,
    width: 130,
    Type: "Poovan Banana",
    Place: "Coimbatore, Tamil nadu",
    Description:
      "It is a fresh and organic Banana from Coimbatore district in Tamil nadu",
  },
  {
    Image: "../assets/image/lemons.webp",
    Name: "Lemon",
    alt: "lemon",
    Price: 100,
    width: 130,
    Type: "Malta Lemon",
    Place: "Puliangudi, Thirunelveli, Tamilnadu",
    Description:
      "It is a fresh and organic Lemon from Thirunelveli district in Tamilnadu",
  },
  {
    Image: "../assets/image/papaya.jpg",
    Name: "Papaya",
    alt: "papaya",
    Price: 30,
    width: 62,
    Type: "Arka Surya",
    Place: "Madurai",
    Description:
      "It is a fresh and organic Papaya from Madurai district in Tamilnadu",
  },
  {
    Image: "../assets/image/Guava.jpg",
    Name: "Guava",
    alt: "guava",
    Price: 150,
    width: 130,
    Type: "Pink Guava",
    Place: "Ariyalur, Tamilnadu",
    Description:
      "It is a fresh and organic Guava from Ariyalur district in Tamilnadu",
  },
];

for (let i = 0; i <= Card.length; i++) {
  let div_card = document.createElement("div");
  div_card.setAttribute("class", "full_card");
  div_card.setAttribute("type", "button");
  div_card.setAttribute("onclick", "card()");

  let image = document.createElement("img");
  image.setAttribute("src", Card[i]["Image"]);
  image.setAttribute("alt", Card[i]["alt"]);
  image.setAttribute("width", Card[i]["width"] + "px");
  div_card.append(image);

  let fruit_name = document.createElement("p");
  fruit_name.innerText = Card[i]["Name"];
  div_card.append(fruit_name);

  let rupees = document.createElement("p");
  rupees.innerText = Card[i]["Price"] + "/kg";
  div_card.append(rupees);

  let input_value = document.createElement("input");
  input_value.setAttribute("class", "bar");
  input_value.setAttribute("type", "number");
  input_value.setAttribute("width", "10px");
  input_value.setAttribute("id", "quantity");
  div_card.append(input_value);

  const a = document.createElement("a");
  a.setAttribute("href", "../pages/6.buy-2.html?Name" + Card[i]["Name"]);
  div_card.append(a);

  let buttons = document.createElement("button");
  buttons.setAttribute("class", "button");
  buttons.innerText = "ADD CART";
  a.append(buttons);

  document.querySelector("section.main-1").append(div_card);
}

function fruit() {
  window.location.href = "/pages/5a-fruits.html";
}
function vegetable() {
  window.location.href = "";
}
function coffee() {
  window.location.href = "";
}
function grain() {
  window.location.href = "";
}

function card() {
  window.location.href = "/pages/detail.html";
}

function back() {
  window.location.href = "/pages/4.index.html";
}

function okay() {
  window.location.href = "/pages/6.buy-2.html";
}
