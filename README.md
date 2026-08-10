# Student Management System

## Project Overview

The Student Management System is a simple web-based application developed to manage basic student records.

The system allows users to add student information, display student details, search for a student using Student ID, and delete student records.

The application is developed using HTML, CSS, and JavaScript. Git and GitHub are used for version control and project management.

## Features

- Add Student
- Display Student Details
- Search Student by ID
- Delete Student Record
- Validation for empty fields
- Prevention of duplicate Student IDs

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## Project Structure

StudentManagement/

├── index.html  
├── style.css  
├── script.js  
├── README.md  
├── LICENSE  
└── .gitignore

## Git Branching Strategy

The project uses a feature-based Git branching strategy.

- main – Contains the stable version of the project.
- develop – Used to integrate completed features.
- feature/add-student – Used for developing the student registration functionality.
- feature/search-student – Used for developing the student search functionality.

Feature branches are merged into the develop branch. After final testing, the develop branch is merged into the main branch.

## How to Run

1. Clone the repository from GitHub.
2. Open the project folder.
3. Open index.html in a web browser.
4. Enter Student ID, Name, and Course.
5. Use the available buttons to manage student records.

## Git Workflow

The workflow followed in this project is:

Feature Branch → Develop → Main

This workflow allows individual features to be developed separately and then integrated into the development branch before being released to the stable main branch.

## Future Enhancements

- Database integration
- Update Student functionality
- User authentication
- Responsive design
- Backend API integration
- Permanent database storage

## Conclusion

The Student Management System demonstrates the practical use of Git and GitHub for software development. The project shows the use of branches, commits, merging, and documentation to maintain a structured software project.