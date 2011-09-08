// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.valueOf() returns this string value
 *
 * @section: 15.5.4.3;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/S15.5.4.3_A1_T1.js;
 * @description: Create String object as new String(1) and check it`s valueOf();
 */

var __string__obj = new String(1);

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if (__string__obj.valueOf() !== ""+1) {
  $ERROR('#1: __string__obj = new String(1); __string__obj.valueOf() === ""+1. Actual: __string__obj.valueOf() ==='+__string__obj.valueOf() ); 
}
//
//////////////////////////////////////////////////////////////////////////////

