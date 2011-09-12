// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Single line comments can not contain CARRIAGE RETURN (U+000D) inside
 *
 * @section 7.3, 7.4
 * @path 07_Lexical_Conventions/7.3_Line_Terminators/S7.3_A3.2_T2.js
 * @description Insert CARRIAGE RETURN (\u000D) into begin of single line comment
 * @negative
 */

// CHECK#1
eval("//\u000D single line comment");

