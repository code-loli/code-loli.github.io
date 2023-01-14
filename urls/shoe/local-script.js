import globaldb from "../../public/js/globaldb.js";

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let query_param = params;

document.addEventListener("DOMContentLoaded", () => {
  const id_text = document.getElementById("id-here");

  if (query_param.id == null) window.history.back();

  // id_text.innerHTML = query_param.id;

  init_page();
});

function init_page() {
  console.log(globaldb);

  let shoe_data = {};

  for (let i = 0; i < globaldb.shoes.length; i++) {
    if (globaldb.shoes[i].id != query_param.id) continue;
    shoe_data = globaldb.shoes[i];
    break;
  }

  console.log(shoe_data);

  const image_tag = document.getElementById("product-image");
  const title_tag = document.getElementById("product-title");
  image_tag.src = shoe_data.url;
  title_tag.innerHTML = shoe_data.sname;
}
