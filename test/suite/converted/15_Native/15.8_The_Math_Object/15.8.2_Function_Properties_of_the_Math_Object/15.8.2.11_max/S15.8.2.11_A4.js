// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of the Math.max method is 2
 *
 * @section: 15.8.2.11;
 * @path: 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.11_max/S15.8.2.11_A4.js;
 * @description: Checking if Math.max.length property is defined and equals to 2;
 */

// CHECK#1
if (typeof Math.max !== "function") {
	$ERROR('#1: Math.max method is not defined');
}

// CHECK#2
if (typeof Math.max.length === "undefined") {
	$ERROR('#2: length property of Math.max method is undefined');
}

// CHECK#3
if (Math.max.length !== 2) {
	$ERROR('#3: The length property of the Math.max method is not 2');
}

