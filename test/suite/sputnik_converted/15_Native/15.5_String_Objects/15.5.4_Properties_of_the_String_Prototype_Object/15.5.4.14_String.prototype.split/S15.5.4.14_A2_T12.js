// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.14_A2_T12;
* @section: 15.5.4.14;
* @assertion: String.prototype.split (separator, limit) returns an Array object into which substrings of the result of converting this object to a string have
* been stored. The substrings are determined by searching from left to right for occurrences of
* separator; these occurrences are not part of any substring in the returned array, but serve to divide up
* the string value. The value of separator may be a string of any length or it may be a RegExp object;
* @description: Call split("r-42"), instance is String("one-1 two-2 four-4");
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.14_A2_T12",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.14_String.prototype.split/S15.5.4.14_A2_T12.js",

assertion: "String.prototype.split (separator, limit) returns an Array object into which substrings of the result of converting this object to a string have",

description: "Call split(\"r-42\"), instance is String(\"one-1 two-2 four-4\")",

test: function testcase() {
   var __string = new String("one-1 two-2 four-4");

var __split = __string.split("r-42");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__split.constructor !== Array) {
  $ERROR('#1: var __string = new String("one-1 two-2 four-4"); __split = __string.split("r-42"); __split.constructor === Array. Actual: '+__split.constructor );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.length !== 1) {
  $ERROR('#2: var __string = new String("one-1 two-2 four-4"); __split = __string.split("r-42"); __split.length === 1. Actual: '+__split.length );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__split[0] !== "one-1 two-2 four-4") {
  $ERROR('#3: var __string = new String("one-1 two-2 four-4"); __split = __string.split("r-42"); __split[0] === "one-1 two-2 four-4". Actual: '+__split[0] );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

