class Person{
    name
    #age
    #weight

    constructor(name, age, weight) {
        this.name = name
        this.#age = age
        this.#weight = weight
    }

    intro() {
        console.log(this.name)
        console.log(this.#age)
        console.log(this.#weight)
    }
}

const girl = new Person('伦伦酱', 18, '45kg')

/*
console.log(girl.name)
console.log(girl.#age)
console.log(girl.#weight)*/

girl.intro()