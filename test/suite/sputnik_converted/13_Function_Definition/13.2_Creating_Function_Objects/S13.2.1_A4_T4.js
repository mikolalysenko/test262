// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.1_A4_T4;
* @section: 13.2.1;
* @assertion: Objects as arguments are passed by reference;
* @description: Adding new number property to a function argument within the function body, 
* where array element "arguments[0]" is an object defined with "var __obj={}";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.1_A4_T4",

path: "TestCases/13_Function_Definition/13.2_Creating_Function_Objects/S13.2.1_A4_T4.js",

assertion: "Objects as arguments are passed by reference",

description: "Adding new number property to a function argument within the function body,",

test: function testcase() {
   function __func(){
    arguments[0]["E"]=2.74;
}

var __obj={};

__func(__obj);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__obj.E !== 2.74) {
	$ERROR('#1: __obj.E === 2.74. Actual: __obj.E ==='+__obj.E);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

