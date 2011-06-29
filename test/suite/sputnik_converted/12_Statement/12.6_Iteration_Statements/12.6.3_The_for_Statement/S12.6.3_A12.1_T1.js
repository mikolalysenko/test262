// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.3_A12.1_T1;
* @section: 12.6.3;
* @assertion: If (Evaluate Statement).type is "break" and (Evaluate Statement).target is in the current label set, (normal, (Evaluate Statement), empty) is returned while evaluating a "var-loop";
* @description: Breaking a loop with "break";
*/

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.3_A12.1_T1",

path: "TestCases/12_Statement/12.6_Iteration_Statements/12.6.3_The_for_Statement/S12.6.3_A12.1_T1.js",

assertion: "If (Evaluate Statement).type is \"break\" and (Evaluate Statement).target is in the current label set, (normal, (Evaluate Statement), empty) is returned while evaluating a \"var-loop\"",

description: "Breaking a loop with \"break\"",

test: function testcase() {
   __str=""

for(var index=0; index<10; index+=1) {
	if (index>5)break;
	__str+=index;
}

if (__str!=="012345") {
	$ERROR('#1: __str === "012345". Actual:  __str ==='+ __str  );
}

 }
});

