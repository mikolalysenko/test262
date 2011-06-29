// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.16_A1_T7;
* @section: 15.5.4.16;
* @assertion: String.prototype.toLowerCase();
* @description: Call toLowerCase() function of NaN;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.16_A1_T7",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.16_String.prototype.toLowerCase/S15.5.4.16_A1_T7.js",

assertion: "String.prototype.toLowerCase()",

description: "Call toLowerCase() function of NaN",

test: function testcase() {
   Number.prototype.toLowerCase = String.prototype.toLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (NaN.toLowerCase()!== "nan") {
  $ERROR('#1: Number.prototype.toLowerCase = String.prototype.toLowerCase; NaN.toLowerCase()=== "nan". Actual: '+NaN.toLowerCase());
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

