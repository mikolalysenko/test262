// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.6_A6_T1;
* @section: 15.10.2.6;
* @assertion: Assertions in combination;
* @description: while asterix is non greedy it is run till the end because of dollar assertion; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.6_A6_T1",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.6_Assertion\S15.10.2.6_A6_T1.js",

assertion: "Assertions in combination",

description: "while asterix is non greedy it is run till the end because of dollar assertion",

test: function testcase() {
   __executed = /^.*?$/.exec("Hello World");

__expected = ["Hello World"];
__expected.index = 0;
__expected.input = "Hello World";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /^.*?$/.exec("Hello World"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /^.*?$/.exec("Hello World"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /^.*?$/.exec("Hello World"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /^.*?$/.exec("Hello World"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

