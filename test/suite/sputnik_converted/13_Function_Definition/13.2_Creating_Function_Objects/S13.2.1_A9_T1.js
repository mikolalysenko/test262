// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.1_A9_T1;
* @section: 13.2.1;
* @assertion: When the [[Call]] property for a Function object is called,
* the body is evaluated and if evaluation result has type "return" its value is not defined, then "undefined" is returned;
* @description: Using "return" with no expression. Declaring a function with "function __func()";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.1_A9_T1",

path: "TestCases/13_Function_Definition/13.2_Creating_Function_Objects/S13.2.1_A9_T1.js",

assertion: "When the [[Call]] property for a Function object is called,",

description: "Using \"return\" with no expression. Declaring a function with \"function __func()\"",

test: function testcase() {
   var x; 

function __func(){
    x = 1;
    return;
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func() !== undefined) {
	$ERROR('#1: __func() === undefined. Actual: __func() ==='+__func());
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (x!==1) {
	$ERROR('#2: x === 1. Actual: x === '+x);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

