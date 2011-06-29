// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.7_A1;
 * @section: 7.7;
 * @assertion: Correct interpretation of all punctuators;
 * @description: Using all punctuators;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.7_A1",

path: "TestCases/07_Lexical_Conventions/7.7_Punctuators/S7.7_A1.js",

assertion: "Correct interpretation of all punctuators",

description: "Using all punctuators",

test: function testcase() {
   //CHECK#1
  ({});[];
  this.NaN; 
  1 < 2 > 3 <= 4 >= 5 == 6 != 7 === 8 !== 9;
  1 + 2 - 3 * 4 % 5 / 6 << 7 >> 8 >>> 9;
  this.NaN++; ++this.NaN; this.NaN--; --this.NaN;
  1 & 2 | 3 ^ 4 && !5 || ~6;
  1 ? 2 : 3;
  this.NaN = 1; this.NaN += 2; this.NaN -= 3; this.NaN *= 4; this.NaN /= 5;
  this.NaN %= 6; this.NaN <<= 7; this.NaN >>= 8; this.NaN >>>= 9;
  this.NaN &= 1; this.NaN |= 2; this.NaN ^= 3;  

 }
});

