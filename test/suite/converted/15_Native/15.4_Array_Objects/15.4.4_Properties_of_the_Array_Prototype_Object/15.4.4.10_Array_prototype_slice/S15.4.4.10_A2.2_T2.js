// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator use ToInteger from end
 *
 * @section: 15.4.4.10;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.10_Array_prototype_slice/S15.4.4.10_A2.2_T2.js;
 * @description: end = NaN;
 */

var x = [0,1,2,3,4];
var arr = x.slice(0,NaN);

//CHECK#1
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: var x = [0,1,2,3,4]; var arr = x.slice(0,NaN); arr is Array object. Actual: ' + (arr.getClass()));
}

//CHECK#2
if (arr.length !== 0) {
  $ERROR('#2: var x = [0,1,2,3,4]; var arr = x.slice(0,NaN); arr.length === 0. Actual: ' + (arr.length));
}      

//CHECK#3
if (arr[0] !== undefined) {
  $ERROR('#3: var x = [0,1,2,3,4]; var arr = x.slice(0,NaN); arr[0] === undefined. Actual: ' + (arr[0]));
}

