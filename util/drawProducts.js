import { API_Product } from "/util/link.js";
import { params } from "/util/variable.js";
export const drawProducts = () => {
  console.log(params);

  // Tạo URL API với tham số phân trang
  let category = "";
  if (category != "") {
    category = `&category=${params.category_loaibut}`;
  }
  const aip = `${API_Product}?title=${params.title}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_per_page=${params.limit}$`;
  console.log("API URL:", aip);

  fetch(aip)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Lỗi HTTP: ${response.status}`); // Xử lý nếu HTTP trả về lỗi
      }
      return response.json(); // Chuyển đổi dữ liệu JSON
    })
    .then((responseData) => {
      // Kiểm tra nếu responseData có field 'data'
      if (!responseData.data) {
        throw new Error("Không tìm thấy dữ liệu sản phẩm."); // Kiểm tra nếu không có field "data"
      }

      const productsData = responseData.data;

      if (productsData.length === 0) {
        document.getElementById("products").innerHTML =
          "<p>Không có sản phẩm nào được tìm thấy.</p>";
        return;
      }

      // Tạo HTML để hiển thị sản phẩm
      let htmls = productsData.map((item) => {
        return `<div class="product_item">
          <div class="product_image">
            <img src="${item.thumbnail}" alt="${item.title}" />
            <div class="product_percent">${item.discountPercentage}%</div>
          </div>
          <div class="product_content">
            <h3 class="product_title">${item.title}</h3>
            <div class="product_meta">
              <div class="product_price">${item.price}$</div>
              <div class="product_stock">còn lại ${item.stock} sản phẩm</div>
              <div class="product_order"><a href="#">đặt hàng</a></div>
            </div>
          </div>
        </div>`;
      });

      // Chèn HTML vào phần tử có id "products"
      document.getElementById("products").innerHTML = htmls.join("");
    })
    .catch((error) => {
      console.error("Lỗi khi fetch dữ liệu:", error);
      document.getElementById(
        "products"
      ).innerHTML = `<p>Đã xảy ra lỗi: ${error.message}</p>`;
    });
};
