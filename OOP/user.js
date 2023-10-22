// Inheritance

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

const user1 = new User('Tunde', 'Sanusi', 'example@gmail.com', "helloworld");
const user2 = new User('Adeyemo', 'Buliameen', 'example3@gmail.com', "wordhello");
const user3 = new User('Yusuf', 'Babatunde', 'example13@gmail.com', "incoming");

const user4 = new User();

console.log(user1.getEmail());
console.log(user1.getFullName());
console.log(user1.getPassword());


console.log(user4.getFullName())


user3.setFullName('Yusuf', 'Olalekan')
console.log(user3.getFullName())