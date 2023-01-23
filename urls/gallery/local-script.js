import data, { formatter } from "../../public/js/globaldb.js";
import { init_header, init_footer } from "../../public/js/globalfunc.js";

document.addEventListener("DOMContentLoaded", () => {
  init_header();
  init_footer();
  refresh(data);
});

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
