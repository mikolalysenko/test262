// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.3_A3.3_T6;
 * @section: 7.8.3;
 * @assertion: DecimalLiteral :: DecimalIntegerLiteral. ExponentPart;
 * @description: ExponentPart :: E +DecimalDigits;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.3_A3.3_T6",

path: "TestCases/07_Lexical_Conventions/7.8_Literals/7.8.3_Numeric_Literals/S7.8.3_A3.3_T6.js",

assertion: "DecimalLiteral :: DecimalIntegerLiteral. ExponentPart",

description: "ExponentPart :: E +DecimalDigits",

test: function testcase() {
   //CHECK#0
if (0.E+1 !== 0) {
  $ERROR('#0: 0.E+1 === 0');
}

//CHECK#1
if (1.E+1 !== 10) {
  $ERROR('#1: 1.E+1 === 10');
}

//CHECK#2
if (2.E+1 !== 20) {
  $ERROR('#2: 2.E+1 === 20');
}

//CHECK#3
if (3.E+1 !== 30) {
  $ERROR('#3: 3.E+1 === 30');
}

//CHECK#4
if (4.E+1 !== 40) {
  $ERROR('#4: 4.E+1 === 40');
}

//CHECK#5
if (5.E+1 !== 50) {
  $ERROR('#5: 5.E+1 === 50');
}

//CHECK#6
if (6.E+1 !== 60) {
  $ERROR('#6: 6.E+1 === 60');
}

//CHECK#7
if (7.E+1 !== 70) {
  $ERROR('#7: 7.E+1 === 70');
}

//CHECK#8
if (8.E+1 !== 80) {
  $ERROR('#8: 8.E+1 === 80');
}

//CHECK#9
if (9.E+1 !== 90) {
  $ERROR('#9: 9.E+1 === 90');
}

 }
});

