// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.4_A1_T8;
* @section: 15.5.4.4;
* @assertion: String.prototype.charAt(pos);
* @description: Call charAt() function with void 0 argument of string object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.4_A1_T8",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.4_String.prototype.charAt/S15.5.4.4_A1_T8.js",

assertion: "String.prototype.charAt(pos)",

description: "Call charAt() function with void 0 argument of string object",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToInteger(void 0) evaluates to 0 charAt() evaluates to charAt(0)
if (String(42).charAt(void 0) !== "4") {
  $ERROR('#1: String(42).charAt(void 0) === "4". Actual: String(42).charAt(void 0) ==='+String(42).charAt(void 0) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

