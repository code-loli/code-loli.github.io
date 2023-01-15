import data, { formatter } from "../../public/js/globaldb.js";
import { init_header, init_footer } from "../../public/js/globalfunc.js";

document.addEventListener("DOMContentLoaded", () => {
  init_header();
  init_footer();
  refresh(data);
  var input_text = document.getElementById("input-text");
  input_text.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      console.log("Searching");
      search();
    }
  });
});

var is_searching = false;

function similiar(string, keyword) {
  for (let i = 0; i < string.length; i++) {
    let tempString = "";

    for (let j = 0; j < keyword.length; j++) {
      tempString += string.charAt(i + j);
    }

    if (tempString === keyword) return true;
  }

  return false;
}

function search() {
  is_searching = true;
  const searchResult = [];

  const keyword = document.getElementsByClassName("input-text")[0].value;

  for (let i = 0; i < data.shoes.length; i++) {
    if (similiar(data.shoes[i].sname, keyword) === true) {
      searchResult.push(data.shoes[i]);
    }
  }

  const _result = {
    shoes: Array.from(searchResult),
  };

  const res_text = document.getElementById("res-text");

  res_text.innerHTML = "Result(s) of " + keyword;

  refresh(_result);
}

function refresh(_data) {
  const container = document.getElementById("result-container");

  let _content = "";

  for (let i = 0; i < _data.shoes.length; i++) {
    _content += `

    <div class="shoes-item">
    <img src="${_data.shoes[i].url}" onclick='window.location.href="/urls/shoe/?id=${_data.shoes[i].id}" ' />
    <div class="shoe-item-desc sofia">
      <div>${_data.shoes[i].sname}</div>
      <div>${formatter.format(_data.shoes[i].price)}</div>
    </div>
  </div>

    
    `;
  }

  container.innerHTML = _content;
}
