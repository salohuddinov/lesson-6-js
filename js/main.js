// Func1.

// function power(a, n) {
//     return Math.pow(a, n);
// }

// var result = power(3, 5);
// console.log(result);


// Func2.

// function mean(a, b) {
//     var arithmeticMean = (a + b) / 2;
//     var geometricMean = Math.pow((a * b), 1 / 2);
//     console.log("O'rta arifmetigi:", arithmeticMean);
//     console.log("O'rta geometrigi:", geometricMean);
// }

// mean(12, 48);


// Func3.

// function sum(n) {
//     var result = 0;

//     for (var i = 1; i <= n; i++) {
//         result += i;
//     }

//     return result;
// }

// var n = 5;
// var result = sum(n);
// console.log(result);


// Func4.

// function numberOfRoots(A, B, C) {
//     var D = B * B - 4 * A * C;

//     if (D > 0) {
//         return 2;
//     } else if (D === 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// var result = numberOfRoots(1, -6, 9);
// console.log(result);


// Func5.

// function areaCircle(R) {
//     var S = Math.PI * Math.pow(R, 2);
//     return S;
// }

// var radius = 5;
// var result = areaCircle(radius);
// console.log("Doiraning yuzi:", result);


// Func6.

// function sumRange(A, B) {
//     if (A > B) {
//         return 0;
//     }

//     var result = 0;
//     for (var i = A; i <= B; i++) {
//         result += i;
//     }

//     return result;
// }

// var result = sumRange(8, 10);
// console.log(result);


// Func7.

// function calc(A, B, S) {
//     switch (S) {
//         case "+":
//             return A + B;
//         case "-":
//             return A - B;
//         case "*":
//             return A * B;
//         case "/":
//             return B !== 0 ? A / B : 0;
//         default:
//             return 0;
//     }
// }

// console.log(calc(10, 15, "*")); 
// console.log(calc(7, 8, "+"));  


// Func8.

// function isEven(K) {
//     return K % 2 === 0;
// }

// console.log(isEven(10)); 
// console.log(isEven(7));  


// Func9.

// function sortABC(a, b, c) {
//     var min = Math.min(a, b, c);
//     var max = Math.max(a, b, c);
//     var mid = a + b + c - min - max;

//     console.log(min + ", " + mid + ", " + max);
// }

// sortABC(10, 5, 8); 


// Func10.

// function isPowerN(K, N) {
//     if (K <= 0 || N <= 0) {
//         return false;
//     }

//     var result = Math.pow(N, Math.round(Math.log(K) / Math.log(N)));
//     return result === K;
// }

// console.log(isPowerN(8, 2));  
// console.log(isPowerN(27, 3)); 
// console.log(isPowerN(16, 2)); 
// console.log(isPowerN(10, 3)); 


// Func11.

// function isPrime(N) {
//     if (N <= 1) {
//         return false;
//     }

//     for (var i = 2; i <= Math.sqrt(N); i++) {
//         if (N % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// var result = isPrime(7);
// console.log(result); 


// Func12.

// function isPrime(N) {
//     if (N <= 1) {
//         return false;
//     }

//     for (var i = 2; i <= Math.sqrt(N); i++) {
//         if (N % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// function numberOfPrime(N) {
//     var count = 0;

//     for (var i = 2; i <= N; i++) {
//         if (isPrime(i)) {
//             count++;
//         }
//     }

//     return count;
// }

// var result = numberOfPrime(10);
// console.log(result); 


// Func13.

// function digitCount(K) {
//     return Math.floor(Math.log10(K)) + 1;
// }

// function digitNth(K, N) {
//     var count = digitCount(K);

//     if (count < N) {
//         return -1;
//     }

//     for (var i = 1; i <= N; i++) {
//         var digit = K % 10;
//         K = Math.floor(K / 10);

//         if (i === N) {
//             return digit;
//         }
//     }

//     return -1; 
// }

// console.log(digitNth(105782, 5)); 
// console.log(digitNth(1057, 5));  


// Func14.

// function inverseNumber(N) {
//     var reversed = 0;

//     while (N > 0) {
//         var digit = N % 10;
//         reversed = reversed * 10 + digit;
//         N = Math.floor(N / 10);
//     }

//     return reversed;
// }

// console.log(inverseNumber(56814)); 


// Func15.

// function inverseNumber(N) {
//     var reversed = 0;

