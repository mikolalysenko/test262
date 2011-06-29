// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.4_A14_T1;
* @section: 12.6.4;
* @assertion: FunctionExpession within a "for-in" Expression is allowed;
* @description: Using "function __func(){return 0;}" as Expession;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.4_A14_T1",

path: "TestCases/12_Statement/12.6_Iteration_Statements/12.6.4_The_for_in_Statement/S12.6.4_A14_T1.js",

assertion: "FunctionExpession within a \"for-in\" Expression is allowed",

description: "Using \"function __func(){return 0;}\" as Expession",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#
for(x in function __func(){return 0;}){
    if (x=="prototype") 
        var __reached = 1;
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__reached !== 1) {
	$ERROR('#2: function expession inside of for-in expression is allowed');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

