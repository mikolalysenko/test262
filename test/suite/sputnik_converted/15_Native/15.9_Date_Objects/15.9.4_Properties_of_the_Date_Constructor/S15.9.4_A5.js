// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.9.4_A5;
* @section: 15.9.4;
* @assertion: Date constructor has length property whose value is 7;
* @description: Checking Date.length property;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.4_A5",

path: "TestCases/15_Native/15.9_Date_Objects/15.9.4_Properties_of_the_Date_Constructor/S15.9.4_A5.js",

assertion: "Date constructor has length property whose value is 7",

description: "Checking Date.length property",

test: function testcase() {
   //CHECK#1
if (!Date.hasOwnProperty("length")){
  $ERROR('#1: Date constructor has length property');
}

//CHECK#2
if (Date.length !== 7) {
  $ERROR('#2: Date constructor length property value should be 7');
}

 }
});

