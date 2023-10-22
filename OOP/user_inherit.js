class User {

    constructor(firstname, lastname, email, password) {
        this.firstname = firstname || "Anonymous"
        this.lastname = lastname || "Superhuman"
        this.email = email || ""
        this.password = password || "defaultPassword"
        this.emailActivated = false
    }


    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }

    getEmail() {
        return `${this.email}`;
    }

    getPassword() {
        return `${this.password}`;
    }

    setFullName(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }

    activateEmail() {
        this.emailActivated = true;
    }


}

// Inheritance
class AdminUser extends User {
    constructor(firstname, lastname, email, password, userType, adminNumber) {
        super(firstname, lastname, email, password);

        this.userType = userType;
        this.adminNumber = adminNumber
        
    }

    getAdminNumber() {
        return `${this.adminNumber}`
    }

}

const admin1 = new AdminUser('Prince', 'Deremi', 'example2023@gmail.com', 'howdyworld', 'Admin', '001');

console.log(admin1.getAdminNumber());



class Student extends User {
    constructor(firstname, lastname, email, password, studentNumber, studentClass, subjects) {
        super(firstname, lastname, email, password);

        this.studentNumber = studentNumber || 'N\A';
        this.studentClass = studentClass || 'N\A'
        this.subjects = subjects || []
    }

    getStudentNumber() {
        return `${this.studentNumber}`;
    }

    getStudentClass() {
        return `${this.studentClass}`;
    }

    getSubjects() {
        return `${this.subjects}`
    }

    setStudentNumber(studentNumber) {
        this.studentNumber = studentNumber;
    }

    setStudentClass(studentClass) {
        this.studentClass = studentClass;
    }

    setSubjects(subjects) {
        this.subjects = subjects;
    }


}

const student1 = new Student('Akinrinade', 'Abdulazeez', 'example45@gmail.com', 'howdyworld', 45, 'MTS', ['MTS405', 'MTS 501', 'MTS 599', 'MTS 508'])

console.log(student1.getFullName());
console.log(student1.getSubjects());

student1.setStudentClass(305);

console.log(student1.getStudentClass());