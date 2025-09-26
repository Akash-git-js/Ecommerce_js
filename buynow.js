let body_div = document.getElementById("bodytag");
let products = JSON.parse(localStorage.getItem("products"));
let params = new URLSearchParams(window.location.search);
let id = params.get("id");

if (id) {
  let product = products.find(p => p.id == id);

  if (product) {
    let div = document.createElement("div");
    div.setAttribute("class", "divtag single");

    let img_tag = document.createElement("img");
    img_tag.setAttribute("src", product.img);
    img_tag.setAttribute("class", "product-img");

    let info = document.createElement("div");
    info.setAttribute("class", "info");

    let name = document.createElement("h2");
    name.innerText = product.product_name;

    let price = document.createElement("p");
    price.setAttribute("class", "price");
    price.innerText = `₹ ${product.price}`;

    let desc = document.createElement("p");
    desc.setAttribute("class", "description");
    desc.innerText = product.description;

    let offer = document.createElement("p");
    offer.setAttribute("class", "offer");
    offer.innerText = product.offers;

    let qtyBox = document.createElement("div");
    qtyBox.setAttribute("class", "quantity-box");

    let decBtn = document.createElement("button");
    decBtn.innerText = "-";
    decBtn.setAttribute("class", "decrement");

    let qtyInput = document.createElement("input");
    qtyInput.setAttribute("type", "text");
    qtyInput.setAttribute("value", "1");
    qtyInput.setAttribute("class", "quantity");
    qtyInput.setAttribute("readonly", true);

    let incBtn = document.createElement("button");
    incBtn.innerText = "+";
    incBtn.setAttribute("class", "increment");

    qtyBox.append(decBtn, qtyInput, incBtn);

    let total = document.createElement("p");
    total.setAttribute("class", "total-price");
    total.innerText = `Total: ₹ ${product.price}`;

    incBtn.addEventListener("click", () => {
      let value = parseInt(qtyInput.value);
      qtyInput.value = value + 1;
      total.innerText = `Total: ₹ ${product.price * qtyInput.value}`;
    });

    decBtn.addEventListener("click", () => {
      let value = parseInt(qtyInput.value);
      if (value > 1) {
        qtyInput.value = value - 1;
        total.innerText = `Total: ₹ ${product.price * qtyInput.value}`;
      }
    });

    let btn = document.createElement("button");
    btn.innerText = "Buy Now";
    btn.setAttribute("class", "btn");

    btn.addEventListener("click", () => {
      let orders = JSON.parse(localStorage.getItem("orders")) || [];

      let order = {
        id: product.id,
        name: product.product_name,
        price: product.price,
        quantity: parseInt(qtyInput.value),
        total: product.price * parseInt(qtyInput.value),
        date: new Date().toLocaleString()
      };

      orders.push(order);
      localStorage.setItem("orders", JSON.stringify(orders));

      window.location.href = "order.html"; 
    });

    let back = document.createElement("a");
    back.setAttribute("href", "sample.html");
    back.innerText = "⬅ Back to Products";
    back.setAttribute("class", "back-link");

    info.append(name, price, desc, offer, qtyBox, total, btn, back);
    div.append(img_tag, info);
    body_div.append(div);

  } else {
    body_div.innerHTML += "<h2>Product not found!</h2>";
  }
} else {
  body_div.innerHTML += "<h2>No product selected!</h2>";
}
