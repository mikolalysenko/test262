// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.8_A2.1_T2;
* @section: 11.4.8;
* @assertion: Operator ~x uses GetValue;
* @description: If GetBase(x) is null, throw ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.8_A2.1_T2",

path: "11.4.8",

description: "If GetBase(x) is null, throw ReferenceError",

test: function testcase() {
   //CHECK#1
try {
    ~S11_4_8_A2_1_T2_x;
    $ERROR('#1.1: ~x throw ReferenceError. Actual: ' + (~S11_4_8_A2_1_T2_x));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
      $ERROR('#1.2: ~S11_4_8_A2_1_T2_x throw ReferenceError. Actual: ' + (e));  
  }
}


 }
});

