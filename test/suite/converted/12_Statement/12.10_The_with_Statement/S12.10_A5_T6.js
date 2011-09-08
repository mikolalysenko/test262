// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Deleting property using "eval" statement containing "with" statement
 *
 * @section: 12.10;
 * @path: 12_Statement/12.10_The_with_Statement/S12.10_A5_T6.js;
 * @description: Deleting function property;
 * @strict_only;
 * @strict_mode_negative;
 */

this.p1 = 'a';
var myObj = {
  p1: function(){return 0;}, 
  del:false
}
eval("with(myObj){del = delete p1}");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try{
if(myObj.p1() === 0){
  $ERROR('#1: myObj.p1() !== 0 ');
}
}catch(e){var x=1};
if(x !== 1){
  $ERROR('#1: x === 1. Actual:  x ==='+ x  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1 !== undefined){
  $ERROR('#2: myObj.p1 === undefined . Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(myObj.del !== true){
  $ERROR('#3: myObj.del === true . Actual:  myObj.del ==='+ myObj.del  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(myObj.p1 === 'a'){
  $ERROR('#4: myObj.p1 !== \'a\'');
}
//
//////////////////////////////////////////////////////////////////////////////

