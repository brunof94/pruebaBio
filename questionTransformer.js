const questionPath = './pruebas/[digestivoRenal2022]Examen de Digestivo Renal y Endócrino - 16 febrero 2022.txt'
const fs = require('fs');
// Lee el contenido del archivo
const content = fs.readFileSync(questionPath, 'utf-8').split('\n');

const questions = [];
let currentQuestion = null;

const questionImages = [10,11,14,23,25,36];

content.forEach(line => {
    line = line.trim();
    if(line === '') {
        if(questionImages.includes(questions.length + 1))currentQuestion.image = true;
        questions.push(currentQuestion);
        currentQuestion = null;
    }else if(!currentQuestion){
        currentQuestion = { question: line, options: [] };
    }else{
        const isCorrect = line.indexOf('*') >= 0;
        const option = line.replace('*', '').trim().split(')')[1];
        currentQuestion.options.push({ option, isCorrect });
    }
});

//escribir en un nuevo archivo json
const nombre = questionPath.split('/').pop().replace('.txt', '');
const jsonName = questionPath.replace('.txt', '.json')
const returnJson = {
    nombre: nombre.split(']')[1],
    codigo: nombre.split(']')[0].replace('[', ''),
    preguntas: questions
}
fs.writeFileSync(jsonName, JSON.stringify(returnJson, null, 2));