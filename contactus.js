document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

 
    const formData = new FormData(this);

    fetch("contact.php", {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Message sent successfully!");
            
            this.reset();
        } else {
            alert("Message could not be sent. Please try again later.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
