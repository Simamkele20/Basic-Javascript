let hours= +prompt("Enter your hours worked: ")
let rate=  +prompt("Enter your rate: ")
let salary = hours * rate
let curformat= Intl.NumberFormat()
console.log(`YOur salary is R${curformat.format(salary)}`)