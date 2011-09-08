// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Result(3).type is normal and its completion value is a value V,
 * then return the value V
 *
 * @section: 15.1.2.1, 12.4;
 * @path: 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.1_eval/S15.1.2.1_A3.1_T1.js;
 * @description: Expression statement. Eval return primitive value;
 */

var x;
//CHECK#1
if (eval("x = 1") !== 1) {
  $ERROR('#1: eval("x = 1") === 1. Actual: ' + (eval("x = 1")));
}

//CHECK#2
if (eval("1") !== 1) {
  $ERROR('#2: eval("1") === 1. Actual: ' + (eval("1")));
}

//CHECK#3
if (eval("'1'") !== '1') {
  $ERROR('#3: eval("\'1\'") === \'1\'. Actual: ' + (eval("'1'")));
}

//CHECK#4
x = 1;
if (eval("++x") !== 2) {
  $ERROR('#4: x = 1; eval("++x") === 2. Actual: ' + (x));
}        

