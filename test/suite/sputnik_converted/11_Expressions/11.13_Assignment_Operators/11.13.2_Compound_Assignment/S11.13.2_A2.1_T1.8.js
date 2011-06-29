// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A2.1_T1.8;
 * @section: 11.13.2;
 * @assertion: Operator uses GetValue; 
 * @description: Either Type is not Reference or GetBase is not null, check opeartor is "x >>>= y";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A2.1_T1.8",

path: "TestCases/11_Expressions/11.13_Assignment_Operators/11.13.2_Compound_Assignment/S11.13.2_A2.1_T1.8.js",

assertion: "Operator uses GetValue",

description: "Either Type is not Reference or GetBase is not null, check opeartor is \"x >>>= y\"",

test: function testcase() {
   //CHECK#1
var x = 4;
var z = (x >>>= 1);
if (z !== 2) {
  $ERROR('#1: var x = 4; var z = (x >>>= 1); z === 2. Actual: ' + (z));
}

//CHECK#2
var x = 4;
var y = 1;
var z = (x >>>= y);
if (z !== 2) {
  $ERROR('#2: var x = 4; var y = 1; var z = (x >>>= y); z === 2. Actual: ' + (z));
}


 }
});

