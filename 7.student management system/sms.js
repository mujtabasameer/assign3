"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
class student {
    constructor(name) {
        this.courses = [];
        this.check = false;
        this.total_fee = 0;
        this.name = name;
        this.roll_num = student.id++;
    }
    enroll(course) {
        this.courses.push(course);
        this.total_fee += course.course_fee_get;
    }
    check_true() {
        this.check = true;
    }
    pay_fee() {
        let pay_fee_amount = parseInt((0, readline_sync_1.question)(`You have ${this.total_fee} pending. How much would u like to pay?`));
        this.total_fee -= pay_fee_amount;
        if (this.total_fee > 0) {
            console.log(`You have ${this.total_fee} dues remaining.`);
        }
        else {
            this.check_true();
        }
    }
    view_student_info() {
        console.log(`Name: ${this.name}\nRoll number: ${this.roll_num}\nDues remaining: ${this.total_fee}\nYour regiestered courses: `);
        this.courses.forEach((course) => {
            console.log(`${course.course_name_get} ${course.course_id_get}`);
        });
    }
}
student.id = 10000;
class courses {
    constructor(course_name, course_id, course_fee) {
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
function create_course() {
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
    constructor() {
        this.studentt = [];
    }
    add_stu(name) {
        const stu = new student(name);
        this.studentt.push(stu);
        return stu;
    }
    enroll(students, course) {
        students.enroll(course);
    }
    view(students) {
        students.view_student_info();
    }
    pay(students) {
        students.pay_fee();
    }
}
function main() {
    const courses_avail = create_course();
    const sms1 = new sms();
    const ali = sms1.add_stu('ali');
    sms1.enroll(ali, courses_avail.maths);
    sms1.pay(ali);
    sms1.view(ali);
    const ameena = sms1.add_stu('ameena');
    sms1.enroll(ameena, courses_avail.maths);
    sms1.enroll(ameena, courses_avail.physics);
    sms1.pay(ameena);
    sms1.view(ameena);
}
main();
