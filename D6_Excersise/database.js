var Grade = require('./grade');
class Database {
  constructor() {
    this.grades = [new Grade(1, 'Assad', 'CS572', 95)];
  }
  add(grade) {
    this.grades.push(grade);
  }
  update(id, grade) {
    var oldGrade = this.find(id);
    if (!oldGrade) {
      return false;
    }
    oldGrade.name = grade.name;
    oldGrade.course = grade.course;
    oldGrade.grade = grade.grade;
    return true;
  }
  find(id) {
    return this.grades.find(g => g.id == id);
  }
  delete(id) {
    let index = -1;
    for (let i in this.grades) {
      if (this.grades[i].id == id) {
        index = i;
        break;
      }
    }
    if (index == -1) return false;
    this.grades.splice(index, 1);
    return true;
  }
}
module.exports = Database;
