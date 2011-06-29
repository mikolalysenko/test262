// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A8_T1;
* @section: 15.10.4.1;
* @assertion: let P be ToString(pattern) and let F be ToString(flags);
* @description: Pattern is "a|b" and flags is "i";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A8_T1",

path: "TestCases/15_Native/15.10_RegExp_Objects/15.10.4_The_RegExp_Constructor/S15.10.4.1_A8_T1.js",

assertion: "let P be ToString(pattern) and let F be ToString(flags)",

description: "Pattern is \"a|b\" and flags is \"i\"",

test: function testcase() {
   __re = new RegExp("a|b","i");

//CHECK#1
if (__re.ignoreCase !== true) {
	$ERROR('#1: __re = new RegExp("a|b","i"); __re.ignoreCase === true. Actual: ' + (__re.ignoreCase));
}

//CHECK#2
if (__re.multiline !== false) {
	$ERROR('#2: __re = new RegExp("a|b","i"); __re.multiline === false. Actual: ' + (__re.multiline));
}

//CHECK#3
if (__re.global !== false) {
	$ERROR('#3: __re = new RegExp("a|b","i"); __re.global === false. Actual: ' + (__re.global));
}

//CHECK#4
if (__re.lastIndex !== 0) {
	$ERROR('#4: __re = new RegExp("a|b","i"); __re.lastIndex === 0. Actual: ' + (__re.lastIndex));
}

//CHECK#5
if (typeof __re.source === "undefined") {
	$ERROR('#5: __re = new RegExp("a|b","i"); typeof __re.source !== "undefined"');
}


 }
});

