// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.11.2_A2.1_T4;
* @section: 11.11.2, 8.7.1, 16;
* @assertion: Operator x || y uses GetValue;
* @description: If ToBoolean(x) is true and GetBase(y) is null, return true;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.11.2_A2.1_T4",

path: "TestCases/11_Expressions/11.11_Binary_Logical_Operators/11.11.2_Logical_OR_Operator/S11.11.2_A2.1_T4.js",

assertion: "Operator x || y uses GetValue",

description: "If ToBoolean(x) is true and GetBase(y) is null, return true",

test: function testcase() {
   //CHECK#1
if ((true || x) !== true) {
  $ERROR('#1: (true || x) === true');
}

 }
});

