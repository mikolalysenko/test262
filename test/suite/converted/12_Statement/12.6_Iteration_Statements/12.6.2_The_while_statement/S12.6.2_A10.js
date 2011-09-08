// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * FunctionExpression within a "while" IterationStatement is allowed, but no function with the given name will appear in the global context
 *
 * @section: 12.6.2, 13.2;
 * @path: 12_Statement/12.6_Iteration_Statements/12.6.2_The_while_statement/S12.6.2_A10.js;
 * @description: Testing FunctionExpression too;
 */

var check=0;
while(function f(){}){    
  if(typeof(f) === "function") {
    check = -1;
    break; 
  } else {
    check = 1;
    break; 
  }
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (check !== 1) {
	$ERROR('#1: FunctionExpression inside while construction expression allowed but function not declare');
}
//
//////////////////////////////////////////////////////////////////////////////

