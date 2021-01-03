function submit() {
    let Quizes = parseInt(document.getElementById('Quizes').value)
    let Midterm = parseInt(document.getElementById('Midterm').value)
    let FinalTest = parseInt(document.getElementById('FinalTest').value)
    let Oral = parseInt(document.getElementById('Oral').value)

    let totalGrades = Quizes + Midterm + FinalTest + Oral

    let finalGrade = ""

    let gif = "0"

    switch (true) {
        case (totalGrades > 100):
            finalGrade = "Not Exist";
            break;
        case (totalGrades <= 100 && totalGrades >= 90):
            finalGrade = "A";
            gif = "1"
            break;
        case (totalGrades <= 89 && totalGrades >= 80):
            finalGrade = "B";
            gif = "2"
            break;
        case (totalGrades <= 79 && totalGrades >= 70):
            finalGrade = "C";
            gif = "3"
            break;
        case (totalGrades <= 69 && totalGrades >= 60):
            finalGrade = "D";
            gif = "4"
            break;
        case (totalGrades < 0):
            finalGrade = "Not Exist";
            break;
        default:
            finalGrade = "F";
    }

    // console.log(finalGrade);

    document.getElementById('total_grades').innerHTML = totalGrades
    document.getElementById('final_grade').innerHTML = finalGrade
    document.getElementById('gif').src = './img/'+gif+'.gif'

}