// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.8_A1;
* @section: 11.4.8, 7.2, 7.3;
* @assertion: White Space and Line Terminator between "~" and UnaryExpression are allowed;
* @description: Checking by using eval;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.8_A1",

path: "TestCases/11_Expressions/11.4_Unary_Operators/11.4.8_Bitwise_NOT_Operator/S11.4.8_A1.js",

assertion: "White Space and Line Terminator between \"~\" and UnaryExpression are allowed",

description: "Checking by using eval",

test: function testcase() {
   //CHECK#1
if (eval("~\u00090") !== -1) {
  $ERROR('#0: ~\\u00090 === -1');
}

//CHECK#2
if (eval("~\u000B0") !== -1) {
  $ERROR('#2: ~\\u000B0 === -1');  
}

//CHECK#3
if (eval("~\u000C0") !== -1) {
  $ERROR('#3: ~\\u000C0 === -1');
}

//CHECK#4
if (eval("~\u00200") !== -1) {
  $ERROR('#4: ~\\u0020 === -1');
}

//CHECK#5
if (eval("~\u00A00") !== -1) {
  $ERROR('#5: ~\\u00A00 === -1');
}

//CHECK#6
if (eval("~\u000A0") !== -1) {
  $ERROR('#6: ~\\u000A0 === -1');  
}

//CHECK#7
if (eval("~\u000D0") !== -1) {
  $ERROR('#7: ~\\u000D0 === -1');
}

//CHECK#8
if (eval("~\u20280") !== -1) {
  $ERROR('#8: ~\\u20280 === -1');
}

//CHECK#9
if (eval("~\u20290") !== -1) {
  $ERROR('#9: ~\\u20290 === -1');
}

//CHECK#10
if (eval("~\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u20290") !== -1) {
  $ERROR('#10: ~\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20290 === -1');
}

 }
});

