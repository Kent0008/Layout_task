const studentsTable = document.querySelector('#studentsTable tbody');
const studentForm = document.querySelector('#studentForm');

const fetchStudents = async () => {
    const response = await fetch('http://localhost:3000/api/students');
    const students = await response.json();
    renderStudents(students);
};

const renderStudents = (students) => {
    studentsTable.innerHTML = '';
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.lastName} ${student.firstName} ${student.patronymic}</td>
            <td>${student.faculty}</td>
            <td>${new Date(student.birthDate).toLocaleDateString()} (${new Date().getFullYear() - new Date(student.birthDate).getFullYear()} лет)</td>
            <td>${student.startYear} - ${student.startYear + 4} (${new Date().getFullYear() >= student.startYear + 4 ? 'закончил' : 'в процессе'})</td>
            <td><button onclick="deleteStudent('${student.id}')">Удалить</button></td>
        `;
        studentsTable.appendChild(row);
    });
};

const deleteStudent = async (id) => {
    await fetch(`http://localhost:3000/api/students/${id}`, { method: 'DELETE' });
    fetchStudents();
};

studentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const student = {
        id: Date.now().toString(),
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        patronymic: document.getElementById('patronymic').value,
        birthDate: document.getElementById('birthDate').value,
        startYear: document.getElementById('startYear').value,
        faculty: document.getElementById('faculty').value,
    };

    await fetch('http://localhost:3000/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student),
    });
    fetchStudents();
});

fetchStudents();
