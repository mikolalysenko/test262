// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.14_A2.1_T3;
* @section: 11.14;
* @assertion: Operator uses GetValue;
* @description: If GetBase(AssigmentExpression) is null, throw ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.14_A2.1_T3",

path: "TestCases/11_Expressions/11.14_Comma_Operator/S11.14_A2.1_T3.js",

assertion: "Operator uses GetValue",

description: "If GetBase(AssigmentExpression) is null, throw ReferenceError",

test: function testcase() {
   //CHECK#1
try {
  1, y;
  $ERROR('#1.1: 1, y throw ReferenceError. Actual: ' + (1, y));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: 1, y throw ReferenceError. Actual: ' + (e));  
  }
}

 }
});

