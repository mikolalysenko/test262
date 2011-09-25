// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If pattern is an object R whose [[Class]] property is "RegExp" and flags is defined, then
 * call the RegExp constructor (15.10.4.1), passing it the pattern and flags arguments and return the object constructed by that constructor
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.3_The_RegExp_Constructor_Called_as_a_Function/S15.10.3.1_A2_T2.js
 * @description Checking if using dafined variable "x = 1" as flags leads to throwing the correct exception
 */

var x = 1;

//CHECK#1
try {
	$ERROR('#1.1: var x = 1; RegExp(/[a-b]?/, x) throw TypeError. Actual: ' + (RegExp(/[a-b]?/, x)));
} catch (e) {
	if ((e instanceof TypeError) !== true) {
		$ERROR('#1.2: var x = 1; RegExp(/[a-b]?/, x) throw TypeError. Actual: ' + (e));
	} 
}


