// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property value is 1
 *
 * @section: 15.11.3, 16;
 * @path: 15_Native/15.11_Error_Objects/15.11.3_Properties_of_the_Error_Constructor/S15.11.3_A2_T1.js;
 * @description: Checking length property;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var err1=Error("err");
if(err1.constructor.length!==1){
  $ERROR('#1: var err1=Error("err"); err1.constructor.length===1. Actual: '+err1.constructor.length);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(Error.constructor.length!==1){
  $ERROR('#2: Error.constructor.length===1. Actual: '+Error.constructor.length);
}
//
//////////////////////////////////////////////////////////////////////////////

