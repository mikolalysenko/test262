// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Object.prototype.valueOf.length property has the attribute DontDelete
 *
 * @path 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/15.2.4.4_Object.prototype.valueOf/S15.2.4.4_A9.js
 * @description Checknig if deleting of the Object.prototype.valueOf.length property fails
 * @strictOnly
 * @negative
 */

//CHECK#0
if (!(Object.prototype.valueOf.hasOwnProperty('length'))) {
  $FAIL('#0: the Object.prototype.valueOf has length property');
}

//CHECK#1
if (delete Object.prototype.valueOf.length) {
  $ERROR('#1: The Object.prototype.valueOf.length property has the attributes DontDelete');
}

//CHECK#2
if (!(Object.prototype.valueOf.hasOwnProperty('length'))) {
  $FAIL('#2: The Object.prototype.valueOf.length property has the attributes DontDelete');
}

