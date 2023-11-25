function StudentDetails(name, roll_no, className, section, marks) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks = marks;
  }

   // Example usage:
   let student = new StudentDetails(
    "John",
    123,
    "10th",
    "A",
    {
      science: 72,
      maths: 75,
      social_science: 78,
      hindi: 68,
      english: 89
    }
  );
  student.printTop3Subjects = function() {
    let sortedSubjects = Object.keys(this.marks).sort(function(a, b) {
      return this.marks[b] - this.marks[a];
    }.bind(this));
  
    let top3Subjects = sortedSubjects.slice(0, 3);
  
    console.log("Top three subjects:");
    top3Subjects.forEach(function(subject) {
      console.log(subject);
    });
  };

  student.printReportCard = function() {
    console.log("+--------------------+");
    console.log("|     REPORT CARD    |")
    console.log("|Name     - ", this.name +"|");
    console.log("|Roll no. - ", this.roll_no +"|");
    console.log("|Class    - ", this.class+"|");
    console.log("|Section  - ", this.section+"|");
    console.log("Marks:"+"|");
    for (let subject in this.marks) {
      console.log("|"+subject + " - ", this.marks[subject]+"|");
    }
    let totalMarks = Object.values(this.marks).reduce(function(acc, curr) {
        return acc + curr;
      }, 0);
      let percentage = (totalMarks / (Object.keys(this.marks).length * 100)) * 100;
    
      console.log("|Percentage - ", percentage.toFixed(2) + "%"+"|");
    };
    
    student.printTop3Subjects();
    student.printReportCard();