// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.1_A1.1_T2;
 * @section: 15.4.1, 15.2.4.2;
 * @assertion: The [[Prototype]] property of the newly constructed object 
 * is set to the original Array prototype object, the one that 
 * is the initial value of Array.prototype;
 * @description: Array.prototype.toString = Object.prototype.toString;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.1_A1.1_T2",

path: "TestCases/15_Native/15.4_Array_Objects/15.4.1_The_Array_Constructor_Called_as_a_Function/S15.4.1_A1.1_T2.js",

assertion: "The [[Prototype]] property of the newly constructed object",

description: "Array.prototype.toString = Object.prototype.toString",

test: function testcase() {
   //CHECK#1
Array.prototype.toString = Object.prototype.toString;
var x = Array(); 
if (x.toString() !== "[object " + "Array" + "]") {
  $ERROR('#1: Array.prototype.toString = Object.prototype.toString; var x = Array(); x.toString() === "[object " + "Array" + "]". Actual: ' + (x.toString()));
}

//CHECK#2
Array.prototype.toString = Object.prototype.toString;
var x = Array(0,1,2); 
if (x.toString() !== "[object " + "Array" + "]") {
  $ERROR('#2: Array.prototype.toString = Object.prototype.toString; var x = Array(0,1,2); x.toString() === "[object " + "Array" + "]". Actual: ' + (x.toString()));
}


 }
});

