// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.2.1_A2_T4;
* @section: 15.2.2.1;
* @assertion: When the Object constructor is called with one argument value and 
* the value is a native ECMAScript object, do not create a new object but simply return value;
* @description: The value is "this";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.2.1_A2_T4",

path: "TestCases/15_Native/15.2_Object_Objects/15.2.2_The_Object_Constructor/S15.2.2.1_A2_T4.js",

assertion: "When the Object constructor is called with one argument value and",

description: "The value is \"this\"",

test: function testcase() {
   var x=1;

var obj = this;

var n_obj = new Object(obj);

//CHECK#1
if (n_obj !== obj) {
  $ERROR('#1: When the Object constructor is called and if the value is an Object simply value returns.');
}

//CHECK#2
if (n_obj['x'] !== 1) {
  $ERROR('#2: When the Object constructor is called and if the value is an Object simply value returns.');
}

 }
});

