// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.10.2_A2.1_T3;
 * @section: 11.10.2;
 * @assertion: Operator x ^ y uses GetValue;
 * @description: If GetBase(y) is null, throw ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.10.2_A2.1_T3",

path: "11.10.2",

description: "If GetBase(y) is null, throw ReferenceError",

test: function testcase() {
   //CHECK#1
try {
    1 ^ S11_10_2_A2_1_T3_y;
    $ERROR('#1.1: 1 ^ S11_10_2_A2_1_T3_y throw ReferenceError. Actual: ' + (1 ^ S11_10_2_A2_1_T3_y));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
      $ERROR('#1.2: 1 ^ S11_10_2_A2_1_T3_y throw ReferenceError. Actual: ' + (e));  
  }
}

 }
});

