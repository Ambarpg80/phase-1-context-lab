/* Your Code Here */
/*=========== CREATE ONE RECORD ============*/
//const employee = {}
function createEmployeeRecord(employeeInfo) {
  let employee = {
      firstName: employeeInfo[0],
      familyName: employeeInfo[1],
      title: employeeInfo[2],
      payPerHour: employeeInfo[3],
      timeInEvents: [],
      timeOutEvents: [], 
    }  
    return employee
  } 
  //createEmployeeRecord(['Amelia', 'Bedelia', 'Maid', 10]) 
  
  
  /*======== CREATE MULTIPLE RECORDS =========*/
  function createEmployeeRecords(employees) { 
    return employees.map(employee => createEmployeeRecord(employee))
  }
  
  //createEmployeeRecords([['Ash', 'Kechum', 'trainer', 15], ['Kim', 'Possible', 'agent', 25]]) 
  
  
  /*=========== CREATE TIME IN EVENT ============*/
  function createTimeInEvent(date) {
    //console.log(date)
    let [givenDate, time] = date.split(' ');
    let parsedTime = parseInt(time, 10);
    
    this.timeInEvents.push({
      type: "TimeIn",
      hour: parsedTime,
      date: givenDate,
    })
    //console.log(this)
    //return this.timeInEvents.push(timeIn)
  
    return this
  }      
  /*
  createTimeInEvent( "2022-9-28 1400") 
  */
  
  
  /*=========== CREATE TIME OUT EVENT ============*/
  
  function createTimeOutEvent(date) {
    let [givenDate, time] = date.split(' ')
    let parsedTime = parseInt(time, 10)
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parsedTime,
      date: givenDate,
    });
    return this
  }
  /*
  createTimeOutEvent( "2022-9-28 2200")
  */
 /*=========== HOURS WORKED ============*/

function hoursWorkedOnDate(soughtDate) {
  //console.log(this.timeInEvents)
  let timeIn = this.timeInEvents.find(obj => obj.date === soughtDate) 
  let timeOut = this.timeOutEvents.find(obj=> obj.date === soughtDate)
   // //
  // console.log(timeIn)
  // console.log(timeOut)
   return ((timeOut.hour - timeIn.hour) / 100 )
  }
//}

//console.log( 
//hoursWorkedOnDate(["2022-9-29 1400", "2022-9-29 2200"],["2022-9-28 1400","2022-9-28 2200"])  )

/*================WAGES EARNED ====================*/

function wagesEarnedOnDate(date) {
  
 let dailyWage = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return dailyWage
 
}
/*
console.log(
wagesEarnedOnDate(["2022-9-29 1400", "2022-9-29 2200"],["2022-9-28 1400","2022-9-28 2200"])  )
*/
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

/*============= FIND BY FIRSTNAME =====================*/
function findEmployeeByFirstName(collection, firstNameString){
  return collection.find(()=>firstNameString)
}

/*============= CALCULATE PAYROLL ====================*/

function calculatePayroll(records){
  return records.reduce((total, perPerson) =>{
  //console.log(perPerson )
  const sum = total + allWagesFor.call(perPerson) 
  //console.log(total)
  return sum
  },0)
  //console.log(total)
 }
 