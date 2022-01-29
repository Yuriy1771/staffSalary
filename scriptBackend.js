const requestURL = 'http://localhost:8080/api/users';

function getUsers(type) {
  const client = new XMLHttpRequest();
  client.open('GET',requestURL);
  client.responseType = type;
  // client.setRequestHeader('Content-Type','application/json');
  client.onload = () => {
    if(client.status >= 200 && client.status <= 300) {
      let users = client.response;
      console.log(users);
      for(let i = 0; i < users.length; i++) {
        console.log(users[i].address.street);
        //  передать в выподающий список
        // addOption(usersCheckList[i]);
        usersCheckList.innerHTML += `<select id="usersCheckList">
        <option value="">${users[i].name}</option>
    </select>`
      }
    }else {
      console.error('Произошла ошибка. статус = ' + client.status);
    }
  }
  client.send();
}

getUsers('json');

