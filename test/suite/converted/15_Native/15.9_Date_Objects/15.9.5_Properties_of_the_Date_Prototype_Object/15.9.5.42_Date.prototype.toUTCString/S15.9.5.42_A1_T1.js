// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "toUTCString" has { DontEnum } attributes
 *
 * @section 15.9.5.42
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.42_Date.prototype.toUTCString/S15.9.5.42_A1_T1.js
 * @description Checking absence of ReadOnly attribute
 */

x = Date.prototype.toUTCString;
if(x === 1)
  Date.prototype.toUTCString = 2;
else
  Date.prototype.toUTCString = 1;
if (Date.prototype.toUTCString === x) {
  $ERROR('#1: The Date.prototype.toUTCString has not the attribute ReadOnly');
}


