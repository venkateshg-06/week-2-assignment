let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
let bg = document.getElementById("bg")

function changeSlide(direction) {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + direction + items.length) % items.length;
  items[currentIndex].classList.add('active');
  // Trigger a function passing the index of the carousel
  console.log("Current index:", currentIndex);
  updateProductDetails(currentIndex); // Update product details when carousel changes
}

function updateProductDetails(index) {
  const product = data[index];
  const productDetailsContainer = document.getElementById('productDetails');
  bg.style.backgroundImage = product.background
  productDetailsContainer.innerHTML = `
    <h3 class = "brand-heading">${product.brand}</h3>
    <p class="choose" >${product.Name}, <span> Choose Us </span> </p>
    <p class="description"> ${product.description}</p>
    <p class="price"> ${product.price}</p>
  `;
}

const data = [
  {
    "brand": "Exquisite Watches",
    "Name" : "Gold Luxury",
    "description" : "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
    "price" : "$499.00",
    "background" : "linear-gradient(to right, #F4A764,#FFDEC2)"
  },
  {
    "brand": "Dainty Timepieces",
    "Name" : "Silver Luxury",
    "description" : "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
    "price" : "$469.00",
    "background" : "linear-gradient(to right, #ADB0B0,#E1E1E1)"
  },
  {
    "brand": "Elegant Timepieces",
    "Name" : "Choose Luxury",
    "description" : "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
    "price" : "$529.00",
    "background" : "linear-gradient(to right, #30A357,#75E39A)"
  },
  {
    "brand": "Refined Timepieces",
    "Name" : "Choose Luxury",
    "description" : "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
    "price" : "$599.00",
    "background" : "linear-gradient(to right, #F24F4F,#FFA895)"
  }
];

// Initialize product details with the first item in the data
updateProductDetails(0);