// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A11_T2;
* @section: 13;
* @assertion: Since arguments property has attribute { DontDelete }, only its elements can be deleted;
* @description: Checking if deleting the arguments property fails and then returning it;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13_A11_T2",

path: "13",

description: "Checking if deleting the arguments property fails and then returning it",

test: function testcase() {
   function __func(){ 
    delete arguments;
    return arguments;
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __func("A","B",1,2) !== "object") {
	$ERROR('#1: arguments property has attribute { DontDelete }');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

