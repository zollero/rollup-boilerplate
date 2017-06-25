
class Customer {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`The name is: ${this.name}`)
    }
}

let kevin = new Customer('kevin');

kevin.sayHi();
