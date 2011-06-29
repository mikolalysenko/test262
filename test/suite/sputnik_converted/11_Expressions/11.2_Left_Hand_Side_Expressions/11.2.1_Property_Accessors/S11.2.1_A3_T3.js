// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.1_A3_T3;
* @section: 11.2.1, 9.9, 11.2.3, 15.6.4.2;
* @assertion: MemberExpression calls ToObject(MemberExpression) and ToString(Expression). CallExpression calls ToObject(CallExpression) and ToString(Expression) 
* @description: Checking String case;
* 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.1_A3_T3",

path: "TestCases/11_Expressions/11.2_Left_Hand_Side_Expressions/11.2.1_Property_Accessors/S11.2.1_A3_T3.js",

assertion: "MemberExpression calls ToObject(MemberExpression) and ToString(Expression). CallExpression calls ToObject(CallExpression) and ToString(Expression)",

description: "Checking String case",

test: function testcase() {
   //CHECK#1
if ("abc123".charAt(5) !== "3") {
  $ERROR('#1: "abc123".charAt(5) === "3". Actual: ' + ("abc123".charAt(5)));
}

//CHECK#2
if ("abc123"["charAt"](0) !== "a") {
  $ERROR('#2: "abc123"["charAt"](0) === "a". Actual: ' + ("abc123"["charAt"](0)));
}

//CHECK#3
if ("abc123".length !== 6) {
  $ERROR('#3: "abc123".length === 6. Actual: ' + ("abc123".length));
}

//CHECK#4
if ("abc123"["length"] !== 6) {
  $ERROR('#4: "abc123"["length"] === 6. Actual: ' + ("abc123"["length"]));
}

//CHECK#5
if (new String("abc123").length !== 6) {
  $ERROR('#5: new String("abc123").length === 6. Actual: ' + (new String("abc123").length));
}

//CHECK#6
if (new String("abc123")["charAt"](2) !== "c") {
  $ERROR('#6: new String("abc123")["charAt"](2) === "c". Actual: ' + (new String("abc123")["charAt"](2)));
}  

 }
});

