// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of concat has the attribute ReadOnly
 *
 * @section 15.4.4.4
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.4_Array_prototype_concat/S15.4.4.4_A4.3.js
 * @description Checking if varying the length property fails
 * @strict_only
 * @strict_mode_negative
 */

//CHECK#1
var x = Array.prototype.concat.length;
Array.prototype.concat.length = Infinity;
if (Array.prototype.concat.length !== x) {
  $ERROR('#1: x = Array.prototype.concat.length; Array.prototype.concat.length = Infinity; Array.prototype.concat.length === x. Actual: ' + (Array.prototype.concat.length));
}


