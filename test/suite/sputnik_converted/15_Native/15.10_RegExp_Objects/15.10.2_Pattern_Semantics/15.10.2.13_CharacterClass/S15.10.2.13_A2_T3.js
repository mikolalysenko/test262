// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.13_A2_T3;
* @section: 15.10.2.13;
* @assertion: The production CharacterClass :: [ ^ ClassRanges ] evaluates by evaluating ClassRanges to  obtain a CharSet and returning that CharSet and the boolean true;
* @description: Execute /a[^b-z]\s+/.exec("ab an az aY n") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.13_A2_T3",

path: "TestCases/15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.13_CharacterClass/S15.10.2.13_A2_T3.js",

assertion: "The production CharacterClass :: [ ^ ClassRanges ] evaluates by evaluating ClassRanges to  obtain a CharSet and returning that CharSet and the boolean true",

description: "Execute /a[^b-z]\\s+/.exec(\"ab an az aY n\") and check results",

test: function testcase() {
   __executed = /a[^b-z]\s+/.exec("ab an az aY n");

__expected = ["aY "];
__expected.index = 9;
__expected.input = "ab an az aY n";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /a[^b-z]\\s+/.exec("ab an az aY n"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /a[^b-z]\\s+/.exec("ab an az aY n"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /a[^b-z]\\s+/.exec("ab an az aY n"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /a[^b-z]\\s+/.exec("ab an az aY n"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

