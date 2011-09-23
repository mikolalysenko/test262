// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "setUTCMilliseconds" is 1
 *
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.29_Date.prototype.setUTCMilliseconds/S15.9.5.29_A2_T1.js
 * @description The "length" property of the "setUTCMilliseconds" is 1
 */

if(Date.prototype.setUTCMilliseconds.hasOwnProperty("length") !== true){
  $ERROR('#1: The setUTCMilliseconds has a "length" property');
}

if(Date.prototype.setUTCMilliseconds.length !== 1){
  $ERROR('#2: The "length" property of the setUTCMilliseconds is 1');
}


