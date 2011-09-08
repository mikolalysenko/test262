// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * A "prototype" property is automatically created for every function
 *
 * @section: 13.2;
 * @path: 13_Function_Definition/13.2_Creating_Function_Objects/S13.2_A1_T2.js;
 * @description: Using "var __func = function(){}" as a FunctionDeclaration;
 */

var __func = function(){};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func.prototype === undefined) {
	$ERROR('#1: __func.prototype !== undefined');
}
//
//////////////////////////////////////////////////////////////////////////////

