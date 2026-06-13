fetch("https://fakestoreapi.com/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    
    document.getElementById("products").innerHTML = data.map(function (x) {
      return `
        <img src="${x.image}" alt="${x.title}" width="120">
        <h3>${x.title}</h3>
        <p>Price: $${x.price}</p>
        <p>Category: ${x.category}</p>
        <button>Buy Now</button>
        <hr>
      `;
    }).join("");


  })
  .catch(function (error) {
    console.log("Error:", error);
    productContainer.innerHTML = "<p>Failed to load products.</p>";
  });