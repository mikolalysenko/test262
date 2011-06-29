// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.6_A1_T9;
* @section: 15.5.4.6;
* @assertion: String.prototype.concat([,[...]]);
* @description: Call concat([,[...]]) function with function(){}() argument of string object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.6_A1_T9",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.6_String.prototype.concat/S15.5.4.6_A1_T9.js",

assertion: "String.prototype.concat([,[...]])",

description: "Call concat([,[...]]) function with function(){}() argument of string object",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(undefined) evaluates to "undefined" concat(undefined) evaluates to concat("undefined")
if (new String(42).concat(function(){}()) !== "42undefined") {
  $ERROR('#1: new String(42).concat(function(){}()) === "42undefined". Actual: '+new String(42).concat(function(){}()) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

