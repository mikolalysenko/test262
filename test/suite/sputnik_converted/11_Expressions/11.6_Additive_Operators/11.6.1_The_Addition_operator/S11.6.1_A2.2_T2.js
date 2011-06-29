// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.6.1_A2.2_T2;
* @section: 11.6.1, 8.6.2.6;
 * @assertion: Operator x + y uses [[Default Value]];
 * @description: If Type(value) is Date object, evaluate ToPrimitive(value, String);
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.1_A2.2_T2",

path: "TestCases/11_Expressions/11.6_Additive_Operators/11.6.1_The_Addition_operator/S11.6.1_A2.2_T2.js",

assertion: "Operator x + y uses [[Default Value]]",

description: "If Type(value) is Date object, evaluate ToPrimitive(value, String)",

test: function testcase() {
   //CHECK#1
var date = new Date();
if (date + date !== date.toString() + date.toString()) {
  $ERROR('#1: var date = new Date(); date + date === date.toString() + date.toString(). Actual: ' + (date + date));  
}

//CHECK#2
var date = new Date();
if (date + 0 !== date.toString() + "0") {
  $ERROR('#2: var date = new Date(); date + 0 === date.toString() + "0". Actual: ' + (date + 0));  
}

//CHECK#3
var date = new Date();
if (date + true !== date.toString() + "true") {
  $ERROR('#3: var date = new Date(); date + true === date.toString() + "true". Actual: ' + (date + true));  
}

//CHECK#4
var date = new Date();
if (date + new Object() !== date.toString() + "[object Object]") {
  $ERROR('#4: var date = new Date(); date + new Object() === date.toString() + "[object Object]". Actual: ' + (date + new Object()));  
}


 }
});

