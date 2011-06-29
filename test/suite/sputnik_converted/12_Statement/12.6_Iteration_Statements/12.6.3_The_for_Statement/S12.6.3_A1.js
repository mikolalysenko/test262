// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.3_A1;
* @section: 12.6.3;
* @assertion: The "for {;;}" for Statement with empty expressions is allowed and leads to performing an infinite loop;
* @description: Breaking an infinite loop by throwing exception;
*/

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.3_A1",

path: "TestCases/12_Statement/12.6_Iteration_Statements/12.6.3_The_for_Statement/S12.6.3_A1.js",

assertion: "The \"for {;;}\" for Statement with empty expressions is allowed and leads to performing an infinite loop",

description: "Breaking an infinite loop by throwing exception",

test: function testcase() {
   var __in__for = 0;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	for (;;){
    //__in__for++;
    if(++__in__for>100)throw 1;
}
} catch (e) {
	if (e !== 1) {
		$ERROR('#1: for {;;} is admitted and leads to infinite loop');
	}
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__in__for !== 101) {
	$ERROR('#2: __in__for === 101. Actual:  __in__for ==='+ __in__for  );
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

