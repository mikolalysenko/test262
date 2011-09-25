// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The concat function is intentionally generic.
 * It does not require that its this value be an Array object
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.4_Array_prototype_concat/S15.4.4.4_A2_T2.js
 * @description Checking this for Object object with no items
 */

var x = {};
x.concat = Array.prototype.concat;
var arr = x.concat();

//CHECK#0
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#0: var x = {}; x.concat = Array.prototype.concat; var arr = x.concat() arr is Array object. Actual: ' + (arr.getClass()));
}

//CHECK#1
if (arr[0] !== x) {
  $ERROR('#1: var x = {}; x.concat = Array.prototype.concat; var arr = x.concat(); arr[0] === x. Actual: ' + (arr[0]));
}

//CHECK#2
if (arr.length !== 1) {
  $ERROR('#2: var x = {}; x.concat = Array.prototype.concat; var arr = x.concat(); arr.length === 1. Actual: ' + (arr.length));
}                

