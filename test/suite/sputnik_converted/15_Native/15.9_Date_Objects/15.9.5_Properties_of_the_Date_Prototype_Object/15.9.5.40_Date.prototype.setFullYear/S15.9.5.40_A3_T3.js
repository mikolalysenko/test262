// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.40_A3_T3;
 * @section: 15.9.5.40;
 * @assertion: The Date.prototype.setFullYear property "length" has { ReadOnly, DontDelete, DontEnum } attributes;
 * @description: Checking DontEnum attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.40_A3_T3",

path: "TestCases/15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.40_Date.prototype.setFullYear/S15.9.5.40_A3_T3.js",

assertion: "The Date.prototype.setFullYear property \"length\" has { ReadOnly, DontDelete, DontEnum } attributes",

description: "Checking DontEnum attribute",

test: function testcase() {
   if (Date.prototype.setFullYear.propertyIsEnumerable('length')) {
  $ERROR('#1: The Date.prototype.setFullYear.length property has the attribute DontEnum');
}

for(x in Date.prototype.setFullYear) {
  if(x === "length") {
    $ERROR('#2: The Date.prototype.setFullYear.length has the attribute DontEnum');
  }
}


 }
});

