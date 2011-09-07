// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.getMonth property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @id: S15.9.5.12_A3_T1;
 * @section: 15.9.5.12;
 * @description: Checking ReadOnly attribute;
 */

x = Date.prototype.getMonth.length;
Date.prototype.getMonth.length = 1;
if (Date.prototype.getMonth.length !== x) {
  $ERROR('#1: The Date.prototype.getMonth.length has the attribute ReadOnly');
}


