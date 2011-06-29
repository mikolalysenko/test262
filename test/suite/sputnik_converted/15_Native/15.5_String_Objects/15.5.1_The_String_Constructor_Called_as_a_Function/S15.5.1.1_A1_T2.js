// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.1.1_A1_T2;
* @section: 15.5.1.1;
* @assertion: When String is called as a function rather than as a constructor, it performs a type conversion;
* @description: Call String(null);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.1.1_A1_T2",

path: "TestCases/15_Native/15.5_String_Objects/15.5.1_The_String_Constructor_Called_as_a_Function/S15.5.1.1_A1_T2.js",

assertion: "When String is called as a function rather than as a constructor, it performs a type conversion",

description: "Call String(null)",

test: function testcase() {
   var __str = String(null);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __str !== "string") {
  $ERROR('#1: __str = String(null); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== "null") {
  $ERROR('#2: __str = String(null); __str === "null". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

