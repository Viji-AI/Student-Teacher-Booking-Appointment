// Add event listener for form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    // Get user input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (Replace with actual backend validation in production)
    if (email === "student@example.com" && password === "password123") {
        // Display success message and redirect
        alert("Login successful! Redirecting to the Appointments page...");
        window.location.href = "appointments.html"; // Redirect to appointments page
    } else {
        // Display error message
        alert("Invalid email or password. Please try again.");
    }
});
