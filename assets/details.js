// for (let i = 0; i <= Card.length; i++) {
//   let div_card = document.createElement("div");
//   div_card.setAttribute("class", "card");

//   let card = document.createElement("div");
//   card.setAttribute("class", "img");
//   div_card.append(card);

//   let image = document.createElement("img");
//   image.setAttribute("src", Card[i]["Image"]);
//   image.setAttribute("alt", Card[i]["alt"]);
//   image.setAttribute("width", Card[i]["width"] + "px");
//   card.append(image);

//   let detail = document.createElement("div");
//   detail.setAttribute("class", "detail");
//   div_card.append(detail);

//   let name = document.createElement("p");
//   name.innerText = "Name :" + Card[i]["Name"];
//   detail.append(name);

//   let price = document.createElement("p");
//   price.innerText = "Price :" + Card[i]["Price"] + "/kg";
//   detail.append(price);

//   let type = document.createElement("p");
//   type.innerText = "Type :" + Card[i]["Type"];
//   detail.append(type);

//   let place = document.createElement("p");
//   place.innerText = "Place :" + Card[i]["Place"];
//   detail.append(place);

//   let description = document.createElement("p");
//   description.innerText = "Description :" + Card[i]["Description"];
//   detail.append(description);

//   let input_value = document.createElement("input");
//   input_value.setAttribute("Qty" + "type", "number");
//   input_value.setAttribute("id", "quantity");
//   detail.append(input_value);

//   document.querySelector("body").append(div_card);

//   let footer = document.createElement("footer");
//   footer.setAttribute("class", "footer");

//   let buy_btn = document.createElement("button");
//   buy_btn.innerText = "BUY NOW";
//   footer.append(buy_btn);

//   let cart_btn = document.createElement("button");
//   cart_btn.innerText = "ADD CART";
//   footer.append(cart_btn);

//   document.querySelector("body").append(footer);
// }

//js tabs code start
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  document.getElementById("default").style.display = "none";
}

//return to home tabs function
function homeon() {
  document.getElementById("default").style.display = "block";
  document.getElementById("my-courses").style.display = "none";
  document.getElementById("blogs").style.display = "none";
  document.getElementById("latest-courses").style.display = "none";
  document.getElementById("youtube-videos").style.display = "none";
  document.getElementById("free-courses").style.display = "none";
  document.getElementById("live-courses").style.display = "none";
}

//blogs data JSON
const blogs_data = [
  {
    img: "https://tradeciety.com/hubfs/Imported_Blog_Media/947cUtXZwI-HD.jpeg",
    blog_title: "How Professional Traders use..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #forex",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/Folie13.png",
    blog_title: "6 Forex Price Action Trading..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #forex",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/cuphandle%20%282%29.png",
    blog_title: "Learn How To Use The Stocha..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #money",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/Imported_Blog_Media/Stoch_MA-1.png",
    blog_title: "3 Great Reversal Strategies..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #money #Indicator",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/XAUUSD_2023-01-11_11-36-40.png",
    blog_title: "8 must know PRICE ACTION..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #money",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/Imported_Blog_Media/OvBP_gJnU9E-HD-1.jpeg",
    blog_title: "Start Trading like a Pro with..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: "#PriceAction",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/Imported_Blog_Media/aDih3RZkt9I-HD-1.jpeg",
    blog_title: "How to Trade STRONG Trends..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #money",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/Imported_Blog_Media/OY-RwsKwm2o-HD.jpeg",
    blog_title: "Ultimate free Price Action..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #money",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/Imported_Blog_Media/JDpYMDGawMI-HD.jpeg",
    blog_title: "Chart Pattern Trading – Full..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #money",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/Imported_Blog_Media/Ethcv9JS4Zs-HD.jpeg",
    blog_title: "9 best Day Trading tips to use..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #money",
    blog_cost: "Read for FREE",
  },
];

