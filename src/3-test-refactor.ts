import axios from 'axios';

const ax = require('axios');

const userList: any = [];

// This is a function that creates a template based on specific conditions like name, id and active as variables.
// Remember to add all possible users to the database
// NOTE: The table is updated in user_table for qa and dev environments
// Some pending users will be added next week
//TODO: Evoid nested if. Use forEach, ex functio ? xxxx  : YYYY
async function CREATE_template_Function(
  name: any,
  id: any,
  active: any
): Promise<string> {
  // This is a condition for name
  if (!name.includes(' ')) {
    // name must be full name, this includes last name
    console.log('WARNING!');
    console.log('Name must be full name. Last name is required');
    console.log('Exit!');
  } // This is a condition for number
  else if (isNaN(id)) {
    // id cannot be zero or negative
    console.log('WARNING!');
    console.log('id must be a number');
    console.log('Exit!');
  } // This is a condition for boolean
  else if ((active = true)) {
    // active depends on the status
    console.log('User is active!');
  } else {
    // do something...
  }
  return name + ' ' + id + ' ' + active;
}

//TODO: for each function. Move to utils.
// This is an experimental code, testing...
function foo(colorType: any) {
  let result = '';
  switch (colorType) {
    case 'red':
      result = 'good';
    case 'blue':
      result = 'good';
    case 'white':
      result = 'bad';
    case 'black':
      result = 'bad';
  }
  return result;
}

//TODO: move to utils. Clean code:
// Step 1: Create a new function like: "createUser" in order to encapsulate the logic of "creation of users"
// Step 2: use "const" instead of "let"
// Step 3: create an Array called "userList" instead of calling "push" continuosly
// Step 4: create a "loop" for restablishing all "null users" instead of making manually.
function mainFunction() {
  let user1: any = CREATE_template_Function('Maria', 1, true);
  sleep(3000);
  let user4: any = CREATE_template_Function('David', 4, false);
  sleep(3000);
  let user5: any = CREATE_template_Function('Steve', 5, true);
  sleep(3000);
  let user2: any = CREATE_template_Function('Pedro', 2, false);
  sleep(3000);
  let user3: any = CREATE_template_Function('Jesus', 3, true);

  userList.push(user1);
  userList.push(user2);
  userList.push(user3);
  userList.push(user4);
  userList.push(user5);

  // Reset all users as null
  user1 = null;
  user2 = null;
  user3 = null;
  user4 = null;
  user5 = null;
}

type Usser = {
  userNamee: string;
  userId: number;
  userrActive: boolean;
};

function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

mainFunction();
