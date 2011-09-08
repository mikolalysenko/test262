// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Result(3).type is normal and its completion value is empty,
 * then return the value undefined
 *
 * @section: 15.1.2.1, 12.6.1;
 * @path: 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.1_eval/S15.1.2.1_A3.2_T6.js;
 * @description: do-while statement;
 */

//CHECK#1
if (eval("do ; while(false)") !== undefined) {
  $ERROR('#1: eval("do ; while(false)") === undefined. Actual: ' + (eval("do ; while(false)")));
}    

