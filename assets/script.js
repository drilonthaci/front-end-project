// ==== mobile menu ==== // 
document.getElementById('menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const closeButton = document.getElementById('close-button');
  
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
      
      closeButton.style.display = 'flex';
    } else {
     
      closeButton.style.display = 'none';
    }
  });
  

  document.getElementById('close-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const closeButton = document.getElementById('close-button');
  
    mobileMenu.classList.remove('active');
    closeButton.style.display = 'none';
  });


function handleNewsletterFormSubmit(event) {
    event.preventDefault(); 

    const emailField = event.target.querySelector('input[type="email"]');
    const email = emailField.value;

    console.log(`Email: ${email}`);

    emailField.value = '';
}

  // === assignment 3 : //

  // 4. using js classes to manage some of my products in the website
class Product {
  constructor(name, image, price, originalPrice, rating) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.originalPrice = originalPrice;
    this.rating = rating;
  }

  getRatingStars() {
    let stars = ''; 
    let count = 0; 

    while (count < this.rating) {
      stars += '<i>★</i>';
      count++;
    }

    while (count < 5) {
      stars += '<i>☆</i>';
      count++;
    }

    return stars;
  }

  getHTML() {
    return '<div class="card">' +
      '<a href="/product-detail.html"><img src="' + this.image + '" alt="' + this.name + '"></a>' +
      '<h3>' + this.name + '</h3>' +
      '<div class="rating">' + this.getRatingStars() + '</div>' +
      '<p>$' + this.price + ' <span>$' + this.originalPrice + '.00</span></p>' +
      '</div>';
  }
}

const products = [
  new Product( 'Sneakers', 'https://bonik-vuetify.vercel.app/img/flash-1.141514f0.png', 90, 110, 4),
  new Product( 'Watch', 'https://bonik-vuetify.vercel.app/img/flash-2.959938ca.png', 60, 110, 4),
  new Product( 'Mobile', 'https://bonik-vuetify.vercel.app/img/flash-3.4c420936.png', 345, 500, 5),
];

const moreContainer = document.querySelector('.more-container');

products.forEach(product => {
  moreContainer.innerHTML += product.getHTML();
 });


// == updating the welcome message // // //
const sliderTitle = document.getElementById('sliderTitle');
const sliderDescription = document.getElementById('sliderDesc');
const sliderButton = document.getElementById('sliderBtn');
const currentTime = new Date().getHours();

if (currentTime < 12) {
      sliderTitle.innerHTML = 'Good Morning!<br> Start Your Day with 50% Off';
          sliderDescription.textContent = 'Enjoy a special discount on your morning grocery purchases.';
              sliderButton.textContent = 'Shop Morning Deals';
       } else if (currentTime < 18) {
          sliderTitle.innerHTML = 'Good Afternoon!<br> Get 60% Off On Groceries';
            sliderDescription.textContent = 'Take advantage of our afternoon sale and save big on groceries.';
              sliderButton.textContent = 'Shop Afternoon Deals';
    } else {
            sliderTitle.innerHTML = 'Good Evening!<br> Relax with 70% Off';
              sliderDescription.textContent = 'Unwind with amazing evening discounts on groceries.';
                sliderButton.textContent = 'Shop Evening Deals';
}


// == contact form handling // // //
function handleContactFormSubmit(event) {
  event.preventDefault(); 
  
  let nameInput = document.getElementById('name');
  let emailInput = document.getElementById('email');
  let phoneInput = document.getElementById('phone');
  let messageInput = document.getElementById('message');

  let nameError = document.getElementById('name-error');
  let emailError = document.getElementById('email-error');
  let phoneError = document.getElementById('phone-error');
  let msgError = document.getElementById('msg-error');

  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  msgError.textContent = '';

  if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required';
      return;
  }

  let phonePattern = /^\d+$/; 
  if (!phonePattern.test(phoneInput.value)) {
      phoneError.textContent = 'Please enter a valid phone number';
      return;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address';
      return;
  }
  
  if (messageInput.value.trim() === '') {
      msgError.textContent = 'Message is required';
      return;
  }

  console.log('Name:', nameInput.value);
  console.log('Email:', emailInput.value);
  console.log('Phone:', phoneInput.value);
  console.log('Message:', messageInput.value);

  let successMessage = document.getElementById('success-message');
  successMessage.textContent = 'Form submitted successfully!';

  let inputIds = ['name', 'email', 'phone', 'message'];
  inputIds.forEach(function(inputId) {
      localStorage.removeItem(inputId);
  });
}

