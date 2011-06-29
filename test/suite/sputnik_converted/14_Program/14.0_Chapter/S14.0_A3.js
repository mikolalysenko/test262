// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S14_A3;
* @section: 14;
* @assertion: Global FunctionDeclaration cannot be defined within the body of another FunctionDeclaration;
* @description: Declaring a function within the body of another function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S14.0_A3",

path: "TestCases/14_Program/14.0_Chapter/S14.0_A3.js",

assertion: "Global FunctionDeclaration cannot be defined within the body of another FunctionDeclaration",

description: "Declaring a function within the body of another function",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __func !== "function") {
	$ERROR('#1: typeof __func === "function". Actual:  typeof __func ==='+ typeof __func  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (typeof __gunc !== "undefined") {
	$ERROR('#2: typeof __gunc === "undefined". Actual:  typeof __gunc ==='+ typeof __gunc  );
}
//
//////////////////////////////////////////////////////////////////////////////

function __func(){
    function __gunc(){return true};
}

 }
});

