// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If argArray is either an array or an arguments object,
 * the function is passed the (ToUint32(argArray.length)) arguments argArray[0], argArray[1],...,argArray[ToUint32(argArray.length)-1]
 *
 * @path 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.3_Function.prototype.apply/S15.3.4.3_A7_T7.js
 * @description argArray is (null, arguments), inside function call without declaration used
 */

(function (){
  Function("a1,a2,a3","this.shifted=a1+a2+a3;").apply(null,arguments);
})("",1,2);

//CHECK#1
if (this["shifted"] !== "12") {
  $ERROR('#1: If argArray is either an array or an arguments object, the function is passed the...');
}

