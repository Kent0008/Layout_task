const students = [
    { firstName: "Иван", lastName: "Иванов", patronymic: "Иванович", birthDate: new Date(2000, 0, 1), startYear: 2018, faculty: "Физика" },
    { firstName: "Петр", lastName: "Петров", patronymic: "Петрович", birthDate: new Date(1999, 5, 15), startYear: 2017, faculty: "Математика" },
];

// Функция для вычисления возраста
const calculateAge = (birthDate) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

// Функция для форматирования дат
const formatDate = (date) => {
    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
};

// Функция для вывода всех студентов
const renderStudents = (studentsArray) => {
    const tbody = document.querySelector('#studentsTable tbody');
    tbody.innerHTML = '';
    studentsArray.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.lastName} ${student.firstName} ${student.patronymic}</td>
            <td>${student.faculty}</td>
            <td>${formatDate(student.birthDate)} (${calculateAge(student.birthDate)} лет)</td>
            <td>${student.startYear}-${student.startYear + 4} (${(new Date().getFullYear() >= student.startYear + 4) ? 'закончил' : (new Date().getFullYear() - student.startYear)} курс)</td>
        `;
        tbody.appendChild(row);
    });
};

// Функция фильтрации студентов
const filterStudents = () => {
    let filteredStudents = [...students];

    const nameFilter = document.getElementById('searchName').value.toLowerCase();
    const facultyFilter = document.getElementById('searchFaculty').value.toLowerCase();
    const startYearFilter = document.getElementById('searchStartYear').value;
    const endYearFilter = document.getElementById('searchEndYear').value;

    if (nameFilter) {
        filteredStudents = filteredStudents.filter(student => 
            `${student.lastName} ${student.firstName} ${student.patronymic}`.toLowerCase().includes(nameFilter)
        );
    }
    if (facultyFilter) {
        filteredStudents = filteredStudents.filter(student => 
            student.faculty.toLowerCase().includes(facultyFilter)
        );
    }
    if (startYearFilter) {
        filteredStudents = filteredStudents.filter(student => 
            student.startYear === Number(startYearFilter)
        );
    }
    if (endYearFilter) {
        filteredStudents = filteredStudents.filter(student => 
            student.startYear + 4 === Number(endYearFilter)
        );
    }

    renderStudents(filteredStudents);
};

// Функция добавления студента
const addStudent = (studentData) => {
    students.push(studentData);
    renderStudents(students);
};

// Валидация данных студента
const validateStudentForm = (formData) => {
    const errors = [];

    for (const key in formData) {
        if (formData[key].trim() === '') {
            errors.push(`Поле "${key}" обязательно для заполнения.`);
        }
    }

    const birthDate = new Date(formData.birthDate);
    const currentDate = new Date();
    if (birthDate < new Date(1900, 0, 1) || birthDate > currentDate) {
        errors.push("Дата рождения должна быть в пределах с 01.01.1900 по текущую дату.");
    }

    const startYear = Number(formData.startYear);
    if (startYear < 2000 || startYear > currentDate.getFullYear()) {
        errors.push("Год начала обучения должен быть между 2000 и текущим годом.");
    }

    return errors;
};

// Обработчик отправки формы
document.getElementById('studentForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const studentData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        patronymic: document.getElementById('patronymic').value,
        birthDate: document.getElementById('birthDate').value,
        startYear: document.getElementById('startYear').value,
        faculty: document.getElementById('faculty').value,
    };

    const errors = validateStudentForm(studentData);
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        addStudent(studentData);
        document.getElementById('studentForm').reset();
    }
});

document.getElementById('searchName').addEventListener('input', filterStudents);
document.getElementById('searchFaculty').addEventListener('input', filterStudents);
document.getElementById('searchStartYear').addEventListener('input', filterStudents);
document.getElementById('searchEndYear').addEventListener('input', filterStudents);

renderStudents(students);