// == carousel == // // //
window.addEventListener('load', function() {
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const carousel = document.querySelector('.carousel');
  const carouselCards = document.querySelectorAll('.carousel-cards'); 

  let currentIndex = 0;
  const element = carouselCards[0];
  const computedStyle = getComputedStyle(element);
  const cardWidth = element.clientWidth + parseInt(computedStyle.marginLeft) + parseInt(computedStyle.marginRight);

  function moveCarousel(direction) {
    const carouselParent = document.querySelector('.carousel-container');
    const carouselWidth = carouselParent.clientWidth;
    const cardsInView = Math.floor(carouselWidth / cardWidth);

    if (direction === 'next' && currentIndex + cardsInView < carouselCards.length) {
      currentIndex++;
    } else if (direction === 'prev' && currentIndex > 0) {
      currentIndex--;
    }

    const maxIndex = Math.max(0, carouselCards.length - cardsInView);
    currentIndex = Math.min(currentIndex, maxIndex);

    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  prevBtn.addEventListener('click', function() {
    moveCarousel('prev');
  });

  nextBtn.addEventListener('click', function() {
    moveCarousel('next');
  });

  // handling responsive, after it changes the window size to fit the cards dynamically
  window.addEventListener('resize', function() {
    const carouselParent = document.querySelector('.carousel-container');
    const carouselWidth = carouselParent.clientWidth;
    const cardsInView = Math.floor(carouselWidth / cardWidth);
    const maxIndex = Math.max(0, carouselCards.length - cardsInView);

    currentIndex = Math.min(currentIndex, maxIndex);
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  });
});


// === fetching === // // // 

async function fetchImages() {
  try {
    const response = await fetch('https://api.unsplash.com/photos/random?query=sneakers&client_id=fTMgK_UHs_PWzux1oMfeol8vq5DVaU5yhiIo6eGsyBU&count=9');
    const data = await response.json();
    displayImages(data);
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}


function displayImages(images) {
  const container = document.querySelector('.more-container');
  images.forEach(image => {
    const card = document.createElement('div');
    card.className = 'cardsUsingFetch';
    card.innerHTML = `
      <a href="/product-detail.html">
        <img src="${image.urls.small}" alt="${image.alt_description}">
      </a>
      <h3>${'Product'}</h3>
      <div class="rating">
        <i>★</i><i>★</i><i>★</i><i>★</i><i>☆</i>
      </div>
      <p>$200 <span>$110.00</span></p>
    `;
    container.appendChild(card);
  });
}

fetchImages();


// === cookies === // // // 
function submitForm(event) {
  event.preventDefault();

  let email = document.querySelector('.newsletter-form input[type="email"]').value;
  if (email) {
    document.cookie = "email=" + email;
    alert('Thank you for subscribing :)');
    document.querySelector('.newsletter-form input[type="email"]').value = '';
  } else {
    alert('Please enter your email.');
  }
}

document.querySelector('.newsletter-form').onsubmit = submitForm;



// back to top btn ==// // 
const mybutton = document.querySelector(".back-to-top-btn");

window.addEventListener("scroll", function() {
  scrollFunction();
});

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
}

function backToTop() {
  document.documentElement.scrollTop = 0; 
}

mybutton.addEventListener("click", backToTop);
