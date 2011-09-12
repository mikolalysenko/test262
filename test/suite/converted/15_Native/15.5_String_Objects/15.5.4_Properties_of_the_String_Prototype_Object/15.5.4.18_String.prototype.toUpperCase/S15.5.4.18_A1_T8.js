// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toUpperCase()
 *
 * @section 15.5.4.18
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.18_String.prototype.toUpperCase/S15.5.4.18_A1_T8.js
 * @description Call toUpperCase() function of Infinity;
 */

Number.prototype.toUpperCase = String.prototype.toUpperCase;

if (Infinity.toUpperCase()!== "INFINITY") {
  $ERROR('#1: Number.prototype.toUpperCase = String.prototype.toUpperCase; Infinity.toUpperCase()=== "INFINITY". Actual: '+Infinity.toUpperCase());
}

