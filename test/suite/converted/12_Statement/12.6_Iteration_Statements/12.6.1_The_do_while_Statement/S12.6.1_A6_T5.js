// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Expression in "do-while" IterationStatement is bracketed with braces
 *
 * @section: 12.6.1;
 * @path: 12_Statement/12.6_Iteration_Statements/12.6.1_The_do_while_Statement/S12.6.1_A6_T5.js;
 * @description: Checking if execution of "do{}while ''" fails;
 * @negative;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
do break; while '';
//
//////////////////////////////////////////////////////////////////////////////

