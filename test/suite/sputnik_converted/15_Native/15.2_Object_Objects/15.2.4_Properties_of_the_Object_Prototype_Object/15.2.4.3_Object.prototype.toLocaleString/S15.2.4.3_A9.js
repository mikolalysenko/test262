// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.3_A9;
* @section: 15.2.4.3;
* @assertion: The Object.prototype.toLocaleString.length property has the attribute DontDelete;
* @description: Checknig if deleting of the Object.prototype.toLocaleString.length property fails;
* @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.3_A9",

path: "15_Native\15.2_Object_Objects\15.2.4_Properties_of_the_Object_Prototype_Object\15.2.4.3_Object.prototype.toLocaleString\S15.2.4.3_A9.js",

assertion: "The Object.prototype.toLocaleString.length property has the attribute DontDelete",

description: "Checknig if deleting of the Object.prototype.toLocaleString.length property fails",

test: function testcase() {
   //CHECK#0
if (!(Object.prototype.toLocaleString.hasOwnProperty('length'))) {
  $FAIL('#0: the Object.prototype.toLocaleString has length property');
}

//CHECK#1
if (delete Object.prototype.toLocaleString.length) {
  $ERROR('#1: The Object.prototype.toLocaleString.length property has the attributes DontDelete');
}

//CHECK#2
if (!(Object.prototype.toLocaleString.hasOwnProperty('length'))) {
  $FAIL('#2: The Object.prototype.toLocaleString.length property has the attributes DontDelete');
}

 }
});

