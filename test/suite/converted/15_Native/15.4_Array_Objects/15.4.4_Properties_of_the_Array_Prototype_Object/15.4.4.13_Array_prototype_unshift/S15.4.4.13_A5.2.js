// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of unshift has the attribute DontDelete
 *
 * @section: 15.4.4.13, 15.2.4.5, 11.4.1;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.13_Array_prototype_unshift/S15.4.4.13_A5.2.js;
 * @description: Checking use hasOwnProperty, delete;
 * @strict_only;
 * @strict_mode_negative;
 */

//CHECK#1
if (Array.prototype.unshift.hasOwnProperty('length') !== true) {
  $FAIL('#1: Array.prototype.unshift.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.unshift.hasOwnProperty('length')));
}

delete Array.prototype.unshift.length;

//CHECK#2
if (Array.prototype.unshift.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete Array.prototype.unshift.length; Array.prototype.unshift.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.unshift.hasOwnProperty('length')));
}

//CHECK#3
if (Array.prototype.unshift.length === undefined) {
  $ERROR('#3: delete Array.prototype.unshift.length; Array.prototype.unshift.length !== undefined');
}



