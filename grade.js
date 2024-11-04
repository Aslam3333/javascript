function evaluateGrade(score) {
    if (score >= 90 && score <= 100) {
        return "Grade A";
    } else if (score >= 80 && score < 90) {
        return "Grade B";
    } else if (score >= 70 && score < 80) {
        return "Grade C";
    } else if (score >= 60 && score < 70) {
        return "Grade D";
    } else if (score >= 50 && score < 60) {
        return "Grade E";
    } else if (score < 50 && score >= 0) {
        return "Grade F";
    } else {
        return "Invalid score. Please enter a number between 0 and 100.";
    }
}
let 