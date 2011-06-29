// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.5_A1.2_T1;
 * @section: 15.4.4.5;
 * @assertion: If separator is undefined, a single comma is used as the separator;
 * @description: Checking this use new Array() and [];
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.5_A1.2_T1",

path: "TestCases/15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.5_Array_prototype_join/S15.4.4.5_A1.2_T1.js",

assertion: "If separator is undefined, a single comma is used as the separator",

description: "Checking this use new Array() and []",

test: function testcase() {
   //CHECK#1
var x = new Array(0,1,2,3);
if (x.join() !== "0,1,2,3") {
  $ERROR('#1: x = new Array(0,1,2,3); x.join() === "0,1,2,3". Actual: ' + (x.join()));
}

//CHECK#2
x = [];
x[0] = 0;
x[3] = 3;
if (x.join() !== "0,,,3") {
  $ERROR('#2: x = []; x[0] = 0; x[3] = 3; x.join() === "0,,,3". Actual: ' + (x.join()));
}

//CHECK#3
x = [];
x[0] = 0;
if (x.join() !== "0") {
  $ERROR('#3: x = []; x[0] = 0; x.join() === "0". Actual: ' + (x.join()));
}

 }
});

