
const person = {
    name : "mehedy",
    address: "Rajshahi",
    age: 26
}
console.log(person.address)

let i = 0;
for(let key in person){
     i++
    console.log(key + "=>" +person[key])
}
console.log(i)


// console.log(person.name)
// console.log(person["name"])

// const keys = Object.keys(person)
// const values = Object.values(person)
 


// person.contact = "no contact"
// person.name = "hasan"
// console.log(keys)
// console.log(values)

// console.log(person.name)