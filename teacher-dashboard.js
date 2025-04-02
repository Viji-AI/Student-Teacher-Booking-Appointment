// Schedule Appointment
document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    if (studentName && appointmentTime) {
        alert(`Appointment scheduled successfully!\nStudent: ${studentName}\nTime: ${appointmentTime}`);
    } else {
        alert("Please fill out all the required fields.");
    }
});

// Approve Appointment
function approveAppointment(studentName) {
    alert(`Appointment with ${studentName} approved!`);
}

// Cancel Appointment
function cancelAppointment(studentName) {
    alert(`Appointment with ${studentName} canceled.`);
}
