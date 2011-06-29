// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.4_A4;
* @section: 12.6.4;
* @assertion: The production IterationStatement: "for (var VariableDeclarationNoIn in Expression) Statement";
* @description: Using Object as an Expression is appropriate. Eval is used;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.4_A4",

path: "TestCases/12_Statement/12.6_Iteration_Statements/12.6.4_The_for_in_Statement/S12.6.4_A4.js",

assertion: "The production IterationStatement: \"for (var VariableDeclarationNoIn in Expression) Statement\"",

description: "Using Object as an Expression is appropriate. Eval is used",

test: function testcase() {
   __str="";

__evaluated = eval("for(ind in (hash={2:'b',1:'a',4:'d',3:'c'}))__str+=hash[ind]");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ( !( (__evaluated.indexOf("a")!==-1)& (__evaluated.indexOf("b")!==-1)& (__evaluated.indexOf("c")!==-1)&(__evaluated.indexOf("d")!==-1) ) ) {
	$ERROR('#1: (__evaluated.indexOf("a")!==-1)& (__evaluated.indexOf("b")!==-1)& (__evaluated.indexOf("c")!==-1)&(__evaluated.indexOf("d")!==-1)');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== __evaluated) {
	$ERROR('#2: __str === __evaluated. Actual:  __str ==='+ __str  );
}
//
//////////////////////////////////////////////////////////////////////////////





 }
});

