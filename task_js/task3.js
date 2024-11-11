let allStudents = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
];

function createStudentsList(listArr) {
    const ul = document.createElement('ul');
    listArr.forEach(student => {
        const li = document.createElement('li');
        const studentName = document.createElement('h2');
        studentName.textContent = student.name;
        const studentAge = document.createElement('span');
        studentAge.textContent = `Возраст: ${student.age} лет`;
        li.appendChild(studentName);
        li.appendChild(studentAge);
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

createStudentsList(allStudents);
