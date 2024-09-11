// problem-1 satart here

// function calculateTax(income, expenses) {
//      if(income < 0 || expenses < 0 || income < expenses){
//           return "Invalid Input" ;
//      }

//      let profit = income - expenses;
//      let incomeTax = profit * .20;
//      return incomeTax;
// }

// const taxAmount = calculateTax(6000,15000);
// console.log(taxAmount);

// problems-2 start here

// function sendNotification(email) {
    
//     if(email.indexOf("@") < 1){
//          return "Invalid Email";
//     }   

//     let name = email.split("@");
//     let userName = name[0];
//     let domainName = name[1];
//     let notification = `${userName} sent you an email from ${domainName}`;
    
//     return notification;    
    
// }

// const getNotification = sendNotification("sadia8icloud.com");
// console.log(getNotification);

// problem-3 start here

function checkDigitsInName(name) {

    if(typeof name !== "string"){
        return "Invalid Input";
    }
    
    if(name.match("0") || name.match("1") || name.match("2") || name.match("3") || name.match("4")
    || name.match("5") || name.match("6") || name.match("7") || name.match("8") || name.match("9")){
        return true;
    }
    else{
        return false;
    }
    
}

const result = checkDigitsInName(["Raj"]);
console.log(result);

// problem-4 start here

// function calculateFinalScore(obj) {

//      if(typeof obj !== "object"){
//         return "Invalid Input";
//      }

//      let totalScore = obj.testScore + obj.schoolGrade;

//      if(obj.isFFamily === true){
//         totalScore += 20;
//      }
     
//      const finalScore = totalScore >= 80 ? true : false ;

//      return finalScore;
     
// }

// const person1 = { name: "Rajib", testScore: 45,  schoolGrade: 35, isFFamily : false };

// const resultCalculate = calculateFinalScore(person1); 

// console.log(resultCalculate);

// problem-5 start here

// function  waitingTime(waitingTimes  , serialNumber) {
        
//         if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
//                  return "Invalid Input";
//         }

//         let totalTime = 0;
//         for(let time of waitingTimes){
//             totalTime = totalTime + time;
//         }
//         let averageTime = Math.round(totalTime / waitingTimes.length);
//         let availableCandidate = serialNumber - waitingTimes.length - 1;
//         let finalWatingTimes = availableCandidate * averageTime;
//         return finalWatingTimes;
// }

// const interviewTime = [6];

// const result = waitingTime(interviewTime, 4);

// console.log(result);