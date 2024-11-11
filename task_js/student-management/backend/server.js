const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Массив студентов будет храниться в JSON файле
const studentsFile = path.join(__dirname, 'students.json');

// Middleware для обработки JSON данных
app.use(bodyParser.json());

// Проверка наличия файла и создание его, если он не существует
if (!fs.existsSync(studentsFile)) {
    fs.writeFileSync(studentsFile, JSON.stringify([]));
}

// Получить список студентов
app.get('/api/students', (req, res) => {
    const students = JSON.parse(fs.readFileSync(studentsFile, 'utf-8'));
    res.json(students);
});

// Добавить нового студента
app.post('/api/students', (req, res) => {
    const newStudent = req.body;
    const students = JSON.parse(fs.readFileSync(studentsFile, 'utf-8'));
    students.push(newStudent);
    fs.writeFileSync(studentsFile, JSON.stringify(students));
    res.status(201).json(newStudent);
});

// Удалить студента
app.delete('/api/students/:id', (req, res) => {
    const id = req.params.id;
    let students = JSON.parse(fs.readFileSync(studentsFile, 'utf-8'));
    students = students.filter(student => student.id !== id);
    fs.writeFileSync(studentsFile, JSON.stringify(students));
    res.status(204).end();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
