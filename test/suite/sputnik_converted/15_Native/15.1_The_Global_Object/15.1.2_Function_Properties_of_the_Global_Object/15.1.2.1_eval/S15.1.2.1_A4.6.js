// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.1.2.1_A4.6;
* @section: 15.1.2.1;
* @assertion: The eval property has not prototype property;
* @description: Checking eval.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.1_A4.6",

path: "TestCases/15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.1_eval/S15.1.2.1_A4.6.js",

assertion: "The eval property has not prototype property",

description: "Checking eval.prototype",

test: function testcase() {
   //CHECK#1
if (eval.prototype !== undefined) {
  $ERROR('#1: eval.prototype === undefined. Actual: ' + (eval.prototype));
}

 }
});

