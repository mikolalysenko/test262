// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.12_A3_T2;
* @section: 15.10.2.12;
* @assertion: The production CharacterClassEscape :: w evaluates by returning the set of characters containing the sixty-three characters:
* a - z, A - Z, 0 - 9, _;
* @description: a - z;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.12_A3_T2",

path: "TestCases/15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.12_CharacterClassEscape/S15.10.2.12_A3_T2.js",

assertion: "The production CharacterClassEscape :: w evaluates by returning the set of characters containing the sixty-three characters:",

description: "a - z",

test: function testcase() {
   var regexp_w = /\w/;

//CHECK#0061-007A
var result = true; 
for (alpha = 0x0061; alpha <= 0x007A; alpha++) {
  str = String.fromCharCode(alpha);
  arr = regexp_w.exec(str); 
  if ((arr === null) || (arr[0] !== str)) {
    result = false;
  }
}

if (result !== true) {
  $ERROR('#1: a - z');
}

 }
});

