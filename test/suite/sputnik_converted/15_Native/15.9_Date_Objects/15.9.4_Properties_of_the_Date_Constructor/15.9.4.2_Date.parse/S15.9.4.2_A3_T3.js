// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.4.2_A3_T3;
 * @section: 15.9.4.2;
 * @assertion: The Date.parse property "length" has { ReadOnly, DontDelete, DontEnum } attributes;
 * @description: Checking DontEnum attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.4.2_A3_T3",

path: "TestCases/15_Native/15.9_Date_Objects/15.9.4_Properties_of_the_Date_Constructor/15.9.4.2_Date.parse/S15.9.4.2_A3_T3.js",

assertion: "The Date.parse property \"length\" has { ReadOnly, DontDelete, DontEnum } attributes",

description: "Checking DontEnum attribute",

test: function testcase() {
   if (Date.parse.propertyIsEnumerable('length')) {
  $ERROR('#1: The Date.parse.length property has the attribute DontEnum');
}

for(x in Date.parse) {
  if(x === "length") {
    $ERROR('#2: The Date.parse.length has the attribute DontEnum');
  }
}


 }
});

