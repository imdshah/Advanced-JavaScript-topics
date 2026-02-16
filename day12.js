const parent= {
    greet (){
        console.log("Hi! This is parent Object")
    }
}
const child = Object.create(parent)

child.sayHi = function(){
    console.log("Hi this is child")
}
child.greet();


/*
Prototype Lookup Order when calling child.greet():

1. JS checks if 'greet' exists in child → Not found
2. JS follows internal [[Prototype]] link → goes to parent
3. Finds 'greet' inside parent →  Executes it
4. Stops searching

Prototype Chain:
child → parent → Object.prototype → null
*/