// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The shift property of Array has not prototype property
 *
 * @section 15.4.4.9
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.9_Array_prototype_shift/S15.4.4.9_A5.6.js
 * @description Checking Array.prototype.shift.prototype
 */

//CHECK#1
if (Array.prototype.shift.prototype !== undefined) {
  $ERROR('#1: Array.prototype.shift.prototype === undefined. Actual: ' + (Array.prototype.shift.prototype));
}

