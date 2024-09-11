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

// function checkDigitsInName(name) {
//     const sajjad = name.split("");
//     console.log(sajjad.lenght);
//     for(let i =0; i < sajjad.lenght; i++){
        
//         if( i <= 0 || item > 0){
//             return true;
//         }
//         else{
//             return false
//         }
//     }
    
// }

// const result = checkDigitsInName("rahim0");
// console.log(result);

// problem-4 start here

function calculateFinalScore(obj) {

     if(typeof obj !== "object"){
        return "Invalid Input";
     }

     let totalScore = obj.testScore + obj.schoolGrade;

     if(obj.isFFamily === true){
        totalScore += 20;
     }
     
     const finalScore = totalScore >= 80 ? true : false ;

     return finalScore;
     
}

const person1 = { name: "Rajib", testScore: 45,  schoolGrade: 35, isFFamily : false };

const resultCalculate = calculateFinalScore(person1); 

console.log(resultCalculate);