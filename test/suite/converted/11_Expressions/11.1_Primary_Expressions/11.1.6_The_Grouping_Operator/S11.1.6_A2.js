// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "This" operator doesn't use GetValue. The operators "delete" and "typeof" can be applied to parenthesised expressions
 *
 * @section: 11.1.6;
 * @path: 11_Expressions/11.1_Primary_Expressions/11.1.6_The_Grouping_Operator/S11.1.6_A2.js;
 * @description: Applying "delete" and "typeof" operators to an undefined variable and a property of an object;
 */

//CHECK#1
if (delete (x) !== true) {
  $ERROR('#1: delete (x) === true');
}

//CHECK#2
if (typeof (x) !== "undefined") {
  $ERROR('#2: typeof (x) === "undefined". Actual: ' + (typeof (x)));
}

var object = {};
//CHECK#3
if (delete (object.prop) !== true) {
  $ERROR('#3: var object = {}; delete (object.prop) === true');
}

//CHECK#4
if (typeof (object.prop) !== "undefined") {
  $ERROR('#4: var object = {}; typeof (object.prop) === "undefined". Actual: ' + (typeof (object.prop)));
}

