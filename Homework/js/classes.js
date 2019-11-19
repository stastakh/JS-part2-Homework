class UserList {
  constructor(users) {
    this._users = users;
  }

  showNames() {
    this._users.forEach(user => {
      console.log(user.firstName);
    });
    return this;
  }

  showById(id) {
    let idMatches = false;
    this._users.forEach(user => {
      // Check ids of all the users
      if (user.id === id) {
        console.log(user);
        idMatches = true;
      }
    });
    if (!idMatches) {
      console.log(`Unable to find user with id: ${id}`);
    }
    return this;
  }

  add(firstName) {
    if (firstName) {
      // Generate new id
      const newId = Math.floor(Math.random() * Math.pow(10, 13)).toString();
      const newUser = {
        id: newId,
        firstName
      };
      // add user to the array
      this._users.push(newUser);
      console.log(`Hi everyone, I am ${firstName}`);
    } else {
      console.log('First name is required!');
    }
    return this;
  }

  removeById(id) {
    // find index of user
    const userIndex = this._users.findIndex(user => user.id === id);
    if (userIndex >= 0) {
      // remove user
      this._users.splice(userIndex, 1);
      console.log(`bye bye ${id}`);
    } else {
      console.log(`Unable to find user with id: ${id}`);
    }
    return this;
  }

  showAll() {
    this._users.forEach(user => {
      console.log(user);
    });
    return this;
  }

  logUsersCount() {
    let count = 0;
    this._users.forEach(user => {
      // if id of each user exists -> increment count
      if (user.id) {
        count++;
      }
    });
    console.log(`There are ${count} existing users`);
    return this;
  }
}

const listOfUsers = [
  {
    id: '1485249082126',
    firstName: 'Jon',
    lastName: 'Snow',
    age: 30
  },
  {
    id: '1245485448883',
    firstName: 'Jack',
    lastName: 'Jackson',
    age: 14
  }
];

console.log('----------Second task-----------');

const newList = new UserList(listOfUsers);

newList
  .removeById('5')
  .showAll()
  .add('Helen')
  .showNames()
  .logUsersCount()
  .removeById('1245485448883')
  .showAll()
  .showById('1485249082126');
