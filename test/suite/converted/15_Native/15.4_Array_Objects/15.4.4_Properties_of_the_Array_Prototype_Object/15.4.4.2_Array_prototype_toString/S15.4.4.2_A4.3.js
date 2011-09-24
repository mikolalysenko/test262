// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of toString has the attribute ReadOnly
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.2_Array_prototype_toString/S15.4.4.2_A4.3.js
 * @description Checking if varying the length property fails
 * @onlyStrict
 * @negative
 */

//CHECK#1
var x = Array.prototype.toString.length;
Array.prototype.toString.length = Infinity;
if (Array.prototype.toString.length !== x) {
  $ERROR('#1: x = Array.prototype.toString.length; Array.prototype.toString.length = Infinity; Array.prototype.toString.length === x. Actual: ' + (Array.prototype.toString.length));
}


