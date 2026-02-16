const user={
    username: "Ahmed",
    age: 21,
    address: {
        city: "Panjim",
        state: "Goa"
    }

}
// const anotherUser= {...user} // This creates a new object which is a copy of user for anotherUser
// anotherUser.age=22 , anotherUser.username= "Ali", anotherUser.address.city="Ponda" //Here username and age is changed from the original object but the nested object has a reference to user so mutating it affects both, this is shallow copy.
//const anotherUser = JSON.parse(JSON.stringify(user)) // So for deep copy we use this to also mutate the nested object, but it has some limitations.
const anotherUser = structuredClone(user)// This solves most of the limitations which JSON.parse(JSON.stringify()) had. And allows deep copy.
anotherUser.address.city="Ponda", anotherUser.username= "Ali"
console.log(user, anotherUser)


