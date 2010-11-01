// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A2_T2;
* @section: 13;
* @assertion: function must be evaluated inside the expression;
* @description: Defining function body with "return arg + arguments[1]";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13_A2_T2",

path: "13",

description: "Defining function body with \"return arg + arguments[1]\"",

test: function testcase() {
   var x = (function S13_A2_T2_func(arg) { return arg + arguments[1] })(1, "1");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (x !== "11") {
	$ERROR('#1: x === "11". Actual: x ==='+x);
}

//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (typeof S13_A2_T2_func !== 'undefined') {
    $ERROR('#2: typeof S13_A2_T2_func === \'undefined\'. Actual: typeof S13_A2_T2_func ===' + typeof S13_A2_T2_func);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

