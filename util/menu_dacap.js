//  đây là link  "/util/loaibut.js"
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
            <li class="loaibut_item"><a href="#">${loai.name}</a></li>
          </div>`;
        })
        .join("");
      document.querySelector(".loaibut .box-submenu ul").innerHTML =
        htmlLoaiBut;

      // Sau khi render xong, lấy các item và thêm sự kiện click
      const listLoaiBut = document.querySelectorAll(".loaibut_item a");
      listLoaiBut.forEach((item) => {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          params.category_loaibut = item.textContent.trim();

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
