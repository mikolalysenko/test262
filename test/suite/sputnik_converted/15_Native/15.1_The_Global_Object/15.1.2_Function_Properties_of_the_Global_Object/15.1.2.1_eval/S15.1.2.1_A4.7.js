// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.1.2.1_A4.7;
* @section: 15.1.2.1, 11.2.2;
* @assertion: The eval property can't be used as constructor;
* @description: If property does not implement the internal [[Construct]] method, throw a TypeError exception;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.1_A4.7",

path: "TestCases/15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.1_eval/S15.1.2.1_A4.7.js",

assertion: "The eval property can\'t be used as constructor",

description: "If property does not implement the internal [[Construct]] method, throw a TypeError exception",

test: function testcase() {
   //CHECK#1

try {
  new eval();
  $ERROR('#1.1: new eval() throw TypeError. Actual: ' + (new eval()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new eval() throw TypeError. Actual: ' + (e));
  }
}

 }
});

