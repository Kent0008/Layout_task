function createStudentCard(name, age) {
    const card = document.createElement('div');

    const studentName = document.createElement('h2');
    studentName.textContent = name;


    const studentAge = document.createElement('span');
    studentAge.textContent = `Возраст: ${age} лет`;

    card.appendChild(studentName);
    card.appendChild(studentAge);

    document.body.appendChild(card);
}


createStudentCard('Игорь', 17);
createStudentCard('Оля', 21);
createStudentCard('Рома', 19);
