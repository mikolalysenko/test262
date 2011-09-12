// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of shift has the attribute DontDelete
 *
 * @section 15.4.4.9, 15.2.4.5, 11.4.1
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.9_Array_prototype_shift/S15.4.4.9_A5.2.js
 * @description Checking use hasOwnProperty, delete
 */

//CHECK#1
if (Array.prototype.shift.hasOwnProperty('length') !== true) {
  $FAIL('#1: Array.prototype.shift.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.shift.hasOwnProperty('length')));
}

delete Array.prototype.shift.length;

//CHECK#2
if (Array.prototype.shift.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete Array.prototype.shift.length; Array.prototype.shift.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.shift.hasOwnProperty('length')));
}

//CHECK#3
if (Array.prototype.shift.length === undefined) {
  $ERROR('#3: delete Array.prototype.shift.length; Array.prototype.shift.length !== undefined');
}



