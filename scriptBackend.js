const baseURL = 'http://localhost:8080/api';
const getUsersURL = baseURL + '/users';
const getMonthsURL = baseURL + '/users/months';

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

async function intiCheckListMonths() {
    let months =  await doRequest(getMonthsURL);
    if (months != null) {
      for (let i = 0; i < months.length; i++) {
        monthsCheckList.innerHTML += `<select id="monthsCheckList">
          <option value="">${months[i]}</option>
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
intiCheckListMonths();
