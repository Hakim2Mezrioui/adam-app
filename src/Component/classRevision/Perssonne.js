class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    afficher() {
        return (`name: ${this.name} age: ${this.age}`);
    }
}

class professor extends Person {
    constructor(name, age, salaireNet, numbreDuModule, numbreDuClass) {
        super(name, age);
        this.salaireNet = salaireNet;
        this.numbreDuClass = numbreDuClass;
        this.numbreDuModule = numbreDuModule;
    }

    calculerSalaireTotal() {
        return this.salaireNet + (this.numbreDuClass + this.numbreDuModule) * (this.salaireNet / 100);
    }
}

class etudiant extends Person {
    constructor(name, age, cdi, note) {
        super(name, age);
        this.cdi = cdi;
        this.note = note
    }

    afficherInfo() {
        return `name: ${this.name} age: ${this.age} note: ${this.age}`;
    }
    
}

let pers1 = new Person('adam', 22);
let pro1 = new professor("mezrioui hakim", 23, 3000, 3, 3);
let etud1 = new etudiant("anas", 19, "1351531", 18);

console.log(pers1.afficher());
console.log(pro1.calculerSalaireTotal());
console.log(etud1.afficherInfo());