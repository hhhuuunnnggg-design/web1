//  đây là link  "/util/loaibut.js"
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/loaibut")
    .then((response) => response.json())
    .then((data) => {
      let htmlLoaiBut = data
        .map((loai) => {
          return `<li><a href="#">${loai.name}</a></li>`;
        })
        .join("");
      document.querySelector(".loaibut .box-submenu ul").innerHTML =
        htmlLoaiBut;
    })
    .catch((error) => {
      console.error("Lỗi khi fetch loại bút:", error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/phukien")
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
