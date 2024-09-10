// problem-1 satart here

function calculateTax(income, expenses) {
     if(income < 0 || expenses < 0 || income < expenses){
          return "Invalid Input" ;
     }

     let profit = income - expenses;
     let incomeTax = profit * .20;
     return incomeTax;
}

const taxAmount = calculateTax(6000,15000);
console.log(taxAmount);
