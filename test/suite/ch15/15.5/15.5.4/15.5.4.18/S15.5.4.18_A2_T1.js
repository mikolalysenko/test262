// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toUpperCase() return a string, but not a String object
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.18_String.prototype.toUpperCase/S15.5.4.18_A2_T1.js
 * @description Checking returned result
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("Hello, WoRlD!".toUpperCase() !== "HELLO, WORLD!") {
  $ERROR('#1: "Hello, WoRlD!".toUpperCase() === "HELLO, WORLD!". Actual: '+("Hello, WoRlD!".toUpperCase()) );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if ("Hello, WoRlD!".toUpperCase() !== String("HELLO, WORLD!")) {
  $ERROR('#2: "Hello, WoRlD!".toUpperCase() === String("HELLO, WORLD!"). Actual: '+("Hello, WoRlD!".toUpperCase()) );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if ("Hello, WoRlD!".toUpperCase() ===new String("HELLO, WORLD!")) {
  $ERROR('#3: "Hello, WoRlD!".toUpperCase() !== new String("HELLO, WORLD!")');
}
//
//////////////////////////////////////////////////////////////////////////////

