
var prompt = require('prompt-sync')();
let addressBook = [];
exit = true;
function addPerson() {
    let person = {};
    let flag = true;
    let fname = prompt("Please enter first name: ");
    for (let i = 0; i < addressBook.length; i++) {
        if (fname == addressBook[i].fname) {
            flag = false;
        }
    }
    if (flag == true) {
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
        addressBook.push(person);
    }
    else {
        console.log("Please enter other name person already existing in the array ");
    }

}


// add new person to address book
function print() {
    console.log(addressBook);
}
function edit(name) {
    console.log("please enter 1 if you want change the address person: ");
    console.log("please enter 2 if you want change the phone person");
    console.log("please enter 3 if you want change the zip person");
    console.log("please enter 4 if you want change the city person");
    console.log("please enter 5 if you want change the state person");
    let choice = prompt("Please select the one choice: ");
    let value = prompt("Please enter the value: ")
    let flag = false;
    for (let i = 0; i < addressBook.length; i++) {
        if (name == addressBook[i].fname) {
            flag = true;
            if (choice == 1) {
                addressBook[i].address = value;
            }
            if (choice == 2) {
                addressBook[i].city = value;
            }
            if (choice == 3) {
                addressBook[i].state = value;
            }
            if (choice == 4) {
                addressBook[i].zip = value;
            }
            if (choice == 5) {
                addressBook[i].phone = value;
            }

        }
    }
    if (flag == false) {
        console.log(" person does not match so coorect person name: ");
    }

}
function deletePerson(name) {
    for (let i = 0; i < addressBook.length; i++) {
        if (name == addressBook[i].fname) {
            addressBook.splice(i, 1);
        }
    }
}

function alphabeticalSort(name) {
    addressBook.sort( (a,b) => {
        if(a.fname.toLowerCase() < b.fname.toLowerCase()) {
            return -1;
        }
        if(a.fname.toLowerCase() > b.fname.toLowerCase()) {
            return 1;
        }
        return 0; 
    });
    console.log(addressBook);
    
}

// function duplicate (name) {
//  addressBook.splice(addressBook.indexOf(),1);
// }
while (exit == true) {
    console.log(" Please enter 1  for adding new person");
    console.log(" Please enter  2  for printing book");
    console.log(" Please 3 for editing details");
    console.log(" Please 4 for deleting details");
    console.log("Please enter 5 for sorting by person name");
    console.log(" Please 6 exit option for exiting");
    let option = prompt("Please select one option for addperson: ");

    if (option == 1) {
        addPerson();
    }
    if (option == 2) {
        print();
    }
    if (option == 3) {
        let name = prompt("Please Enter first name whose details  you want to edit: ");
        edit(name);
    }
    if (option == 4) {
        let name = prompt("Please Enter first name whose details  you want to delete: ");
        deletePerson(name);
    }
    if(option == 5) {
        let name;
        alphabeticalSort(name);
      
    }
    if (option == 6) {
        exit = false;
    }
}

