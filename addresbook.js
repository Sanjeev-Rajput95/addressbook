
var prompt = require('prompt-sync')();
let person = {}
let addressOf = [];
addPerson();
function addPerson () {
    let fname = prompt("Please enter first name: ");
    let lname = prompt("Please enter the last name: ");
    let address = prompt("Please enter address: ");
    let city = prompt("Please enter city: ");
    let state = prompt("Please enter the state: ");
    let zip = prompt("Please enter the zip: ");
    let phone = prompt("Please enter phone: ");
    person.fname = fname;
    person.lname = lname;
    person.address = address;
    person.city = city;
    person.state = state;
    person.zip = zip;
    person.phone = phone;
    addressOf.push(person);
    console.log(addressOf);
}

