// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String has length property whose value is 1
 *
 * @section: 15.5.3, 15.5.4;
 * @path: 15_Native/15.5_String_Objects/15.5.3_Properties_of_the_String_Constructor/S15.5.3_A1.js;
 * @description: Checking String.length;
 */

//////////////////////////////////////////////////////////////////////////////
// CHECK#
if (String.length !== 1) {
  $ERROR('String has length property whose value is 1. Actual: String.length==='+String.length);
}
//
//////////////////////////////////////////////////////////////////////////////

