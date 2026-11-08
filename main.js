// ده كلاس الطالب بتاعي
class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }

  getAverage() {
    let total = this.grades.reduce(function(a, b) {
      return a + b;
    }, 0);
    return total / 3;
  }

  getGrade() {
    let avg = this.getAverage();
    if (avg >= 90) return "A";
    else if (avg >= 80) return "B";
    else if (avg >= 70) return "C";
    else if (avg >= 60) return "D";
    else if (avg >= 50) return "E";
    else return "F";
  }

  getStatus() {
    let avg = this.getAverage();
    if (avg >= 50 && this.attendance >= 75)
      return "ناجح";
    else
      return "يحتاج مراجعة";
  }
}

let studentsList = [
  new Student(101, "Nour", [88, 79, 92], 88),
  new Student(102, "Salma", [43, 47, 41], 82),
  new Student(103, "Habiba", [71, 68, 74], 91),
  new Student(104, "Farah", [44, 39, 46], 68),
];

console.log("=== تقرير الطلاب ===");
for (let i = 0; i < studentsList.length; i++) {
  let s = studentsList[i];
  console.log("الاسم: " + s.name + " | المتوسط: " + s.getAverage().toFixed(1) + " | التقدير: " + s.getGrade() + " | النتيجة: " + s.getStatus());
}

let struggling = studentsList.filter(function(s) {
  return s.getAverage() >= 40 && s.getAverage() <= 49;
});

let afterRafa = struggling.map(function(s) {
  return {
    name: s.name,
    oldAvg: s.getAverage(),
    newAvg: s.getAverage() + 5
  };
});

console.log("=== اللي خدوا رأفة ===");
console.log(afterRafa);

let sumNew = afterRafa.reduce(function(a, s) {
  return a + s.newAvg;
}, 0);

let rafaAvg = 0;
if (afterRafa.length > 0) {
  rafaAvg = sumNew / afterRafa.length;
}

console.log("متوسط المتعثرين بعد الرأفة = " + rafaAvg.toFixed(1));