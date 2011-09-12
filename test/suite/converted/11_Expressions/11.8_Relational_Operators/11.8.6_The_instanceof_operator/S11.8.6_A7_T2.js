// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When "instanceof" returns true it means that GetValue(RelationalExpression) is constructed with ShiftExpression
 *
 * @section 11.8.6
 * @path 11_Expressions/11.8_Relational_Operators/11.8.6_The_instanceof_operator/S11.8.6_A7_T2.js
 * @description Checking Array object
 */

var __arr=[];

//CHECK#1
if (!(__arr instanceof Array)) {
	$ERROR('#1: If instanceof returns true then GetValue(RelationalExpression) was constructed with ShiftExpression');
}

//CHECK#2
if (__arr.constructor !== Array) {
	$ERROR('#2: If instanceof returns true then GetValue(RelationalExpression) was constructed with ShiftExpression');
}

