// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.5_A3.1_T7;
 * @section: 7.8.5, 15.10.4.1;
 * @assertion: RegularExpressionFlags :: IdentifierPart;
 * @description: IdentifierPart :: \u0067 (g);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.5_A3.1_T7",

path: "07_Lexical_Conventions\7.8_Literals\7.8.5_Regular_Expression_Literals\S7.8.5_A3.1_T7.js",

assertion: "RegularExpressionFlags :: IdentifierPart",

description: "IdentifierPart :: \\u0067 (g)",

test: function testcase() {
   //CHECK#1
var regexp = /(?:)/\u0067; 
if (regexp.global !== true) {
  $ERROR('#1: var regexp = /(?:)/\\u0067; regexp.global === true. Actual: ' + (regexp.global));
}                        

 }
});

