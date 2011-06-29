// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_A10;
* @section: 13.2.2;
* @assertion: Calling a function as a constructor is possible as long as this.any_Function is declared;
* @description: Calling a function as a constructor after it has been declared;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.2_A10",

path: "TestCases/13_Function_Definition/13.2_Creating_Function_Objects/S13.2.2_A10.js",

assertion: "Calling a function as a constructor is possible as long as this.any_Function is declared",

description: "Calling a function as a constructor after it has been declared",

test: function testcase() {
   function FACTORY(){
   this.id = 0;
   
   this.func = function (){
      return 5;
   }
   
   this.id = this.func();
     
}
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	var obj = new FACTORY();
} catch (e) {
	$ERROR('#1: var obj = new FACTORY() does not lead to throwing exception. Actual: Exception is '+e);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (obj.id !== 5) {
	$ERROR('#2: obj.id === 5. Actual: obj.id ==='+obj.id);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

