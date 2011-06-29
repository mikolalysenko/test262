// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.3_A11_T1;
* @section: 12.6.3;
* @assertion: If (Evaluate Statement).type is "continue" and (Evaluate Statement).target is in the current label set, iteration of labeled loop breaks;
* @description: Simple test of continue loop with using "continue";
*/

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.3_A11_T1",

path: "TestCases/12_Statement/12.6_Iteration_Statements/12.6.3_The_for_Statement/S12.6.3_A11_T1.js",

assertion: "If (Evaluate Statement).type is \"continue\" and (Evaluate Statement).target is in the current label set, iteration of labeled loop breaks",

description: "Simple test of continue loop with using \"continue\"",

test: function testcase() {
   __str=""

for(index=0; index<10; index+=1) {
	if (index<5)continue;
	__str+=index;
}

if (__str!=="56789") {
	$ERROR('#1: __str === "56789". Actual:  __str ==='+ __str  );
}

 }
});

