let body_div = document.getElementById("bodytag");

let products = [
  { id: 1, price: 3499, product_name: "NIKE SHOE", img: "download.jpeg", description: "Premium sports shoe in vibrant red, designed for comfort and durability. Breathable mesh, cushioned sole, and stylish finish make it perfect for running, gym, or casual wear.", offers: "Price: ₹4,999 → ₹3,499 (30% OFF)" },
  { id: 2, price: 599, product_name: "PANDA TOY", img: "panda.jpeg", description: "Soft and cuddly panda plush toy made with high-quality fabric. Perfect for kids and collectors. Brings comfort, cuteness, and smiles to every home.", offers: "Price: ₹799 → ₹599 (25% OFF)" },
  { id: 3, price: 749, product_name: "BAG", img: "bag.jpeg", description: "Trendy and durable multipurpose bag with spacious compartments. Suitable for college, office, and travel. Lightweight and designed for everyday use.", offers: "Price: ₹999 → ₹749 (25% OFF)" },
  { id: 4, price: 49, product_name: "LUX SOAP", img: "shopping.webp", description: "Luxurious beauty soap infused with floral fragrance and moisturizing oils. Leaves skin soft, glowing, and refreshed. A trusted brand for daily skincare.", offers: "Price: ₹60 → ₹45 (Pack of 1, 25% OFF)" },
  { id: 5, price: 1499, product_name: "SMART WATCH", img: "watch.jpeg", description: "Feature-rich smartwatch with fitness tracking, heart-rate monitoring, and customizable watch faces. Compatible with Android and iOS.", offers: "Price: ₹1,999 → ₹1,499 (25% OFF)" },
  { id: 6, price: 899, product_name: "HEADPHONES", img: "headphone.jpeg", description: "High-quality wireless headphones with deep bass, noise cancellation, and long battery life for immersive sound.", offers: "Price: ₹1,299 → ₹899 (30% OFF)" },
  { id: 7, price: 299, product_name: "WATER BOTTLE", img: "bottle.jpeg", description: "Durable stainless steel water bottle with insulation to keep drinks hot or cold for hours.", offers: "Price: ₹399 → ₹299 (25% OFF)" },
  { id: 8, price: 1199, product_name: "POWER BANK", img: "power bank.jpeg", description: "10,000mAh fast-charging power bank with dual USB output and compact design.", offers: "Price: ₹1,599 → ₹1,199 (25% OFF)" },
  { id: 9, price: 249, product_name: "SUNGLASSES", img: "sunglasses.jpeg", description: "Stylish UV-protected sunglasses for men and women. Lightweight and perfect for daily use.", offers: "Price: ₹349 → ₹249 (30% OFF)" },
  { id: 10, price: 1599, product_name: "SPORTS JACKET", img: "jacket.jpeg", description: "Lightweight sports jacket with breathable fabric. Perfect for workouts and outdoor activities.", offers: "Price: ₹2,199 → ₹1,599 (27% OFF)" },
  { id: 11, price: 499, product_name: "EARPHONES", img: "earphones.jpeg", description: "Wired earphones with high bass and clear sound. Comfortable fit for long usage.", offers: "Price: ₹699 → ₹499 (29% OFF)" },
  { id: 12, price: 2299, product_name: "BLUETOOTH SPEAKER", img: "speaker.jpeg", description: "Portable Bluetooth speaker with rich bass, waterproof design, and 12-hour playtime.", offers: "Price: ₹2,999 → ₹2,299 (23% OFF)" },
  { id: 13, price: 999, product_name: "MOUSE + KEYBOARD COMBO", img: "combo.jpeg", description: "Wireless keyboard and mouse combo with ergonomic design. Ideal for office and home use.", offers: "Price: ₹1,499 → ₹999 (33% OFF)" },
  { id: 14, price: 399, product_name: "COFFEE MUG", img: "mug.jpeg", description: "Ceramic coffee mug with modern design. Microwave and dishwasher safe.", offers: "Price: ₹499 → ₹399 (20% OFF)" },
  { id: 15, price: 2499, product_name: "BACKPACK", img: "backpack.jpeg", description: "Durable laptop backpack with multiple compartments and water-resistant fabric.", offers: "Price: ₹3,199 → ₹2,499 (22% OFF)" },
  { id: 16, price: 149, product_name: "NOTEBOOK", img: "notebook.jpeg", description: "Hardcover notebook with 200 ruled pages. Perfect for students and professionals.", offers: "Price: ₹199 → ₹149 (25% OFF)" },
  { id: 17, price: 899, product_name: "JEANS", img: "jeans.jpeg", description: "Comfort-fit denim jeans with a stylish wash. Perfect for casual wear.", offers: "Price: ₹1,299 → ₹899 (31% OFF)" },
  { id: 18, price: 1799, product_name: "FORMAL SHOES", img: "formalshoe.jpeg", description: "Classic leather formal shoes with cushioned insole for all-day comfort.", offers: "Price: ₹2,499 → ₹1,799 (28% OFF)" },
  { id: 19, price: 2999, product_name: "TABLET", img: "tablet.jpeg", description: "Compact tablet with 8-inch display, quad-core processor, and 32GB storage.", offers: "Price: ₹3,999 → ₹2,999 (25% OFF)" },
  { id: 20, price: 159, product_name: "T-SHIRT", img: "tshirt.jpeg", description: "Soft cotton T-shirt with trendy print. Comfortable for daily casual wear.", offers: "Price: ₹249 → ₹159 (36% OFF)" }
];


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

    let btn = document.createElement("button");
    btn.innerText = "Buy Now";
    btn.setAttribute("class", "btn");

    let back = document.createElement("a");
    back.setAttribute("href", "sample.html");
    back.innerText = "⬅ Back to Products";
    back.setAttribute("class", "back-link");

    info.append(name, price, desc, offer, btn, back);
    div.append(img_tag, info);

    body_div.append(div);
  } else {
    body_div.innerHTML += "<h2>Product not found!</h2>";
  }
} else {
  body_div.innerHTML += "<h2>No product selected!</h2>";
}
