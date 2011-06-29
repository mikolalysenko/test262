// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_A9;
* @section: 13.2.2;
* @assertion: Calling a function as a constructor is inadmissible as long as this.any_Function is called before it is declared; 
* @description: Calling a function as a constructor
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.2_A9",

path: "TestCases/13_Function_Definition/13.2_Creating_Function_Objects/S13.2.2_A9.js",

assertion: "Calling a function as a constructor is inadmissible as long as this.any_Function is called before it is declared",

description: "Calling a function as a constructor",

test: function testcase() {
   function FACTORY(){
   this.id = 0;
   
   this.id = this.func();
   
   this.func = function (){
      return 5;
   }
  
}
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	var obj = new FACTORY();
	$ERROR('#1: var obj = new FACTORY() lead to throwing exception');
} catch (e) {}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

