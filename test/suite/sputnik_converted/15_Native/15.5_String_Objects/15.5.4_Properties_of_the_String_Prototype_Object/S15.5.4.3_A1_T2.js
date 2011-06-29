// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.3_A1_T2;
* @section: 15.5.4.3;
* @assertion: String.prototype.valueOf() returns this string value;
* @description: Create String object as new String(true) and check it`s valueOf();
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.3_A1_T2",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/S15.5.4.3_A1_T2.js",

assertion: "String.prototype.valueOf() returns this string value",

description: "Create String object as new String(true) and check it`s valueOf()",

test: function testcase() {
   var __string__obj = new String(true);

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if (__string__obj.valueOf() !== ""+true) {
  $ERROR('#1: __string__obj = new String(true); __string__obj.valueOf() === ""+true. Actual: __string__obj.valueOf() ==='+__string__obj.valueOf() ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

