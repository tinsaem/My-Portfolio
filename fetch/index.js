const productContainer = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // data.forEach(function (product) {
    //   const productCard = document.createElement("div");
    //   productCard.innerHTML = `
    //     <img src="${product.image}" alt="${product.title}" width="120">
    //     <h3>${product.title}</h3>
    //     <p>Price: $${product.price}</p>
    //     <p>Category: ${product.category}</p>
    //     <button>Buy Now</button>
    //     <hr>
    //   `;
    //   productContainer.appendChild(productCard);
    // });
  })
  .catch(function (error) {
    console.log("Error:", error);
    productContainer.innerHTML = "<p>Failed to load products.</p>";
  });