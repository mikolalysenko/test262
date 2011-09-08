// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If neither x, nor y is a prefix of each other, returned result of strings comparison applies a simple lexicographic ordering to the sequences of code point value values
 *
 * @section: 11.8.4, 11.8.5;
 * @path: 11_Expressions/11.8_Relational_Operators/11.8.4_The_Grater_than_or_equal_Operator/S11.8.4_A4.12_T1.js;
 * @description: x and y are string primitives;
 */

//CHECK#1
if (("xy" >= "xx") !== true) {
  $ERROR('#1: ("xy" >= "xx") === true');
}

//CHECK#2
if (("xx" >= "xy") !== false) {
  $ERROR('#2: ("xx" >= "xy") === false');
}

//CHECK#3
if (("y" >= "x") !== true) {
  $ERROR('#3: ("y" >= "x") === true');
}

//CHECK#4
if (("aba" >= "aab") !== true) {
  $ERROR('#4: ("aba" >= aab") === true');
}

//CHECK#5
if (("\u0061\u0061\u0061\u0061" >= "\u0061\u0061\u0061\u0062") !== false) {
  $ERROR('#5: ("\\u0061\\u0061\\u0061\\u0061" >= \\u0061\\u0061\\u0061\\u0062") === false');
}

//CHECK#6
if (("a\u0000b" >= "a\u0000a") !== true) {
  $ERROR('#6: ("a\\u0000b" >= "a\\u0000a") === true');
}

//CHECK#7
if (("aa" >= "aB") !== true) {
  $ERROR('#7: ("aa" >= aB") === true');
}

