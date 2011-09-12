// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of the toLocaleUpperCase method is 0
 *
 * @section 15.5.4.19
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.19_String.prototype.toLocaleUpperCase/S15.5.4.19_A11.js
 * @description Checking String.prototype.toLocaleUpperCase.length
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.toLocaleUpperCase.hasOwnProperty("length"))) {
  $ERROR('#1: String.prototype.toLocaleUpperCase.hasOwnProperty("length") return true. Actual: '+String.prototype.toLocaleUpperCase.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.toLocaleUpperCase.length !== 0) {
  $ERROR('#2: String.prototype.toLocaleUpperCase.length === 0. Actual: '+String.prototype.toLocaleUpperCase.length );
}
//
//////////////////////////////////////////////////////////////////////////////

