
class Customer {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name)
    }
}

let kevin = new Customer('kevin');

kevin.sayHi();
