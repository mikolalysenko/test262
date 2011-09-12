// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When String is called as a function rather than as a constructor, it performs a type conversion
 *
 * @section 15.5.1.1
 * @path 15_Native/15.5_String_Objects/15.5.1_The_String_Constructor_Called_as_a_Function/S15.5.1.1_A1_T10.js
 * @description Call String(1) and String(-1)
 */

var __str = String(1);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __str !== "string") {
  $ERROR('#1: __str = String(1); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== "1") {
  $ERROR('#2: __str = String(1); __str === "1". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str = String(-1);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __str !== "string") {
  $ERROR('#3: __str = String(-1); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== "-1") {
  $ERROR('#4: __str = String(-1); __str === "-1". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

