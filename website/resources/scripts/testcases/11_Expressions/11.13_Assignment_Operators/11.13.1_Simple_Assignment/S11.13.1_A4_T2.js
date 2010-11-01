// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.1_A4_T2;
 * @section: 11.13.1;
 * @assertion: AssignmentExpression : LeftHandSideExpression = AssignmentExpression;
 * @description: Syntax check if "x = x" throws ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.1_A4_T2",

path: "11.13.1",

description: "Syntax check if \"x = x\" throws ReferenceError",

test: function testcase() {
   //CHECK#1
try {
    S11_13_1_A4_T2_x = S11_13_1_A4_T2_x;
    $ERROR('#1.1: S11_13_1_A4_T2_x = S11_13_1_A4_T2_x throw ReferenceError. Actual: ' + (S11_13_1_A4_T2_x = S11_13_1_A4_T2_x));
} catch(e) {
  if ((e instanceof ReferenceError) !== true) {
      $ERROR('#1.2: S11_13_1_A4_T2_x = S11_13_1_A4_T2_x throw ReferenceError. Actual: ' + (e));  
  }
}



 }
});

