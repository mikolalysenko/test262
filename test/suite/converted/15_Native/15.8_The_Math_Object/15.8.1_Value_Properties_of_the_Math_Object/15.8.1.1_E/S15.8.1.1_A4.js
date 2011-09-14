// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Value Property E of the Math Object has the attribute ReadOnly
 *
 * @section 15.8.1.1
 * @path 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.1_E/S15.8.1.1_A4.js
 * @description Checking if Math.E property has the attribute ReadOnly
 * @strict_only
 * @negative
 */

// CHECK#1
var x = Math.E;
Math.E = 1;
if (Math.E !== x) {
  $ERROR('#1: Math.E hasn\'t ReadOnly: \'x = Math.E;Math.E = 1;Math.E === x\'');
}

