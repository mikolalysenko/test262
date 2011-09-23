// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production IterationStatement: "for (var VariableDeclarationNoIn in Expression) Statement"
 *
 * @path 12_Statement/12.6_Iteration_Statements/12.6.4_The_for_in_Statement/S12.6.4_A3.1.js
 * @description Using an array as an Expression is appropriate. Here Expression is an array of numbers
 */

__str="";

__evaluated = eval("for(var ind in (arr=[2,1,4,3]))__str+=arr[ind]");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__evaluated !== __str) {
	$ERROR('#1: __evaluated === __str. Actual:  __evaluated ==='+ __evaluated  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!( (__str.indexOf("2")!==-1)&&(__str.indexOf("1")!==-1)&&(__str.indexOf("4")!==-1)&&(__str.indexOf("3")!==-1) )) {
	$ERROR('#2: (__str.indexOf("2")!==-1)&&(__str.indexOf("1")!==-1)&&(__str.indexOf("4")!==-1)&&(__str.indexOf("3")!==-1)');
}
//
//////////////////////////////////////////////////////////////////////////////




