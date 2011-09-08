// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.substring (start, end)
 *
 * @section: 15.5.4.15;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.15_String.prototype.substring/S15.5.4.15_A1_T6.js;
 * @description: Arguments are x and number, and instance is new String, x is undefined variable;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (new String("undefined").substring(x,3) !== "und") {
  $ERROR('#1: var x; new String("undefined").substring(x,3) === "und". Actual: '+new String("undefined").substring(x,3) );
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

