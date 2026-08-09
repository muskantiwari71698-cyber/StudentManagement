let students = [];

function addStudent() {
    let id = document.getElementById("studentId").value;
    let name = document.getElementById("studentName").value;
    let course = document.getElementById("course").value;

    if (id === "" || name === "" || course === "") {
        alert("Please enter all student details.");
        return;
    }
    let existingStudent = students.find(function(s) {
    return s.id === id;
});

if (existingStudent) {
    alert("Student ID already exists.");
    return;
}

    students.push({
        id: id,
        name: name,
        course: course
    });

    alert("Student added successfully!");

    document.getElementById("studentId").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("course").value = "";
}

function displayStudents() {
    let output = document.getElementById("output");

    if (students.length === 0) {
        output.innerHTML = "<p>No students found.</p>";
        return;
    }

    output.innerHTML = "<h3>Student Details</h3>";

    students.forEach(function(student) {
        output.innerHTML +=
            "<p>ID: " + student.id +
            " | Name: " + student.name +
            " | Course: " + student.course + "</p>";
    });
}

function searchStudent() {
    let id = document.getElementById("studentId").value;

    let student = students.find(function(s) {
        return s.id === id;
    });

    if (student) {
        document.getElementById("output").innerHTML =
            "<h3>Student Found</h3>" +
            "<p>ID: " + student.id + "</p>" +
            "<p>Name: " + student.name + "</p>" +
            "<p>Course: " + student.course + "</p>";
    } else {
        document.getElementById("output").innerHTML =
            "<p>Student not found.</p>";
    }
}

function deleteStudent() {
    let id = document.getElementById("studentId").value;

    let index = students.findIndex(function(s) {
        return s.id === id;
    });

    if (index !== -1) {
        students.splice(index, 1);
        alert("Student deleted successfully!");
        displayStudents();
    } else {
        alert("Student not found.");
    }
}