// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.1.2.2_A9.7;
* @section: 15.1.2.2, 11.2.2;
* @assertion: The parseInt property can't be used as constructor;
* @description: If property does not implement the internal [[Construct]] method, throw a TypeError exception;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A9.7",

path: "TestCases/15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.2_parseInt/S15.1.2.2_A9.7.js",

assertion: "The parseInt property can\'t be used as constructor",

description: "If property does not implement the internal [[Construct]] method, throw a TypeError exception",

test: function testcase() {
   //CHECK#1

try {
  new parseInt();
  $ERROR('#1.1: new parseInt() throw TypeError. Actual: ' + (new parseInt()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new parseInt() throw TypeError. Actual: ' + (e));
  }
}

 }
});

