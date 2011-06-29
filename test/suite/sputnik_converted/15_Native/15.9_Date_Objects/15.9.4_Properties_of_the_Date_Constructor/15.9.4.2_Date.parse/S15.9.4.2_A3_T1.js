// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.4.2_A3_T1;
 * @section: 15.9.4.2;
 * @assertion: The Date.parse property "length" has { ReadOnly, DontDelete, DontEnum } attributes;
 * @description: Checking ReadOnly attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.4.2_A3_T1",

path: "TestCases/15_Native/15.9_Date_Objects/15.9.4_Properties_of_the_Date_Constructor/15.9.4.2_Date.parse/S15.9.4.2_A3_T1.js",

assertion: "The Date.parse property \"length\" has { ReadOnly, DontDelete, DontEnum } attributes",

description: "Checking ReadOnly attribute",

test: function testcase() {
   x = Date.parse.length;
Date.parse.length = 1;
if (Date.parse.length !== x) {
  $ERROR('#1: The Date.parse.length has the attribute ReadOnly');
}


 }
});

