// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4_A1.1_T10;
 * @section: 15.4, 11.2.1;
 * @assertion: A property name P (in the form of a string value) is an array index
 * if and only if ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal to 2^32 - 1;
 * @description: Array index is power of two;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4_A1.1_T10",

path: "TestCases/15_Native/15.4_Array_Objects/S15.4_A1.1_T10.js",

assertion: "A property name P (in the form of a string value) is an array index",

description: "Array index is power of two",

test: function testcase() {
   //CHECK#
x = [];
k = 1;
for (i = 0; i < 32; i++) {
  k = k * 2;
  x[k - 2] = k;  
}

k = 1;
for (i = 0; i < 32; i++) {
  k = k * 2;
  if (x[k - 2] !== k) {
    $ERROR('#' + (k - 2) + ': ');
  }     
}

 }
});

