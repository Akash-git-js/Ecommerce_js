window.onload = function () {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length === 0) {
    document.querySelector(".order-container").innerHTML =
      "<h2>No orders found!</h2><a href='sample.html' class='btn'>Back to Products</a>";
    return;
  }

  let tbody = document.querySelector("#orderTable tbody");
  tbody.innerHTML = ""; 

  let products = JSON.parse(localStorage.getItem("products")) || [];

  orders.forEach(order => {
    let tr = document.createElement("tr");

    let imgTd = document.createElement("td");
    let img = document.createElement("img");
    let product = products.find(p => p.id === order.id);
    img.src = product ? product.img : "placeholder.png";
    img.classList.add("order-img");
    imgTd.appendChild(img);

    let nameTd = document.createElement("td");
    nameTd.innerText = order.name;

    let priceTd = document.createElement("td");
    priceTd.innerText = "₹ " + order.price;

    let qtyTd = document.createElement("td");
    qtyTd.innerText = order.quantity;

    let totalTd = document.createElement("td");
    totalTd.innerText = "₹ " + order.total;

    let dateTd = document.createElement("td");
    dateTd.innerText = order.date;

    tr.append(imgTd, nameTd, priceTd, qtyTd, totalTd, dateTd);
    tbody.appendChild(tr);
  });
};