//     while (N > 0) {
//         var digit = N % 10;
//         reversed = reversed * 10 + digit;
//         N = Math.floor(N / 10);
//     }

//     return reversed;
// }

// function isPalindrom(N) {
//     return N === inverseNumber(N);
// }

// console.log(isPalindrom(1678761)); 
// console.log(isPalindrom(12345));   


// Func16.

// function factorial(N) {
//     if (N < 0) {
//         return 1;
//     }

//     var result = 1;

//     for (var i = 1; i <= N; i++) {
//         result *= i;
//     }

//     return result;
// }

// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(-3));


// Func17.

// function getSum3(N) {
//     var sum = 0;

//     for (var i = 1; i <= N; i++) {
//         if (i % 3 === 0) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// console.log(getSum3(15));


// Func18.

// function sumOddEven(N) {
//     var sumOdd = 0;
//     var sumEven = 0;

//     for (var i = 1; i <= N; i++) {
//         if (i % 2 === 0) {
//             sumEven += i;
//         } else {
//             sumOdd += i;
//         }
//     }

//     console.log(sumOdd + ", " + sumEven);
// }

// sumOddEven(10);


// Func19.

// function invertTime(H, M, S) {
//     var totalSeconds = H * 3600 + M * 60 + S;
//     return totalSeconds;
// }

// console.log(invertTime(0, 6, 40));


// Func20.

// function decTime(H, M, S) {
//     var totalSeconds = H * 3600 + M * 60 + S;

//     totalSeconds--;

//     var newH = Math.floor(totalSeconds / 3600);
//     var newM = Math.floor((totalSeconds % 3600) / 60);
//     var newS = totalSeconds % 60;

//     var formattedH = ('0' + newH).slice(-2);
//     var formattedM = ('0' + newM).slice(-2);
//     var formattedS = ('0' + newS).slice(-2);

//     return formattedH + ':' + formattedM + ':' + formattedS;
// }

// console.log(decTime(0, 6, 40));


// Func21.

// function isLeapYear(Y) {

//     if ((Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isLeapYear(2020)); 
// console.log(isLeapYear(2022)); 


// Func22.
// Func23.


// Func24.

// function isLeapYear(Y) {
//     if ((Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function monthDays(M, Y) {
//     var daysInMonth = 0;

//     switch (M) {
//         case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//             daysInMonth = 31;
//             break;
//         case 4: case 6: case 9: case 11:
//             daysInMonth = 30;
//             break;
//         case 2:
//             daysInMonth = isLeapYear(Y) ? 29 : 28;
//             break;
//         default:
//             daysInMonth = -1;
//             break;
//     }

//     return daysInMonth;
// }

// function nextDate(D, M, Y) {
//     var daysInMonth = monthDays(M, Y);

//     if (daysInMonth === -1 || D > daysInMonth || D <= 0 || M <= 0 || M > 12) {
//         return "Noto'g'ri sana";
//     }

//     var nextDay = D + 1;
//     var nextMonth = M;
//     var nextYear = Y;

//     if (nextDay > daysInMonth) {
//         nextDay = 1;
//         nextMonth = M === 12 ? 1 : M + 1;
//         nextYear = M === 12 ? Y + 1 : Y;
//     }

//     var formattedNextDay = ('0' + nextDay).slice(-2);
//     var formattedNextMonth = ('0' + nextMonth).slice(-2);
//     var formattedNextYear = nextYear;

//     return formattedNextDay + '.' + formattedNextMonth + '.' + formattedNextYear;
// }

// console.log(nextDate(10, 3, 2022)); 
// console.log(nextDate(31, 12, 2022)); 
// console.log(nextDate(28, 2, 2020));
// console.log(nextDate(31, 8, 2023)); 


// Func25.


// function getDividersNumberAndSum(N) {
//     if (N <= 0) {
//         return "N soni musbat bo'lishi kerak";
//     }

//     var dividersCount = 0;
//     var dividersSum = 0;

//     for (var i = 1; i <= N; i++) {
//         if (N % i === 0) {
//             dividersCount++;
//             dividersSum += i;
//         }
//     }

//     return dividersCount + ', ' + dividersSum;
// }

// console.log(getDividersNumberAndSum(12)); 
// console.log(getDividersNumberAndSum(7));  
// console.log(getDividersNumberAndSum(1));  
// console.log(getDividersNumberAndSum(-5)); 
