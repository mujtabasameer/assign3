import { question } from "readline-sync";

class student {
  private courses: courses[] = [];
  private check: boolean = false;
  private name: string;
  private roll_num: number;
  private static id = 10000;
  private total_fee: number = 0;

  constructor(name: string) {
    this.name = name;
    this.roll_num = student.id++;
  }

  public enroll(course: courses) {
    this.courses.push(course);
    this.total_fee += course.course_fee_get;
  }

  private check_true() {
    this.check = true;
  }

  public pay_fee() {
    let pay_fee_amount: number = parseInt(
      question(
        `You have ${this.total_fee} pending. How much would u like to pay?`
      )
    );
    this.total_fee -= pay_fee_amount;
    if (this.total_fee > 0) {
      console.log(`You have ${this.total_fee} dues remaining.`);
    } else {
      this.check_true();
    }
  }

  public view_student_info() {
    console.log(
      `Name: ${this.name}\nRoll number: ${this.roll_num}\nDues remaining: ${this.total_fee}\nYour regiestered courses: `
    );
    this.courses.forEach((course) => {
      console.log(`${course.course_name_get} ${course.course_id_get}`);
    });
  }
}

class courses {
  private course_name: string;
  private course_id: string;
  private course_fee: number;

  constructor(course_name: string, course_id: string, course_fee: number) {
    this.course_name = course_name;
    this.course_id = course_id;
    this.course_fee = course_fee;
  }

  get course_name_get() {
    return this.course_name;
  }

  get course_id_get() {
    return this.course_id;
  }

  get course_fee_get() {
    return this.course_fee;
  }
}

function create_course(): {
  maths: courses;
  physics: courses;
  chemistry: courses;
} {
  const maths = new courses("Maths", "001", 200);
  const physics = new courses("Physics", "002", 150);
  const chemistry = new courses("Chemistry", "003", 100);
  return {
    maths,
    physics,
    chemistry,
  };
}

class sms {
  private studentt: student[] = [];

  public add_stu(name: string) {
    const stu = new student(name);
    this.studentt.push(stu);
    return stu;
  }

  public enroll(students: student, course: courses) {
    students.enroll(course);
  }

  public view(students: student) {
    students.view_student_info();
  }

  public pay(students: student) {
    students.pay_fee();
  }
}

function main() {
  const courses_avail = create_course();
  const sms1 = new sms();
  const ali = sms1.add_stu("ali");
  sms1.enroll(ali, courses_avail.maths);
  sms1.pay(ali);
  sms1.view(ali);

  const ameena = sms1.add_stu("ameena");
  sms1.enroll(ameena, courses_avail.maths);
  sms1.enroll(ameena, courses_avail.physics);
  sms1.pay(ameena);
  sms1.view(ameena);
}

main();
