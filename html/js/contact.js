<script>
  const contactForm = document.querySelector('.contact-form');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);

    contactForm.reset();
  });
</script>