//blogs data card create
let course_div4;
for (i = 0; i < blogs_data.length; i++) {
  course_div4 = document.createElement("div");
  course_div4.setAttribute("class", "first-course3");
  course_div4.setAttribute(
    "href",
    "details.html?name=" + blogs_data[i]["blog_title"]
  );
  course_div4.innerHTML = `<div>
                       <img class="course-img" src=${blogs_data[i]["img"]} alt="">
                   </div>
                   <div>
                       <h3 class="course-title">${blogs_data[i]["blog_title"]}</h3>
                       <div class="course-details">
                           <p class="course-timing">${blogs_data[i]["blog_timing"]}</p>
                           <p class="course-ln">${blogs_data[i]["blog_language"]}</p>
                           <p class="course-enrolled">${blogs_data[i]["blog_hashtag"]}</p>
                       </div>
                    <h3 class="course-cost">${blogs_data[i]["blog_cost"]}</h3>
                   </div> `;
  //  console.log(course_div4);

  document.querySelector(".scroll-courses-div4").append(course_div4);

  //search query for search bar code start

  let searchbar = document.getElementById("searchbar");
  const cards = document.getElementsByClassName("first-course3");

  searchbar.addEventListener("input", () => {
    for (let i = 0; i < cards.length; i++) {
      const element = cards[i];
      if (
        element.innerHTML.toLowerCase().includes(searchbar.value.toLowerCase())
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  });
}

//search query for search bar code end

// All courses card create

const course_data = JSON.parse(localStorage.getItem("course_data"));

let course_div_stocks;

for (i = 0; i < course_data.length; i++) {
  course_div_stocks = document.createElement("div");
  course_div_stocks.setAttribute("class", "first-course2-stocks");
  // course_div_stocks.setAttribute("href","details.html?name=" + course_data[i]["title"]);
  let cost = "";
  let discount = "";

  if (course_data[i]["cost"] === "learn for free") {
    cost += " ";
    discount += 100;
  } else {
    cost += "₹" + " ";
    discount +=
      100 - (course_data[i]["cost"] / course_data[i]["old_cost"]) * 100;
  }
  course_div_stocks.innerHTML = `
                  <img class="bookmark-icon" id="bookmark-icon" onclick="toggle(${
                    course_data[i]["id"]
                  })" src=${course_data[i]["bookmark_img"]} alt="">
                  <div>
                                   <img class="course-img-stocks" src=${
                                     course_data[i]["img"]
                                   } alt="">
                               </div>
                               <a class="card-a" href="details.html?name=${
                                 course_data[i]["title"]
                               }">
                                   <h3 class="course-title">${
                                     course_data[i]["title"]
                                   }</h3>
                                   <div class="course-details">
                                       <p class="course-timing">${
                                         "<b>Dur :</b>" +
                                         course_data[i]["timing"]
                                       }</p>
                                       <p class="course-ln">&emsp;${
                                         "<b>Lang : </b>" +
                                         course_data[i]["language"]
                                       }</p>
                                       <p class="course-enrolled">&emsp;${
                                         "<b>Enr :</b>" +
                                         course_data[i]["enrolled"] +
                                         " " +
                                         "Enrolled"
                                       }</p>
                                   </div>
                                   <div class="flexcost">
                                    <h3 class="course-cost">${
                                      cost + " " + course_data[i]["cost"]
                                    }</h3>
                                <strike class="course-oldcost" >${
                                  "₹" + " " + course_data[i]["old_cost"]
                                }</strike>
                                <p class="course-discount" >${
                                  Math.floor(discount) + " " + "% discount"
                                }</p>
                                </div>
                               </div> `;
  console.log(course_div_stocks);

  document
    .querySelector(".scroll-courses-div-stocks")
    .append(course_div_stocks);
}

//bookmark icon toggle button function

function toggle(id) {
  let get_click_obj;
  console.log(id);

  //find clicked course
  get_click_obj = course_data.find((e) => e.id === id);
  console.log(get_click_obj);

  //adding key bookmark = true
  get_click_obj.bookmark = true;

  //create object to assign
  let bookmark_obj = {
    bookmark_img: "../assets/images/icons8-add-bookmark-50_bookmarked.png",
  };

  //assign this source with previous source
  let assignObj = Object.assign(get_click_obj, bookmark_obj);
  console.log(assignObj);

  //find clicked object index
  let index = course_data.indexOf(get_click_obj);
  console.log(index);

  //assign new value to old one
  course_data[index] = assignObj;

  //set new value to localstorage
  localStorage.setItem("course_data", JSON.stringify(course_data));

  console.log(get_click_obj);

  if (localStorage.getItem("bookmarks") != null) {
    //arrary already exist
    get_click_obj_arr = JSON.parse(localStorage.getItem("bookmarks"));

    //bookmark local parse array
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    console.log(bookmarks);

    //check for duplicates
    const already_exist_obj = bookmarks.find((e) => e.id === get_click_obj.id);
    console.log(already_exist_obj);

    if (already_exist_obj == undefined) {
      get_click_obj.bookmark = true;
      get_click_obj_arr.push(get_click_obj);
      localStorage.setItem("bookmarks", JSON.stringify(get_click_obj_arr));
      alert("course Added to Bookmarks");
      window.location.href = "learn.html";
    } else {
      alert("course Already Bookmarked");
      window.location.href = "learn.html";
    }
  } else {
    //create bookmark array
    let get_click_obj_arr = [];

    get_click_obj.bookmark = true;
    get_click_obj_arr.push(get_click_obj);

    localStorage.setItem("bookmarks", JSON.stringify(get_click_obj_arr));
    alert("course Added to Bookmarks...");
  }
}
