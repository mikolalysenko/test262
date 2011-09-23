// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of pop has the attribute ReadOnly
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.6_Array_prototype_pop/S15.4.4.6_A5.3.js
 * @description Checking if varying the length property fails
 * @strictOnly
 * @negative
 */

//CHECK#1
var x = Array.prototype.pop.length;
Array.prototype.pop.length = Infinity;
if (Array.prototype.pop.length !== x) {
  $ERROR('#1: x = Array.prototype.pop.length; Array.prototype.pop.length = Infinity; Array.prototype.pop.length === x. Actual: ' + (Array.prototype.pop.length));
}


