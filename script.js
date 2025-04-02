document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentName = document.getElementById('studentName').value;
    const teacherName = document.getElementById('teacherName').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    const appointmentList = document.getElementById('appointmentList');
    const appointmentItem = document.createElement('p');
    appointmentItem.textContent = `Appointment for ${studentName} with ${teacherName} on ${appointmentTime}`;
    appointmentList.appendChild(appointmentItem);

    alert('Appointment successfully booked!');
});
