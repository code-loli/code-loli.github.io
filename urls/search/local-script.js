const data = {
  shoes: [
    {
      url: "../../public/images/BB1.jpg",
      category: "basketball",
      sname: "Basketball 1",
      price: 1000000,
    },
    {
      url: "../../public/images/BB2.jpg",
      category: "basketball",
      sname: "Basketball 1",
      price: 1000000,
    },
    {
      url: "../../public/images/BB3.jpg",
      category: "basketball",
      sname: "Basketball 1",
      price: 1000000,
    },
    {
      url: "../../public/images/HT1.jpg",
      category: "hitop",
      sname: "Hi Tops1",
      price: 1000000,
    },
    {
      url: "../../public/images/HT2.jpg",
      category: "hitop",
      sname: "Hi Tops 2",
      price: 1000000,
    },
    {
      url: "../../public/images/HT3.jpg",
      category: "hitop",
      sname: "Hi Tops 3",
      price: 1000000,
    },
    {
      url: "../../public/images/HT4.jpg",
      category: "hitop",
      sname: "Hi Tops 4",
      price: 1000000,
    },
    {
      url: "../../public/images/SP1.jpg",
      category: "sport",
      sname: "Basketball 1",
      price: 1000000,
    },
    {
      url: "../../public/images/SP2.jpg",
      category: "sport",
      sname: "Sport 2",
      price: 1000000,
    },
    {
      url: "../../public/images/SP3.jpg",
      category: "sport",
      sname: "Sport 3",
      price: 1000000,
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
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

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

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
    <img src="${_data.shoes[i].url}" />
    <div class="shoe-item-desc sofia">
      <div>${_data.shoes[i].sname}</div>
      <div>${formatter.format(_data.shoes[i].price)}</div>
    </div>
  </div>

    
    `;
  }

  container.innerHTML = _content;
}

function gotoHome() {
  window.location.href = "/";
}
