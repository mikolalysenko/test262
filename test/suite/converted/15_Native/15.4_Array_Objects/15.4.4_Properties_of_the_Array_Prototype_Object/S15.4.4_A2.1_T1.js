// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * : The Array prototype object does not have a valueOf property of
 * its own; however, it inherits the valueOf property from the valueOf
 * property from the Object prototype Object;
 *
 * @id: S15.4.4_A2.1_T1;
 * @section: 15.4.4, 15.2.4.5;
 * @description: Checking use hasOwnProperty;
 */

//CHECK#1
if (Array.prototype.hasOwnProperty('valueOf') !== false) {
  $ERROR('#1: Array.prototype.hasOwnProperty(\'valueOf\') === false. Actual: ' + (Array.prototype.hasOwnProperty('valueOf')));
}

