for (let i = 0; i <= Card.length; i++) {
  let div_card = document.createElement("div");
  div_card.setAttribute("class", "card");

  let card = document.createElement("div");
  card.setAttribute("class", "img");
  div_card.append(card);

  let image = document.createElement("img");
  image.setAttribute("src", Card[i]["Image"]);
  image.setAttribute("alt", Card[i]["alt"]);
  image.setAttribute("width", Card[i]["width"] + "px");
  card.append(image);

  let detail = document.createElement("div");
  detail.setAttribute("class", "detail");
  div_card.append(detail);

  let name = document.createElement("p");
  name.innerText = "Name :" + Card[i]["Name"];
  detail.append(name);

  let price = document.createElement("p");
  price.innerText = "Price :" + Card[i]["Price"] + "/kg";
  detail.append(price);

  let type = document.createElement("p");
  type.innerText = "Type :" + Card[i]["Type"];
  detail.append(type);

  let place = document.createElement("p");
  place.innerText = "Place :" + Card[i]["Place"];
  detail.append(place);

  let description = document.createElement("p");
  description.innerText = "Description :" + Card[i]["Description"];
  detail.append(description);

  let input_value = document.createElement("input");
  input_value.setAttribute("Qty" + "type", "number");
  input_value.setAttribute("id", "quantity");
  detail.append(input_value);

  document.querySelector("body").append(div_card);

  let footer = document.createElement("footer");
  footer.setAttribute("class", "footer");

  let buy_btn = document.createElement("button");
  buy_btn.innerText = "BUY NOW";
  footer.append(buy_btn);

  let cart_btn = document.createElement("button");
  cart_btn.innerText = "ADD CART";
  footer.append(cart_btn);

  document.querySelector("body").append(footer);
}
