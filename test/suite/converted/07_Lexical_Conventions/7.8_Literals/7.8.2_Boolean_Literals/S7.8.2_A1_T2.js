// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Literal :: BooleanLiteral
 *
 * @path 07_Lexical_Conventions/7.8_Literals/7.8.2_Boolean_Literals/S7.8.2_A1_T2.js
 * @description BooleanLiteral :: false
 */

//CHECK#1
if (Boolean(false) !== false) {
  $ERROR('#1: Boolean(false) === false. Actual: Boolean(false) === ' + (Boolean(false)));
} 
 

