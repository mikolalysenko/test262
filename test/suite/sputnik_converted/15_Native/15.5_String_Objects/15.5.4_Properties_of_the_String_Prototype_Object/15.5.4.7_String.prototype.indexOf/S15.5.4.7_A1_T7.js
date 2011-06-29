// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.7_A1_T7;
* @section: 15.5.4.7;
* @assertion: String.prototype.indexOf(searchString, position);
* @description: Call indexOf(searchString, position) function with undefined argument of string object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.7_A1_T7",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.7_String.prototype.indexOf/S15.5.4.7_A1_T7.js",

assertion: "String.prototype.indexOf(searchString, position)",

description: "Call indexOf(searchString, position) function with undefined argument of string object",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(undefined) evaluates to "undefined" indexOf(undefined) evaluates to indexOf("undefined",0)
if (String("undefined").indexOf(undefined) !== 0) {
  $ERROR('#1: String("undefined").indexOf(undefined) === 0. Actual: '+String("undefined").indexOf(undefined) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

