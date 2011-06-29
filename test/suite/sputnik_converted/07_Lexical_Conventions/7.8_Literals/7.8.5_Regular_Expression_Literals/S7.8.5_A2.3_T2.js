// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.5_A2.3_T2;
 * @section: 7.8.5;
 * @assertion: RegularExpressionChar :: LineTerminator is incorrect;  
 * @description: Line Feed, with eval;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.5_A2.3_T2",

path: "TestCases/07_Lexical_Conventions/7.8_Literals/7.8.5_Regular_Expression_Literals/S7.8.5_A2.3_T2.js",

assertion: "RegularExpressionChar :: LineTerminator is incorrect",

description: "Line Feed, with eval",

test: function testcase() {
   //CHECK#1
try {
   eval("/a\u000A/").source;
   $ERROR('#1.1: RegularExpressionChar :: Line Feedis incorrect. Actual: ' + (eval("/a\u000A/").source)); 
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     $ERROR('#1.2: RegularExpressionChar :: Line Feed is incorrect. Actual: ' + (e));
  }
}     

 }
});

