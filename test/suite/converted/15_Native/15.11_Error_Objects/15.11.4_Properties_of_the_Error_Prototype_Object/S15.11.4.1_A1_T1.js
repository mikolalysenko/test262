// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The initial value of Error.prototype.constructor is the built-in Error constructor
 *
 * @section 15.11.4.1, 16
 * @path 15_Native/15.11_Error_Objects/15.11.4_Properties_of_the_Error_Prototype_Object/S15.11.4.1_A1_T1.js
 * @description Checking Error.prototype.constructor
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (Error.prototype.constructor !== Error) {
	$ERROR('#1: Error.prototype.constructor === Error. Actual: '+Error.prototype.constructor );
}
//
//////////////////////////////////////////////////////////////////////////////

