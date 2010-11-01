// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_A15_T1;
* @section: 13.2.2;
* @assertion: When the [[Construct]] property for a Function object F is called,
* and the object created in the function is returned, the object (declared with "this" within a function) will be strong and healthy;
* @description: Function declared at the end of the program and "obj" property is declared with "var obj = {}";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.2_A15_T1",

path: "13.2.2",

description: "Function declared at the end of the program and \"obj\" property is declared with \"var obj = {}\"",

test: function testcase() {
   var __obj = new __FACTORY();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof S13_2_2_A15_T1_obj !== "undefined") {
	$ERROR('#1: typeof obj === "undefined". Actual: typeof obj ==='+typeof obj);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__obj.prop !== "A") {
	$ERROR('#2: __obj.prop === "A". Actual: __obj.prop ==='+__obj.prop);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__obj.slot.prop !==1) {
	$ERROR('#3: __obj.slot.prop ===1. Actual: __obj.slot.prop ==='+__obj.slot.prop);
}
//
//////////////////////////////////////////////////////////////////////////////

function __FACTORY(){
    this.prop = 1;
    var S13_2_2_A15_T1_obj = {};
    S13_2_2_A15_T1_obj.prop = "A";
    S13_2_2_A15_T1_obj.slot = this;
    return S13_2_2_A15_T1_obj;
}

 }
});

