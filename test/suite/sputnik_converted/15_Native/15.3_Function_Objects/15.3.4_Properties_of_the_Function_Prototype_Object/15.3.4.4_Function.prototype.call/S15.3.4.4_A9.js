// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A9;
* @section: 15.3.4.4;
* @assertion: The Function.prototype.call.length property has the attribute DontDelete;
* @description: Checking if deleting the Function.prototype.call.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.4_A9",

path: "TestCases/15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.4_Function.prototype.call/S15.3.4.4_A9.js",

assertion: "The Function.prototype.call.length property has the attribute DontDelete",

description: "Checking if deleting the Function.prototype.call.length property fails",

test: function testcase() {
   //CHECK#0
if (!(Function.prototype.call.hasOwnProperty('length'))) {
  $FAIL('#0: the Function.prototype.call has length property');
}

//CHECK#1
if (delete Function.prototype.call.length) {
  $ERROR('#1: The Function.prototype.call.length property has the attributes DontDelete');
}

//CHECK#2
if (!(Function.prototype.call.hasOwnProperty('length'))) {
  $FAIL('#2: The Function.prototype.call.length property has the attributes DontDelete');
}

 }
});

