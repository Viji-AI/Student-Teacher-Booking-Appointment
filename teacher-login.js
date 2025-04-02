document.getElementById('teacherLoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent traditional form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (replace with backend logic in production)
    if (email === "teacher@example.com" && password === "password123") {
        alert("Login successful! Redirecting to your Dashboard...");
        window.location.href = "teacher-dashboard.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
