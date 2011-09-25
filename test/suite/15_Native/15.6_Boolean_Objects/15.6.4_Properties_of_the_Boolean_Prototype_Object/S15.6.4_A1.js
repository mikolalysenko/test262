// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Boolean prototype object is itself a Boolean object
 * (its [[Class]] is "Boolean") whose value is false
 *
 * @path 15_Native/15.6_Boolean_Objects/15.6.4_Properties_of_the_Boolean_Prototype_Object/S15.6.4_A1.js
 * @description Checking type and value of Boolean.prototype
 */

//CHECK#1
if (typeof Boolean.prototype !== "object") {
  $ERROR('#1: typeof Boolean.prototype === "object"');
}

//CHECK#2
if (Boolean.prototype != false) {
  $ERROR('#2: Boolean.prototype == false');
}

delete Boolean.prototype.toString;

if (Boolean.prototype.toString() !== "[object Boolean]") {
  $ERROR('#3: The [[Class]] property of the Boolean prototype object is set to "Boolean"');
}

