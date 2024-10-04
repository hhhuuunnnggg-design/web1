//   đây là link /util/products.js
fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((data) => {
    let htmls = data.map((item) => {
      return `<div class="product_item">
        <div class="product_image">
          <img src="${item.thumbnail}" alt="${item.title}" />
          <div class="product_percent">${item.discountPercentage}%</div>
        </div>
        <div class="product_content">
          <h3 class="product_title">${item.title}</h3>
          <div class="product_meta">
            <div class="product_price">${item.price}$</div>
            <div class="product_sotck">còn lại ${item.stock} sản phẩm</div>
            <div class="product_order"><a href="#">đặt hàng</a></div>
          </div>
        </div>
      </div>`;
    });
    document.getElementById("products").innerHTML = htmls.join(""); // Chèn HTML vào DOM
  })
  .catch((error) => {
    console.error("Lỗi khi fetch dữ liệu:", error); // Xử lý lỗi
  });

// search
const inputSearch = document.querySelector("#search input");
const buttonSearch = document.querySelector("#search button");

buttonSearch.addEventListener("click", function () {
  //params.q = inputSearch.value;
  console.log(inputSearch.value);
});

// end search
