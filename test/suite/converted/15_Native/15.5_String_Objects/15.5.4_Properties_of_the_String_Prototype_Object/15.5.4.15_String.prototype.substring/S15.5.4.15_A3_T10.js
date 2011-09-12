// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.substring (start, end) can be applied to non String object instance and
 * returns a string value(not object)
 *
 * @section 15.5.4.15
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.15_String.prototype.substring/S15.5.4.15_A3_T10.js
 * @description Checknig if applying String.prototype.substring to Function object instance passes
 */

__FACTORY.prototype.substring = String.prototype.substring;

var __instance = new __FACTORY(void 0);
 
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.substring(0, 100) !== "undefined") {
  $ERROR('#1: __instance.substring(0, 100) === "undefined". Actual: '+__instance.substring(0, 100) );
}
//
//////////////////////////////////////////////////////////////////////////////

function __FACTORY( value ) {
    this.value = value;
    this.toString = function() { return this.value+''; }
}

