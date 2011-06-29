// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.2.4_A1_T1;
 * @section: 15.2.4, 8.6.2;
 * @assertion: Object prototype object has not prototype;
 * @description: Checking if obtaining Object.prototype.prototype fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4_A1_T1",

path: "TestCases/15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/S15.2.4_A1_T1.js",

assertion: "Object prototype object has not prototype",

description: "Checking if obtaining Object.prototype.prototype fails",

test: function testcase() {
   // CHECK#1
if (Object.prototype.prototype !== undefined) {
  $ERROR('#1: Object prototype has not prototype');
}

 }
});

