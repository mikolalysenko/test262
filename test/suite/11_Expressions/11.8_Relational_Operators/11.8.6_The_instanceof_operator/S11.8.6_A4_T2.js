// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Only constructor call (with "new" keyword) makes instance
 *
 * @path 11_Expressions/11.8_Relational_Operators/11.8.6_The_instanceof_operator/S11.8.6_A4_T2.js
 * @description Checking Number case
 */

//CHECK#1
if (0 instanceof Number) {
	$ERROR('#1: 0 is not instanceof Number');
}

//CHECK#2
if (Number(0) instanceof Number) {
	$ERROR('#2: Number(0) is not instanceof Number');
}

//CHECK#3
if (new Number instanceof Number !== true) {
	$ERROR('#3: new Number instanceof Number');
}


