// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.1_A10;
* @section: 12.6.1, 13;
* @assertion: FunctionExpression within a "do-while" statement is allowed, but no function with the given name will appear in the global context;
* @description: Also this a test on FunctionExpression;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.1_A10",

path: "TestCases/12_Statement/12.6_Iteration_Statements/12.6.1_The_do_while_Statement/S12.6.1_A10.js",

assertion: "FunctionExpression within a \"do-while\" statement is allowed, but no function with the given name will appear in the global context",

description: "Also this a test on FunctionExpression",

test: function testcase() {
   var check = 0;
do {    
  if(typeof(f) === "function"){
    check = -1;        
    break; 
  } else {
    check = 1;        
    break; 
  }
} while(function f(){});

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (check !== 1) {
	$ERROR('#1: FunctionExpression within a "do-while" statement is allowed, but no function with the given name will appear in the global context');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

