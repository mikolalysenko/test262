// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.5_A3.1_T8;
 * @section: 7.8.5, 15.10.4.1;
 * @assertion: RegularExpressionFlags :: IdentifierPart;
 * @description: IdentifierPart :: \u0069 (i);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.5_A3.1_T8",

path: "7.8.5, 15.10.4.1",

description: "IdentifierPart :: \\u0069 (i)",

test: function testcase() {
   //CHECK#1
var regexp = /(?:)/\u0069; 
if (regexp.ignoreCase !== true) {
  $ERROR('#1: var regexp = /(?:)/\\u0069; regexp.ignoreCase === true. Actual: ' + (regexp.ignoreCase));
}                         

 }
});

