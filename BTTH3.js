let year = 2026;
let isLeapYear = (year % 4 === 0 && year % 100 != 0);
console.log( 
    isLeapYear 
? "Tháng 2 có 29 ngày"
: "Tháng 2 có 28 ngày"
); 

