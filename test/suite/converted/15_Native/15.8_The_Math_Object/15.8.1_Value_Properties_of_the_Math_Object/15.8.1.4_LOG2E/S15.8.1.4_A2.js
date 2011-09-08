// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Value Property LOG2E of the Math Object has the attribute DontEnum
 *
 * @section: 15.8.1.4;
 * @path: 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.4_LOG2E/S15.8.1.4_A2.js;
 * @description: Checking if Math.LOG2E property has the attribute DontEnum;
 */

// CHECK#1
for(x in Math) {
  if(x === "LOG2E") {
    $ERROR('#1: Value Property LOG2E of the Math Object hasn\'t attribute DontEnum: \'for(x in Math) {x==="LOG2E"}\'');
  }
}


