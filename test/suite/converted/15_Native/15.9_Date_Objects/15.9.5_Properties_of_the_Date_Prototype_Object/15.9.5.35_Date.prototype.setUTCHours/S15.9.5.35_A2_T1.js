// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "setUTCHours" is 4
 *
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.35_Date.prototype.setUTCHours/S15.9.5.35_A2_T1.js
 * @description The "length" property of the "setUTCHours" is 4
 */

if(Date.prototype.setUTCHours.hasOwnProperty("length") !== true){
  $ERROR('#1: The setUTCHours has a "length" property');
}

if(Date.prototype.setUTCHours.length !== 4){
  $ERROR('#2: The "length" property of the setUTCHours is 4');
}


