function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subjek = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...rest) {
  if (this.marks === undefined) {
    this.marks = [...rest];
  } else {
    this.marks.push(...rest);
  }
}


Student.prototype.getAverage = function () {
  let sum = 0;
  this.marks.forEach((mark) => {sum += parseInt(mark)})
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
}
// ваш код для остальных методов