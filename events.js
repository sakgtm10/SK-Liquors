function registerEvent(eventId) {
.

const registrationForm = document.getElementById('registration-form');
const registrationResult = document.getElementById('registration-result');

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get user input
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const selectedEvent = document.getElementById('event-selection').value;

    const confirmationMessage = `Thank you, ${fullName}! You have successfully registered for ${selectedEvent}.`;

    
    registrationResult.innerHTML = `<p>${confirmationMessage}</p>`;
    
     Clear the form
    registrationForm.reset();
});



    alert(`Registered for event with ID: ${eventId}`);
}
