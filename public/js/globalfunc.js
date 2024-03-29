import { banner } from "./globaldb.js";

export function init_header() {
  const header_tag = document.getElementsByTagName("header");

  let content = `
  <div>
    <img src="${banner}" alt="" width="200" style="margin-block: 1em" />
  </div>

  <div>
    <button class="search-button sofia" onclick="window.location.href = '/urls/search'">Search</button>
    <button class="header-button sofia" onclick="window.location.href = '/'">Home</button>
    <button class="header-button sofia" onclick="window.location.href = '/urls/gallery'">Gallery</button>
    <button class="header-button sofia" onclick="window.location.href = '/urls/report'">Laporan</button>
    <button class="header-button sofia" onclick="window.location.href = '/urls/login'">Login</button>
  </div>
  
  `;

  if (localStorage.getItem("username") !== null) {
    content = `
    
  <div>
    <img src="${banner}" alt="" width="200" style="margin-block: 1em" />
  </div>

  <div>
    <button class="search-button sofia" onclick="window.location.href = '/urls/search'">Search</button>
    <button class="header-button sofia" onclick="window.location.href = '/'">Home</button>
    <button class="header-button sofia" onclick="window.location.href = '/urls/gallery'">Gallery</button>
    <button class="header-button sofia" onclick="window.location.href = '/urls/report'">Laporan</button>
    <span class="header-logout fw-bold sofia" onclick="localStorage.removeItem('username'); window.location.href = '/' ">Logged in as ${localStorage.getItem(
      "username"
    )}</span>
  </div>
  
  `;
  }

  header_tag[0].innerHTML = content;
}

export function logout() {
  localStorage.removeItem("username");
  window.location.href = "/";
}

export function init_footer() {
  const footer_tag = document.getElementsByTagName("footer");
  footer_tag[0].classList.add("footer-container");

  const content = `
  
  <div class="footer-company-info" >
  <p class="sofia footer-title-1"><b>Perusahaan</b></p>
  <p class="sofia footer-desc">
    Zara adalah salah satu perusahaan mode internasional terbesar. Perusahaan ini dimiliki oleh Inditex, salah
    satu grup distribusi terbesar di dunia.
  </p>
  <p class="sofia footer-desc">
    Pelanggan adalah bagian terpenting dalam modal bisnis kami, yang mencakup desain produksi, distribusi, dan
    penjualan melalui jaringan ritel kami yang luas.
  </p>

  <p class="sofia footer-desc">
    Untuk informasi lebih lanjut, kunjugi situs Inditex Group
    <u
      ><b><a href="www.inditex.com" style="color: inherit;">www.inditex.com</a></b></u
    >
  </p>

  <p class="sofia">
    <b>Follow Us</b>
  </p>

  <div class="media-button-container">
    <button class="media-button">
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
        />
      </svg>
    </button>
    <button class="media-button">
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
        />
      </svg>
    </button>
  </div>
</div>
<div class="footer-more-info">
  <p class="sofia footer-title-1"><b>Informasi Umum</b></p>
  <p class="sofia footer-desc">
    Jika anda memiliki pertanyaan atau saran lain, harap hubungi kami melalui saluran layanan pelanggan mana saja
    dan kami akan senang hati membantu
  </p>
  <ul class="sofia">
    <li>zara-support@zara.com</li>
    <li>zara-care@zara.com</li>
  </ul>
</div>

<div style="grid-area: cp" class="cp-text sofia">@ 2023 Zara Connection, All Rights Reserved.</div>
  
  `;

  footer_tag[0].innerHTML = content;
}
