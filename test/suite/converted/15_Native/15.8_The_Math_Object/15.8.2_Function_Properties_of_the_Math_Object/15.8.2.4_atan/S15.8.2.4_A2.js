// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is +0, Math.atan(x) is +0
 *
 * @section 15.8.2.4
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.4_atan/S15.8.2.4_A2.js
 * @description Checking if Math.atan(+0) equals to +0
 */

// CHECK#1
var x = +0;
if (Math.atan(x) !== +0)
{
	$ERROR("#1: 'var x = +0; Math.atan(x) !== +0'");
}

