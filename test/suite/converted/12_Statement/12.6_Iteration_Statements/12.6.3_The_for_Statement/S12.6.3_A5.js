// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "in"-expression wrapped into "eval" statement is allowed as a ExpressionNoIn in "for (ExpressionNoIn; FirstExpression; SecondExpression) Statement" IterationStatement
 *
 * @section: 12.6.3;
 * @path: 12_Statement/12.6_Iteration_Statements/12.6.3_The_for_Statement/S12.6.3_A5.js;
 * @description: Using eval "for(eval("i in arr");1;)";
 */

arr = [1,2,3,4,5];
i = 1;
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	for(eval("i in arr");1;) {break;};	
} catch (e) {	
		$ERROR('#1.1: for(eval("i in arr");1;) {break;}; does not lead to throwing exception');	
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
try {
	for(eval("var i = 1 in arr");1;) {break;};	
} catch (e) {	
		$ERROR('#2.1: for(eval("var i = 1 in arr");1;) {break;}; does not lead to throwing exception');	
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
try {
	for(eval("1 in arr");1;) {break;};
} catch (e) {	
		$ERROR('#3.1: for(eval("1 in arr");1;) {break;}; does not lead to throwing exception');	
}
//
//////////////////////////////////////////////////////////////////////////////

