const baseURL = 'http://localhost:8080/api';
const getUsersURL = baseURL + '/users';

async function initCheckListUsers() {
  let users =  await doRequest(getUsersURL);
  if (users != null) {
    for (let i = 0; i < users.length; i++) {
      //  передать в выподающий список
      usersCheckList.innerHTML += `<select id="usersCheckList">
        <option value="">${users[i].name}</option>
    </select>`
    }
  }
}

async function doRequest( url)  {
  let response = await fetch(url);
  if (response.ok) {
    return await response.json()
  } else {
    return null;
  }
}

initCheckListUsers();