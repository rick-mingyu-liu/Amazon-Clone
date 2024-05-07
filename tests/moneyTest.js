import {formatCurrency} from '../scripts//utils/money.js';

console.log("test suite: formatCurrency");

console.log("convert cents to dollars");

if (formatCurrency(2095) === '20.95') {
    console.log('pass');
} else {
    console.log('fail');
}

console.log("works with 0");

if (formatCurrency(0) === '0.00') {
    console.log('pass');
} else {
    console.log('fail');
}

console.log("rounds up to the nearest cent");

if (formatCurrency(2000.5) === '20.01') {
    console.log('pass');
} else {
    console.log('fail');
}

if (formatCurrency(2000.4) === '20.00') {
    console.log('pass');
} else {
    console.log('fail');
}