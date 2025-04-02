// Add Teacher
document.getElementById('addTeacherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('teacherName').value;
    const department = document.getElementById('department').value;
    const subject = document.getElementById('subject').value;

    // Example action: display a message (you can replace this with backend logic)
    alert(`Teacher Added: ${name}, Department: ${department}, Subject: ${subject}`);
});

// Update Teacher
function updateTeacher() {
    const teacherID = document.getElementById('teacherID').value;
    const newName = document.getElementById('updateName').value;
    const newDepartment = document.getElementById('updateDepartment').value;
    const newSubject = document.getElementById('updateSubject').value;

    // Example action: display a message (replace with backend logic)
    alert(`Teacher Updated (ID: ${teacherID}): Name = ${newName || 'unchanged'}, Department = ${newDepartment || 'unchanged'}, Subject = ${newSubject || 'unchanged'}`);
}

// Delete Teacher
function deleteTeacher() {
    const teacherID = document.getElementById('teacherID').value;

    // Example action: display a message (replace with backend logic)
    alert(`Teacher Deleted (ID: ${teacherID})`);
}

// Approve Student Registration
function approveStudent(studentName) {
    // Example action: display a message (replace with backend logic)
    alert(`Student Approved: ${studentName}`);
}
