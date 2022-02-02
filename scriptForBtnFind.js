const usersCheckList = document.querySelector('#usersCheckList');
const monthCheckList = document.querySelector('#monthsCheckList');


function findUser() {
  let userName = usersCheckList.value;
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === userName) {
      return  users[i];
    }
  }
}

function findMonth() {
  return monthCheckList.value;
}

function process(user, salary) {
  document.querySelector('#WindowOnePosition').innerHTML+= user.position;
  document.querySelector('#WindowOneSalary').innerHTML+= user.salary;
  document.querySelector('#WindowOnePremium').innerHTML+= user.premiumPercent;
}

function btnFindOnClick() {
  let user = findUser();
  document.querySelector('#WindowOnePosition').innerHTML+= user.position;
  document.querySelector('#WindowOneSalary').innerHTML+= user.salary;
  document.querySelector('#WindowOnePremium').innerHTML+= user.premiumPercent;
}