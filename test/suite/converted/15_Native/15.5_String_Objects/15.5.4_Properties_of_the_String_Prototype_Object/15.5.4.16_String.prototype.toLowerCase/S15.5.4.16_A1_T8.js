// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toLowerCase()
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.16_String.prototype.toLowerCase/S15.5.4.16_A1_T8.js
 * @description Call toLowerCase() function of Infinity
 */

Number.prototype.toLowerCase = String.prototype.toLowerCase;

if (Infinity.toLowerCase()!== "infinity") {
  $ERROR('#1: Number.prototype.toLowerCase = String.prototype.toLowerCase; Infinity.toLowerCase()=== "infinity". Actual: '+Infinity.toLowerCase());
}

