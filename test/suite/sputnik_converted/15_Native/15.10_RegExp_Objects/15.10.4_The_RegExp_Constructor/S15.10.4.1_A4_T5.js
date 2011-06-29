// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A4_T5;
* @section: 15.10.4.1;
* @assertion: let F be the empty string if flags is undefined;
* @description: RegExp is new RegExp("",(function(){})());
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A4_T5",

path: "TestCases/15_Native/15.10_RegExp_Objects/15.10.4_The_RegExp_Constructor/S15.10.4.1_A4_T5.js",

assertion: "let F be the empty string if flags is undefined",

description: "RegExp is new RegExp(\"\",(function(){})())",

test: function testcase() {
   __re = new RegExp("", (function(){})());

//CHECK#1
if (__re.source !== "") {
  $ERROR('#1: __re = new RegExp("", (function(){})()); __re.source === "". Actual: '+ (__re.source));
}

//CHECK#2
if (__re.multiline !== false) {
  $ERROR('#2: __re = new RegExp("", (function(){})()); __re.multiline === false. Actual: ' + (__re.multiline));
}

//CHECK#3
if (__re.global !== false) {
  $ERROR('#3: __re = new RegExp("", (function(){})()); __re.global === false. Actual: ' + (__re.global));
}

//CHECK#4
if (__re.ignoreCase !== false) {
  $ERROR('#4: __re = new RegExp("", (function(){})()); __re.ignoreCase === false. Actual: ' + (__re.ignoreCase));
}

 }
});

