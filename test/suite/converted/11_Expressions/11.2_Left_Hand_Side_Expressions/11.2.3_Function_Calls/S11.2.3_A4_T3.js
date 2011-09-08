// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If MemberExpression does not implement the internal [[Call]] method, throw TypeError
 *
 * @section: 11.2.3;
 * @path: 11_Expressions/11.2_Left_Hand_Side_Expressions/11.2.3_Function_Calls/S11.2.3_A4_T3.js;
 * @description: Checking String object case;
 */

//CHECK#1
try {
  new String("1")();
  $ERROR('#1.1: new String("1")() throw TypeError. Actual: ' + (new String("1")()));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new String("1")() throw TypeError. Actual: ' + (e));	
  }
}

//CHECK#2
try {
  var x = new String("1");
  x();
  $ERROR('#2.1: var x = new String("1"); x() throw TypeError. Actual: ' + (x()));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#2.2: var x = new String("1"); x() throw TypeError. Actual: ' + (e));	
  }
}

