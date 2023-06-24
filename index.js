const students = [
    {
        name: 'Osvaldo',
        firstGrade: 7,
        secondGrade: 5,
    },
    {
        name: 'Antônio',
        firstGrade: 9,
        secondGrade: 7,
    },
    {
        name: 'Keila',
        firstGrade: 2,
        secondGrade: 4,
    },
    {
        name: 'Marcos',
        firstGrade: 10,
        secondGrade: 9,
    },
    {
        name: 'Alice',
        firstGrade: 9,
        secondGrade: 7,
    },
];

function studentsAverage(g1, g2){
    return (g1 + g2) / 2;
}

function message(avg, name){
    if(avg >= 7){
        return `Parabéns ${name}! Você foi aprovado(a) no concurso`;
    }else{
        return `Não foi dessa vez, ${name}! Tente novamente`
    }
}

function printAvg(students){
   alert(
    `A média do(a) aluno(a) ${students.name} é: ${studentsAverage(students.firstGrade, students.secondGrade)} \n ${message(studentsAverage(students.firstGrade, students.secondGrade), students.name)}`
    );
}

for(let student of students){
    printAvg(student);
}