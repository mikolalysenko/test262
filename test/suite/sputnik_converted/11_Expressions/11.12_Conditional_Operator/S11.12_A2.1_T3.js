// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.12_A2.1_T3;
* @section: 11.12, 8.7.1;
* @assertion: Operator x ? y : z uses GetValue;
* @description: If ToBoolean(x) is true and GetBase(y) is null, throw ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.12_A2.1_T3",

path: "11.12, 8.7.1",

description: "If ToBoolean(x) is true and GetBase(y) is null, throw ReferenceError",

test: function testcase() {
   //CHECK#1
try {
    true ? S11_12_A2_1_T3_y : false;
    $ERROR('#1.1: true ? S11_12_A2_1_T3_y : false throw ReferenceError. Actual: ' + (true ? S11_12_A2_1_T3_y : false));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
      $ERROR('#1.2: true ? S11_12_A2_1_T3_y : false throw ReferenceError. Actual: ' + (e));  
  }
}

 }
});

