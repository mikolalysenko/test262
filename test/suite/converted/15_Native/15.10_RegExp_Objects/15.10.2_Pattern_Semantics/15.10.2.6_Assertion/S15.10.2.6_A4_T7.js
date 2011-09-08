// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production Assertion :: \B evaluates by returning an internal AssertionTester closure that takes a State argument x and performs the ...
 *
 * @section: 15.10.2.6;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.6_Assertion/S15.10.2.6_A4_T7.js;
 * @description: Execute /\B\[^z]{4}\B/.test("devil arise\tforzzx\nevils") and check results;
 */

__executed = /\B\[^z]{4}\B/.test("devil arise\tforzzx\nevils");

//CHECK#1
if (__executed) {
	$ERROR('#1: /\\B\\[^z]{4}\\B/.test("devil arise\\tforzzx\\nevils") === false');
}


