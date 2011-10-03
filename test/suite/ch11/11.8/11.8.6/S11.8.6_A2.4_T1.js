// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * First expression is evaluated first, and then second expression
 *
 * @path 11_Expressions/11.8_Relational_Operators/11.8.6_The_instanceof_operator/S11.8.6_A2.4_T1.js
 * @description Checking with "="
 */

//CHECK#1 
var OBJECT = 0;
if ((OBJECT = Object, {}) instanceof OBJECT !== true) {
  $ERROR('#1: var OBJECT = 0; (OBJECT = Object, {}) instanceof OBJECT === true');
}

//CHECK#2
var object = {}; 
if (object instanceof (object = 0, Object) !== true) {
  $ERROR('#2: var object = {};  object instanceof (object = 0, Object) === true');
}


