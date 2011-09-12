// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Object constructor has length property whose value is 1
 *
 * @section 15.2.3, 15.2.4
 * @path 15_Native/15.2_Object_Objects/15.2.3_Properties_of_the_Object_Constructor/S15.2.3_A3.js
 * @description Checking Object.length
 */

//CHECK#1
if(!Object.hasOwnProperty("length")){
  $ERROR('#1: The Object constructor has the property "length"');
}

//CHECK#2
if (Object.length !== 1) {
  $ERROR('#2: Object.length property value should be 1');
}

