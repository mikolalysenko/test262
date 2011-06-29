// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.2.1_A6_T3;
* @section: 15.2.2.1;
* @assertion: Since calling Object as a function is identical to calling a function, list of arguments bracketing is allowed;
* @description: Creating an object with "new Object((null,2,3),2,3)";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.2.1_A6_T3",

path: "TestCases/15_Native/15.2_Object_Objects/15.2.2_The_Object_Constructor/S15.2.2.1_A6_T3.js",

assertion: "Since calling Object as a function is identical to calling a function, list of arguments bracketing is allowed",

description: "Creating an object with \"new Object((null,2,3),2,3)\"",

test: function testcase() {
   var obj = new Object((null,2,3),1,2);

//CHECK#1
if (obj.constructor !== Number) {
  $ERROR('#1: Since Object as a function calling is the same as function calling list of arguments can appears in braces;');
}

//CHECK#2
if (typeof obj !== "object") {
  $ERROR('#2: Since Object as a function calling is the same as function calling list of arguments can appears in braces;');
}

//CHECK#3
if ((obj != 3)||(obj === 3)) {
  $ERROR('3#: Since Object as a function calling is the same as function calling list of arguments can appears in braces;');
}

 }
});

