import { API_Product } from "/util/link.js";
export const drawProducts = () => {
  fetch(API_Product)
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
};
