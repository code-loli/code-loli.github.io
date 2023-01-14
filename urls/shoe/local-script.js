const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let query_param = params;

document.addEventListener("DOMContentLoaded", () => {
  const id_text = document.getElementById("id-here");

  if (query_param.id == null) window.history.back();

  id_text.innerHTML = query_param.id;
});
