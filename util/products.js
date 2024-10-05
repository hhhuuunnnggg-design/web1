//   đây là link /util/products.js
import { drawProducts } from "/util/drawProducts.js";
import { params } from "/util/variable.js";
// vẽ giao diện
drawProducts();

// search
const inputSearch = document.querySelector("#search input");
const buttonSearch = document.querySelector("#search button");
buttonSearch.addEventListener("click", function () {
  search();
});
const search = () => {
  params.title = inputSearch.value;
  drawProducts();
};
inputSearch.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    search();
  }
});
// end search

// filter
const filter = document.querySelector("#filter");
filter.addEventListener("change", function (e) {
  console.log(e.target.value);
  switch (e.target.value) {
    case "mac-dinh":
      params.sort = "";
      params.order = "";
      break;
    case "gia-thap-den-cao":
      params.sort = "price";
      params.order = "asc";
      break;
    case "gia-cao-den-thap":
      params.sort = "price";
      params.order = "desc";
      break;
    case "giam-gia-nhieu":
      params.sort = "discountPercentage";
      params.order = "desc";
      break;
  }
  drawProducts();
});
// end filter

// padination
const paginationNext = document.querySelector("#paginationNext");
const paginationNumber = document.querySelector("#paginationNumber");
const paginationPrev = document.querySelector("#paginationPrev");
paginationNext.addEventListener("click", function () {
  params.page = parseInt(params.page) + 1;
  paginationNumber.innerHTML = params.page;
  drawProducts();
});
paginationPrev.addEventListener("click", function () {
  if (params.page > 1) {
    params.page = parseInt(params.page) - 1;
    paginationNumber.innerHTML = params.page;
    drawProducts();
  }
});
// end pagination
