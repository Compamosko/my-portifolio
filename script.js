document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    var submitButton = document.getElementById('submitButton');
    var result = document.getElementById('result');

    // Perform a basic validation (HTML5 validation will also work)
    if (validateEmail(email)) {
        result.textContent = 'Voila! ' ;
        // Change the button text to 'Signed Up'
        submitButton.textContent = 'Subscribed';
        // Disable the button to prevent further submissions
        submitButton.disabled = true;
        // You can now send this email to your server or process it further
        console.log('Collected email:', email);
    } else {
        result.textContent = 'Invalid email address.';
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
