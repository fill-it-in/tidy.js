import { scan, check, censor  } from "../tidy.js";

// Function X_check() runs the imported function X from tidy and stops the time.

function scan_check() {
const start = Date.now();
const result = scan('ass');
const end = Date.now();
return `Execution time for scan() function returned ${result} in ${end - start} ms.\n`;
}

function check_check() {
const start = Date.now();
const result = check('.com');
const end = Date.now();
return `Execution time for check() function returned ${result} in ${end - start} ms.\n`;
}

function censor_check1() {
const start = Date.now();
const result = censor('fooass', 1);
const end = Date.now();
return `Execution time for censor(1) function returned ${result} in ${end - start} ms.\n`;
}

function censor_check2() {
const start = Date.now();
const result = censor('foo.com', 2);
const end = Date.now();
return `Execution time for censor(2) function returned ${result} in ${end - start} ms.\n`;
}

function censor_check3() {
const start = Date.now();
const result = censor('fooassbar.com', 3);
const end = Date.now();
return `Execution time for censor(3) function returned ${result} in ${end - start} ms.`;
}

// Returns the stopped times for all the functions imported from tidy.

console.log(scan_check());
console.log(check_check());
console.log(censor_check1());
console.log(censor_check2());
console.log(censor_check3());