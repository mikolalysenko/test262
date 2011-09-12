// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Single line comment can contain SPACE (U+0020)
 *
 * @section 7.2, 7.4
 * @path 07_Lexical_Conventions/7.2_White_Space/S7.2_A3.4_T1.js
 * @description Use SPACE(\u0020)
 */

// CHECK#1
eval("//\u0020 single line \u0020 comment \u0020");

//CHECK#2
var x = 0;
eval("//\u0020 single line \u0020 comment \u0020 x = 1;");
if (x !== 0) {
  $ERROR('#1: var x = 0; eval("//\\u0020 single line \\u0020 comment \\u0020 x = 1;"); x === 0. Actual: ' + (x));
}

