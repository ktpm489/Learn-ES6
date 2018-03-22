class Animal {
    constructor(name, height){
        this.name = name;
        this.height = height;
    }
    hello() {
        console.log(`Hi! I'm ${this.name} from the Animal`)
    }
    // static method
    static staticMethodDemo() {
        console.log("Static Demo")
    }
}

export default Animal