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

function sendNotification(email) {
    
    if(email.indexOf("@") < 1){
         return "Invalid Email";
    }   

    let name = email.split("@");
    let userName = name[0];
    let domainName = name[1];
    let notification = `${userName} sent you an email from ${domainName}`;
    
    return notification;    
    
}

const getNotification = sendNotification("sadia8icloud.com");
console.log(getNotification);
