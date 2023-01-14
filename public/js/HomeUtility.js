import globaldb, { formatter } from "./globaldb.js";

function initShoes() {
  const shoesSection = document.getElementById("shoes-section");
  //   shoesSection.innerHTML = "BRUHHHHHHH";

  fillSneaker();
}

function gotoSearch() {
  window.location.href = "/urls/search";
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Bruh");
  console.log("Loaded");
  initShoes();
});

function seeDetail() {
  console.log("Click image");
}

function fillSneaker() {
  const sneaker_container = document.getElementById("sneaker-container");

  let _content = "";

  const data = globaldb;

  for (let i = 0; i < data.shoes.length; i++) {
    if (data.shoes[i].category !== "basketball") continue;

    _content += `

  <div class="shoes-item">
    <img src="${data.shoes[i].url}" />
    <div class="shoe-item-desc sofia">
      <div>${data.shoes[i].sname}</div>
      <div>${formatter.format(data.shoes[i].price)}</div>
    </div>
  </div>

    
    `;
  }

  sneaker_container.innerHTML = _content;
}
