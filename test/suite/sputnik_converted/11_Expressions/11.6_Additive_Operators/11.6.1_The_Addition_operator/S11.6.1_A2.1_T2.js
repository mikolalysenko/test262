// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.6.1_A2.1_T2;
 * @section: 11.6.1;
 * @assertion: Operator x + y uses GetValue;
 * @description: If GetBase(x) is null, throw ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.1_A2.1_T2",

path: "TestCases/11_Expressions/11.6_Additive_Operators/11.6.1_The_Addition_operator/S11.6.1_A2.1_T2.js",

assertion: "Operator x + y uses GetValue",

description: "If GetBase(x) is null, throw ReferenceError",

test: function testcase() {
   //CHECK#1
try {
  x + 1;
  $ERROR('#1.1: x + 1 throw ReferenceError. Actual: ' + (x + 1));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x + 1 throw ReferenceError. Actual: ' + (e));  
  }
}


 }
});

