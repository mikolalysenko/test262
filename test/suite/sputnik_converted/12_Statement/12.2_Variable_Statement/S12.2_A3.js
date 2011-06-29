// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.2_A3;
* @section: 12.2;
* @assertion: FunctionDeclaration produces a new scope;
* @description: Using Global scope and Function scope together;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.2_A3",

path: "TestCases/12_Statement/12.2_Variable_Statement/S12.2_A3.js",

assertion: "FunctionDeclaration produces a new scope",

description: "Using Global scope and Function scope together",

test: function testcase() {
   var __var = "OUT";

(function(){
    var __var ="IN";
	(function(){__var = "INNER_SPACE";})();
	(function(){var __var = "INNER_SUN";})();
	//////////////////////////////////////////////////////////////////////////////
	//CHECK#1
    if (__var !== "INNER_SPACE") {
    	$ERROR('#1: __var === "INNER_SPACE". Actual:  __var ==='+ __var  );
    }
	//
	//////////////////////////////////////////////////////////////////////////////
})();

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__var !== "OUT") {
	$ERROR('#2: __var === "OUT". Actual:  __var ==='+ __var  );
}
//
//////////////////////////////////////////////////////////////////////////////


(function(){
    __var ="IN";
	(function(){__var = "INNERED"})();
	(function(){var __var = "INNAGER"})();
	//////////////////////////////////////////////////////////////////////////////
	//CHECK#3
    if (__var!=="INNERED") {
    	$ERROR('#3: __var==="INNERED". Actual:  __var==='+ __var );
    }
	//
	//////////////////////////////////////////////////////////////////////////////
})();

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__var!=="INNERED") {
	$ERROR('#4: __var==="INNERED". Actual:  __var==='+ __var );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

