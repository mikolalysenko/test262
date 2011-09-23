// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.charCodeAt(pos)
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.5_String.prototype.charCodeAt/S15.5.4.5_A1_T3.js
 * @description Use numbers and strings as pos
 */

var charCodeAt = String.prototype.charCodeAt;

if (typeof toString === "undefined"){
    var toString = Object.prototype.toString;
}

var __class__ = toString();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (charCodeAt("2") !== 0x62) {
  $ERROR('#1: charCodeAt = String.prototype.charCodeAt; charCodeAt("2") === 0x62. Actual: '+charCodeAt("2") ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (charCodeAt(3) !== 0x6A) {
  $ERROR('#2: charCodeAt = String.prototype.charCodeAt; charCodeAt(3) === 0x6A. Actual: '+charCodeAt(3) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (charCodeAt("4") !== 0x65) {
  $ERROR('#3: charCodeAt = String.prototype.charCodeAt; charCodeAt("4") === 0x65. Actual: '+charCodeAt("4") ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (charCodeAt(5) !== 0x63) {
  $ERROR('#4: charCodeAt = String.prototype.charCodeAt; charCodeAt(5) === 0x63. Actual: '+charCodeAt(5) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (charCodeAt("6") !== 0x74) {
  $ERROR('#5: charCodeAt = String.prototype.charCodeAt; charCodeAt("6") === 0x74. Actual: '+charCodeAt("6") ); 
}
//
//////////////////////////////////////////////////////////////////////////////


