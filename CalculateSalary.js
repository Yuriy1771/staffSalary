const salaryURL = baseURL + '/salary';


function processBody(userSalary) {
  document.querySelector('#salaryText').innerHTML += userSalary.resultSalary;
  document.querySelector('#OkladText').innerHTML += userSalary.salary;
  document.querySelector('#premiumText').innerHTML += userSalary.premium;
}

function calculateSalary () {
  let user = findUser();
  let month = findMonth();
  let absenceDayCount = document.querySelector('#propuskov').value;
  let overworkDayCount = document.querySelector('#sverh').value;
  let body = {
    userId : user.id,
    month: month,
    absenceDayCount: absenceDayCount,
    overworkDayCount: overworkDayCount
  }
  doPostRequest(salaryURL, body).then(data => processBody(data));

}
