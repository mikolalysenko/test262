// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The | regular expression operator separates two alternatives.
 * The pattern first tries to match the left Alternative (followed by the sequel of the regular expression).
 * If it fails, it tries to match the right Disjunction (followed by the sequel of the regular expression)
 *
 * @section: 15.10.2.3;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.3_Disjunction/S15.10.2.3_A1_T5.js;
 * @description: Execute /\d{3}|[a-z]{4}/.test("2, 12 and 23 AND 0.00.1") and check results;
 */

__executed = /\d{3}|[a-z]{4}/.test("2, 12 and 23 AND 0.00.1");

//CHECK#1
if (__executed) {
	$ERROR('#1: /\\d{3}|[a-z]{4}/.test("2, 12 and 23 AND 0.00.1") === false');
}


