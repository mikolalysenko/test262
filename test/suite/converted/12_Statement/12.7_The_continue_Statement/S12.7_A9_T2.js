// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Continue inside of try-catch nested in a loop is allowed
 *
 * @section: 12.7;
 * @path: 12_Statement/12.7_The_continue_Statement/S12.7_A9_T2.js;
 * @description: Using "continue" within catch Block that is within a loop;
 */

var x=0,y=0;

(function(){
FOR : for(;;){
	try{
		x++;
		if(x===10)return;
		throw 1;
	} catch(e){
		continue;
	}	
}
})();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (x!==10) {
	$ERROR('#1: Continue inside of try-catch nested in loop is allowed');
}
//
//////////////////////////////////////////////////////////////////////////////

