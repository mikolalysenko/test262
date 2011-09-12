// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of the toLocaleString method is 0
 *
 * @section 15.2.4.3
 * @path 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/15.2.4.3_Object.prototype.toLocaleString/S15.2.4.3_A11.js
 * @description Checking the Object.prototype.toLocaleString.length
 */

//CHECK#1
if (!(Object.prototype.toLocaleString.hasOwnProperty("length"))) {
  $ERROR('#1: The length property of the toLocaleString method is 0');
}

//CHECK#2
if (Object.prototype.toLocaleString.length !== 0) {
  $ERROR('#2: The length property of the toLocaleString method is 0');
}

