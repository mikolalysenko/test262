// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.1_A4.2;
 * @section: 15.1.2.1, 15.2.4.5, 11.4.1;
 * @assertion: The length property of eval has the attribute DontDelete;
 * @description: Checking use hasOwnProperty, delete;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.1_A4.2",

path: "TestCases/15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.1_eval/S15.1.2.1_A4.2.js",

assertion: "The length property of eval has the attribute DontDelete",

description: "Checking use hasOwnProperty, delete",

test: function testcase() {
   //CHECK#1
if (eval.hasOwnProperty('length') !== true) {
  $FAIL('#1: eval.hasOwnProperty(\'length\') === true. Actual: ' + (eval.hasOwnProperty('length')));
}

delete eval.length;

//CHECK#2
if (eval.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete eval.length; eval.hasOwnProperty(\'length\') === true. Actual: ' + (eval.hasOwnProperty('length')));
}

//CHECK#3
if (eval.length === undefined) {
  $ERROR('#3: delete eval.length; eval.length !== undefined');
}




 }
});

