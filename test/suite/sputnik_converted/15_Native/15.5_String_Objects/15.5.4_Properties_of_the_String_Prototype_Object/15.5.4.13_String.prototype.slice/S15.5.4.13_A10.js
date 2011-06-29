// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.13_A10;
* @section: 15.5.4.13;
* @assertion: The String.prototype.slice.length property has the attribute ReadOnly;
* @description: Checking if varying the String.prototype.slice.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.13_A10",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.13_String.prototype.slice/S15.5.4.13_A10.js",

assertion: "The String.prototype.slice.length property has the attribute ReadOnly",

description: "Checking if varying the String.prototype.slice.length property fails",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.slice.hasOwnProperty('length'))) {
  $FAIL('#1: String.prototype.slice.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.slice.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

var __obj = String.prototype.slice.length;

String.prototype.slice.length = function(){return "shifted";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.slice.length !== __obj) {
  $ERROR('#2: __obj = String.prototype.slice.length; String.prototype.slice.length = function(){return "shifted";}; String.prototype.slice.length === __obj. Actual: '+String.prototype.slice.length );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

