// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * let P be ToString(pattern) and let F be ToString(flags)
 *
 * @section 15.10.4.1
 * @path 15_Native/15.10_RegExp_Objects/15.10.4_The_RegExp_Constructor/S15.10.4.1_A8_T6.js
 * @description Pattern is {toString:function(){throw "intostr";} } and flags is "i"
 */

//CHECK#1
try {
	$ERROR('#1.1: new RegExp({toString:function(){throw "intostr";}}, "i") throw "intostr". Actual: ' + (new RegExp({toString:function(){throw "intostr";}}, "i")));
} catch (e) {
	if (e !== "intostr" ) {
		$ERROR('#1.2: new RegExp({toString:function(){throw "intostr";}}, "i") throw "intostr". Actual: ' + (e));
	}
}


