//   đây là link /util/products.js
// import {API_Product} from
import { drawProducts } from "/util/drawProducts.js";
drawProducts();

// search
const inputSearch = document.querySelector("#search input");
const buttonSearch = document.querySelector("#search button");

buttonSearch.addEventListener("click", function () {
  // params.title = inputSearch.value;
  console.log(inputSearch.value);
});

// end search
