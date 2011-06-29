// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.13_A1_T6;
* @section: 15.5.4.13;
* @assertion: String.prototype.slice (start, end);
* @description: Arguments are x and number, and instance is new String, x is undefined variable;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.13_A1_T6",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.13_String.prototype.slice/S15.5.4.13_A1_T6.js",

assertion: "String.prototype.slice (start, end)",

description: "Arguments are x and number, and instance is new String, x is undefined variable",

test: function testcase() {
   //since ToInteger(undefined yelds 0)
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (new String("undefined").slice(x,3) !== "und") {
  $ERROR('#1: var x; new String("undefined").slice(x,3) === "und". Actual: '+new String("undefined").slice(x,3) );
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

 }
});

