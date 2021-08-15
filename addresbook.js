
var prompt = require('prompt-sync')();
let person = {}
let addressOf = [];
exit = true;
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
}


// add new person to address book
function print () {
    console.log(addressOf);
    }

while(exit == true) {
    console.log("Please Enter the first option for adding");
    console.log("Please Enter the second option for adding");
    console.log("Please Enter the exit option for adding");
    let option = prompt("Please select one option for addperson");

    if(option == 1) {
        addPerson (); 
    }
    if(option == 2) {
        print();
    }
    if( option == 3) {
        exit = false;
    }
}

