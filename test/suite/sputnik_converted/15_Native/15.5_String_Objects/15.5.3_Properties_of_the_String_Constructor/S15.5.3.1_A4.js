// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.3.1_A4;
* @section: 15.5.3.1, 15.5.4;
* @assertion: The String.prototype property has the attribute ReadOnly;
* @description: Checking if varying the String.prototype property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.3.1_A4",

path: "TestCases/15_Native/15.5_String_Objects/15.5.3_Properties_of_the_String_Constructor/S15.5.3.1_A4.js",

assertion: "The String.prototype property has the attribute ReadOnly",

description: "Checking if varying the String.prototype property fails",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.hasOwnProperty('prototype'))) {
  $FAIL('#1: String.hasOwnProperty(\'prototype\') return true. Actual: '+String.hasOwnProperty('prototype'));
}
//
//////////////////////////////////////////////////////////////////////////////

var __obj = String.prototype;

String.prototype = function(){return "shifted";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype !== __obj) {
  $ERROR('#2: __obj = String.prototype; String.prototype = function(){return "shifted";}; String.prototype === __obj. Actual: String.prototype ==='+String.prototype ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

