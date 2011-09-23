// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production QuantifierPrefix :: { DecimalDigits , }evaluates as follows:
 * i) Let i be the MV of DecimalDigits
 * ii) Return the two results i and \infty
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.7_Quantifier/S15.10.2.7_A6_T5.js
 * @description Execute /(123){1,}x\1/.exec("123123x123") and check results
 */

__executed = /(123){1,}x\1/.exec("123123x123");

__expected = ["123123x123","123"];
__expected.index = 0;
__expected.input = "123123x123";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /(123){1,}x\\1/.exec("123123x123"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /(123){1,}x\\1/.exec("123123x123"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /(123){1,}x\\1\\/.exec("123123x123"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /(123){1,}x\\1/.exec("123123x123"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


