//  đây là link  "/util/loaibut.js"
import { drawProducts } from "/util/drawProducts.js";
import { API_Menu_LoaiBut, API_Menu_PhuKien } from "/util/link.js";
import { params } from "/util/variable.js";
//  loại bút
//  loại bút
document.addEventListener("DOMContentLoaded", function () {
  fetch(API_Menu_LoaiBut)
    .then((response) => response.json())
    .then((data) => {
      let htmlLoaiBut = data
        .map((loai) => {
          return `
          <div class="category_but">
            <li >
              <div class="loaibut_item">${loai.name}</div>
            </li>
          </div>`;
        })
        .join("");
      document.querySelector(".loaibut .box-submenu ul").innerHTML =
        htmlLoaiBut;

      const listLoaiBut = document.querySelectorAll(".loaibut_item ");
      listLoaiBut.forEach((item) => {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          params.category_loaibut = item.textContent.trim();
          drawProducts();
          console.log(params);
        });
      });
    })
    .catch((error) => {
      console.error("Lỗi khi fetch loại bút:", error);
    });
});

// end loại bút
document.addEventListener("DOMContentLoaded", function () {
  fetch(API_Menu_PhuKien)
    .then((response) => response.json())
    .then((data) => {
      let htmlPhuKien = data
        .map((phukien) => {
          return `<li><a href="#">${phukien.name}</a></li>`;
        })
        .join("");
      document.querySelector(".phukien .box-submenu ul").innerHTML =
        htmlPhuKien;
    })
    .catch((error) => {
      console.error("Lỗi khi fetch phụ kiện " + error);
    });
});
// <li class="loaibut_item"><a href="#">${loai.name}</a></li>`;
