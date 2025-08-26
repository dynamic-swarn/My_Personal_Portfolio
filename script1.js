 const form = document.getElementById('contactForm');
    const popup = document.getElementById('popup');

    form.addEventListener('submit', function(e){
      e.preventDefault();

      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      const phonePattern = /^[0-9]{10}$/;

      if(!email.match(emailPattern)) {
        alert("Please enter a valid email address");
        return;
      }

      if(!phone.match(phonePattern)) {
        alert("Please enter a valid 10-digit phone number");
        return;
      }

      popup.classList.add('active');
      form.reset();
    });

    function closePopup() {
      popup.classList.remove('active');
    }