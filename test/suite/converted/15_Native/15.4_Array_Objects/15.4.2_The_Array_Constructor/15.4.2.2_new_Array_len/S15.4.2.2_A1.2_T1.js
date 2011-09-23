// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The [[Class]] property of the newly constructed object is set to "Array"
 *
 * @path 15_Native/15.4_Array_Objects/15.4.2_The_Array_Constructor/15.4.2.2_new_Array_len/S15.4.2.2_A1.2_T1.js
 * @description Checking use Object.prototype.toString
 */

//CHECK#1
var x = new Array(0); 
x.getClass = Object.prototype.toString;
if (x.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: var x = new Array(0); x.getClass = Object.prototype.toString; x is Array object. Actual: ' + (x.getClass()));
}

