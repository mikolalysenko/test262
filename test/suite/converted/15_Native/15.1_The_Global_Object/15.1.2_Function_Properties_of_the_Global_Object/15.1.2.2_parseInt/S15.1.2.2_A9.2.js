// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of parseInt has the attribute DontDelete
 *
 * @section 15.1.2.2, 15.2.4.5, 11.4.1
 * @path 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.2_parseInt/S15.1.2.2_A9.2.js
 * @description Checking use hasOwnProperty, delete
 * @strict_only
 * @strict_mode_negative
 */

//CHECK#1
if (parseInt.hasOwnProperty('length') !== true) {
  $FAIL('#1: parseInt.hasOwnProperty(\'length\') === true. Actual: ' + (parseInt.hasOwnProperty('length')));
}

delete parseInt.length;

//CHECK#2
if (parseInt.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete parseInt.length; parseInt.hasOwnProperty(\'length\') === true. Actual: ' + (parseInt.hasOwnProperty('length')));
}

//CHECK#3
if (parseInt.length === undefined) {
  $ERROR('#3: delete parseInt.length; parseInt.length !== undefined');
}

