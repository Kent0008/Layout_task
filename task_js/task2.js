function createStudentCard(student) {
    const card = document.createElement('div');

    const studentName = document.createElement('h2');
    studentName.textContent = student.name;

    const studentAge = document.createElement('span');
    studentAge.textContent = `Возраст: ${student.age} лет`;


    card.appendChild(studentName);
    card.appendChild(studentAge);


    document.body.appendChild(card);
}


let studentObj = {
    name: 'Игорь',
    age: 17
};


createStudentCard(studentObj);

studentObj = {
    name: 'Оля',
    age: 21
};

createStudentCard(studentObj);

studentObj = {
    name: 'Рома',
    age: 19
};

createStudentCard(studentObj);