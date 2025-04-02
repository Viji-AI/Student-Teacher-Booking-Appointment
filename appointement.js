// Add event listener for form submission
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent traditional form submission
// appointement.js

document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submit behavior
  
    // Retrieve input values from the form
    const studentName = document.getElementById('studentName').value;
    const teacherName = document.getElementById('teacherName').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
  
    // Create a string with the appointment details
    const appointmentDetails = 
  `Appointment Details:
  Student Name: ${studentName}
  Teacher Name: ${teacherName}
  Appointment Time: ${appointmentTime}
  `;
  
    // Create a Blob from the text
    const blob = new Blob([appointmentDetails], { type: 'text/plain' });
    
    // Create a link element to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob); // Create an object URL for the Blob
    downloadLink.download = 'appointment_data.txt';      // Set the desired file name
  
    // Append the link to the document, trigger a click, then remove the link
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  
    // (Optional) Clear the form fields after exporting
    document.getElementById('appointmentForm').reset();
  });
  
    // Get user input values
    const studentName = document.getElementById('studentName').value;
    const teacherName = document.getElementById('teacherName').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    // Simple validation to check if all fields are filled
    if (studentName && teacherName && appointmentTime) {
        // Display success message
        alert("Appointment successfully booked! Redirecting to the appointments page...");
        window.location.href = "view-appointments.html";
    } else {
        // Display error message if any field is missing
        alert("Please fill out all the required fields.");
    }
});
