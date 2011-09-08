// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The push property of Array can't be used as constructor
 *
 * @section: 15.4.4.7, 11.2.2;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.7_Array_prototype_push/S15.4.4.7_A6.7.js;
 * @description: If property does not implement the internal [[Construct]] method, throw a TypeError exception;
 */

//CHECK#1

try {
  new Array.prototype.push();
  $ERROR('#1.1: new Array.prototype.push() throw TypeError. Actual: ' + (new Array.prototype.push()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new Array.prototype.push() throw TypeError. Actual: ' + (e));
  }
}

