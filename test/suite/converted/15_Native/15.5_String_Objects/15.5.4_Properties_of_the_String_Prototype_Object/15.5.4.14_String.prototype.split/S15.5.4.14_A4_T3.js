// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.split (separator, limit) returns an Array object into which substrings of the result of converting this object to a string have
 * been stored. If separator is a regular expression then
 * inside of SplitMatch helper the [[Match]] method of R is called giving it the arguments corresponding
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.14_String.prototype.split/S15.5.4.14_A4_T3.js
 * @description Arguments are regexp /l/ and 1, and instance is String("hello")
 */

var __string = new String("hello");

var __re = /l/;

var __split = __string.split(__re,1);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__split.constructor !== Array) {
  $ERROR('#1: var __string = new String("hello"); var __re = /l/; __split = __string.split(__re,1); __split.constructor === Array. Actual: '+__split.constructor );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.length !== 1) {
  $ERROR('#2: var __string = new String("hello"); var __re = /l/; __split = __string.split(__re,1); __split.length === 1. Actual: '+__split.length );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__split[0] !== "he") {
  $ERROR('#3: var __string = new String("hello"); var __re = /l/; __split = __string.split(__re,1); __split[0] === "he". Actual: '+__split[0] );
}
//
//////////////////////////////////////////////////////////////////////////////

