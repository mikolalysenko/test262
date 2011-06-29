// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.18_A11;
* @section: 15.5.4.18;
* @assertion: The length property of the toUpperCase method is 0;
* @description: Checking String.prototype.toUpperCase.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.18_A11",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.18_String.prototype.toUpperCase/S15.5.4.18_A11.js",

assertion: "The length property of the toUpperCase method is 0",

description: "Checking String.prototype.toUpperCase.length",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.toUpperCase.hasOwnProperty("length"))) {
  $ERROR('#1: String.prototype.toUpperCase.hasOwnProperty("length") return true. Actual: '+String.prototype.toUpperCase.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.toUpperCase.length !== 0) {
  $ERROR('#2: String.prototype.toUpperCase.length === 0. Actual: '+String.prototype.toUpperCase.length );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

