function sendEmail() {
    emailjs.init("1k3ewZFiWpT2lZiuT");
    var templateParams = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
  
    emailjs.send('service_d15w03o', 'template_vch41i4', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Your message has been sent successfully.");
      }, function(error) {
        console.log('FAILED...', error);
        alert("Unable to send email. Please try again.");
      });
}

function wordsTyped() {
    var msg = document.getElementById("message");
    var count = document.getElementById("char-count");
    count.innerHTML = msg.value.length;
}