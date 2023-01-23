import globaldb, { formatter } from "./globaldb.js";
import { init_header } from "./globalfunc.js";

function initShoes() {
  fill_shoes("sneaker", "sneaker-container");
  fill_shoes("sport", "sport-container");
  fill_shoes("hitop", "hitop-container");
  fill_shoes("basketball", "basket-container");
  fill_shoes("highheels", "highheels-container");
}

function gotoSearch() {
  window.location.href = "/urls/search";
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Bruh");
  console.log("Loaded");
  initShoes();
  init_header();
});

function seeDetail() {
  console.log("Click image");
}

function fill_shoes(type, containerName) {
  const sneaker_container = document.getElementById(containerName);

  let _content = "";

  const data = globaldb;

  for (let i = 0; i < data.shoes.length; i++) {
    if (data.shoes[i].category !== type) continue;

    _content += `

  <div class="shoes-item">
    <img src="${data.shoes[i].url}" onclick="window.location.href='./urls/shoe/?id=${data.shoes[i].id}' " />
    <div class="shoe-item-desc sofia">
      <div>${data.shoes[i].sname}</div>
      <div style="height:fit-content">${formatter.format(data.shoes[i].price)}</div>
    </div>
  </div>

    
    `;
  }

  sneaker_container.innerHTML = _content;
}
