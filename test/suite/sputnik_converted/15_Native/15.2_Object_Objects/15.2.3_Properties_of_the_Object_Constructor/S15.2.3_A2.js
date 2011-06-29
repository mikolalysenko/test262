// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.3_A2;
* @section: 15.2.3, 15.2.4;
* @assertion: The value of the internal [[Prototype]] property of the Object constructor 
* is the Function prototype object;
* @description: Checking Function.prototype.isPrototypeOf(Object);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.3_A2",

path: "TestCases/15_Native/15.2_Object_Objects/15.2.3_Properties_of_the_Object_Constructor/S15.2.3_A2.js",

assertion: "The value of the internal [[Prototype]] property of the Object constructor",

description: "Checking Function.prototype.isPrototypeOf(Object)",

test: function testcase() {
   // CHECK#
if (!(Function.prototype.isPrototypeOf(Object))) {
  $ERROR('#1: the value of the internal [[Prototype]] property of the Object constructor is the Function prototype object.');
}

 }
});

