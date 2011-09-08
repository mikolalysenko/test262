// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.lastIndexOf has not prototype property
 *
 * @section: 15.5.4.8, 13.2;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.8_String.prototype.lastIndexOf/S15.5.4.8_A6.js;
 * @description: Checking String.prototype.lastIndexOf.prototype;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.lastIndexOf.prototype !== undefined) {
  $ERROR('#1: String.prototype.lastIndexOf.prototype === undefined. Actual: '+String.prototype.lastIndexOf.prototype );
}
//
//////////////////////////////////////////////////////////////////////////////

