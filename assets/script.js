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


  // ==== contact and newsletter form ==== //
  function handleContactFormSubmit(event) {
    event.preventDefault(); 

    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const phoneField = document.querySelector('#phone');
    const messageField = document.querySelector('#message');

    const name = nameField.value;
    const email = emailField.value;
    const phone = phoneField.value;
    const message = messageField.value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);

    nameField.value = '';
    emailField.value = '';
    phoneField.value = '';
    messageField.value = '';
}

function handleNewsletterFormSubmit(event) {
    event.preventDefault(); 

    const emailField = event.target.querySelector('input[type="email"]');
    const email = emailField.value;

    console.log(`Email: ${email}`);

    emailField.value = '';
}
