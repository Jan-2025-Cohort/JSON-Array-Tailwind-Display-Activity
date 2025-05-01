// Starter product data
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with USB receiver",
    price: 29.99,
    inStock: true
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with blue switches",
    price: 89.99,
    inStock: false
  },
  {
    id: 3,
    name: "USB-C Hub",
    description: "5-in-1 USB-C hub with HDMI and SD card reader",
    price: 45.00,
    inStock: true
  }
];

// Get the container where the product cards will go
const container = document.getElementById("productList");

/* 
✅ TODO: Write the code that does the following...

1. Use `forEach()` to loop through the `products` array.
2. For each product:
   - Create a <div> element for a product card
   - Add Tailwind classes to style the card (like bg-white, shadow, p-4, rounded)
   - Set the card’s `innerHTML` with the product’s name, description, and price
   - Add logic to show "In Stock" or "Out of Stock" with a colored class (green/red)
   - BONUS: Add a category property to each product and display it
   - BONUS: Add a button with Tailwind styles (e.g., "Add to Cart")

3. Append each card to the `container` element
*/
