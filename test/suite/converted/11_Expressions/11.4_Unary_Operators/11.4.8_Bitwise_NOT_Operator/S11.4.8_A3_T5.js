// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator ~x returns ~ToInt32(x)
 *
 * @section: 11.4.8;
 * @path: 11_Expressions/11.4_Unary_Operators/11.4.8_Bitwise_NOT_Operator/S11.4.8_A3_T5.js;
 * @description: Type(x) is Object object or Function object;
 */

//CHECK#1
if (~({}) !== -1) {
  $ERROR('#1: ~({}) === -1. Actual: ' + (~({})));
}

//CHECK#2  
if (~(function(){return 1}) !== -1) {
  $ERROR('#2: ~(function(){return 1}) === -1. Actual: ' + (~(function(){return 1})));
}

