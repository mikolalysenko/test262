// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.3_A2_T1;
* @section: 15.5.3, 15.5.4;
* @assertion: The value of the internal [[Prototype]] property of the String constructor is the Function prototype object;
* @description: Checking Function.prototype.isPrototypeOf(String);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.3_A2_T1",

path: "TestCases/15_Native/15.5_String_Objects/15.5.3_Properties_of_the_String_Constructor/S15.5.3_A2_T1.js",

assertion: "The value of the internal [[Prototype]] property of the String constructor is the Function prototype object",

description: "Checking Function.prototype.isPrototypeOf(String)",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
// CHECK#
if (!(Function.prototype.isPrototypeOf(String))) {
  $ERROR('#1: Function.prototype.isPrototypeOf(String) return true. Actual: '+Function.prototype.isPrototypeOf(String));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

