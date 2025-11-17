// Form.js

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const submitButton = document.querySelector('.btn-send');

  // Form validation function
  function validateForm(formData) {
    const name = formData.get('user_name').trim();
    const email = formData.get('user_email').trim();
    const message = formData.get('message').trim();

    if (!name) {
      alert('Please enter your name.');
      return false;
    }
    if (!email) {
      alert('Please enter your email.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    if (!message) {
      alert('Please enter your message.');
      return false;
    }
    return true;
  }

  // Form submission handler
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(contactForm);

    if (!validateForm(formData)) {
      return; // Stop if validation fails
    }

    // Simulate form submission (replace with actual API call, e.g., EmailJS)
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    setTimeout(() => {
      // Simulate success
      alert('Thank you! Your message has been sent successfully.');
      contactForm.reset();
      submitButton.disabled = false;
      submitButton.textContent = 'Send Message';
    }, 2000); // Simulate 2-second delay for sending
  });

  // Optional: Real-time validation feedback (e.g., on blur)
  const inputs = contactForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (input.hasAttribute('required') && !input.value.trim()) {
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '#ccc';
      }
    });
  });
});