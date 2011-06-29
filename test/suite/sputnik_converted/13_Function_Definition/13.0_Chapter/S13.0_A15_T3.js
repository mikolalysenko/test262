// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A15_T3;
* @section: 13;
* @assertion: ''arguments'' variable overrides ActivationObject.arguments;
* @description: Declaring a variable named with "arguments" without a function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.0_A15_T3",

path: "TestCases/13_Function_Definition/13.0_Chapter/S13.0_A15_T3.js",

assertion: "\'\'arguments\'\' variable overrides ActivationObject.arguments",

description: "Declaring a variable named with \"arguments\" without a function",

test: function testcase() {
   THE_ANSWER="Answer to Life, the Universe, and Everything";

var arguments = THE_ANSWER;

function __func(arguments){
    return arguments;
    
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __func() !== "undefined") {
	$ERROR('#1: typeof __func() === "undefined". Actual: typeof __func() ==='+typeof __func());
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__func("The Ultimate Question") !== "The Ultimate Question") {
	$ERROR('#2: __func("The Ultimate Question") === "The Ultimate Question". Actual: __func("The Ultimate Question")==='+__func("The Ultimate Question"));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

