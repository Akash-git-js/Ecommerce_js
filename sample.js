let body_div = document.getElementById("bodytag");

let products = [
  { price: 499, product_name:"NIKE SHOE", img: "download.jpeg" },
  { price: 799, product_name:"PANDA TOY", img: "panda.jpeg" },
  { price: 999, product_name:"BAG", img: "bag.jpeg" },
  { price: 99, product_name:"LUX SOAP", img: "shopping.webp" }
];

for (let i = 0; i < products.length; i++)

{
  let div = document.createElement("div");
  div.setAttribute("class", "divtag");

  let img_tag = document.createElement("img");
  img_tag.setAttribute("src", products[i].img);


  let name = document.createElement("h3");
  name.innerText = products[i].product_name; 

  let price = document.createElement("p");
  price.innerText = "₹ " + products[i].price;

  let btn = document.createElement("button");
  btn.innerText = "Buy Now";
  btn.setAttribute("class", "btn");

  div.append(img_tag);
  div.append(name); 
  div.append(price);
  div.append(btn);

  body_div.append(div);
}
