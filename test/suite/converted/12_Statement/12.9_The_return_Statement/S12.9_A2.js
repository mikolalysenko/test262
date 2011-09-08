// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * LineTerminator between return and Identifier_opt yields return without Identifier_opt
 *
 * @section: 12.9;
 * @path: 12_Statement/12.9_The_return_Statement/S12.9_A2.js;
 * @description: Checking by using eval, inserting LineTerminator between return and Variable;
 */

//CHECK#1
try{
  if (eval("(function(){var x = 1;return\u000Ax;var y=2;})()") !== undefined) {
    $ERROR("#1: LineTerminator(U-000A) between return and Identifier_opt yields return without Identifier_opt");	  
  }
} catch(e){
  $ERROR('#1: eval("(function(){var x = 1;return\\u000Ax;var y=2;})()") does not lead to throwing exception');
}




//CHECK#2
try{
  if (eval("(function(){var x = 1;return\u000Dx;var y=2;})()") !== undefined) {
    $ERROR("#1: LineTerminator(U-000D) between return and Identifier_opt yields return without Identifier_opt");    
  }
} catch(e){
  $ERROR('#2: eval("(function(){var x = 1;return\\u000Dx;var y=2;})()") does not lead to throwing exception');
}




//CHECK#3
try{
  if (eval("(function(){var x = 1;return\u2028x;var y=2;})()") !== undefined) {
    $ERROR("#1: LineTerminator(U-2028) between return and Identifier_opt yields return without Identifier_opt");    
  }
} catch(e){
  $ERROR('#3: eval("(function(){var x = 1;return\\u2028x;var y=2;})()") does not lead to throwing exception');
}




//CHECK#4
try{
  if (eval("(function(){var x =1;return\u2029x;var y=2;})()") !== undefined) {
    $ERROR("#1: LineTerminator(U-2029) between return and Identifier_opt yields return without Identifier_opt");    
  }
} catch(e){
  $ERROR('#4: eval("(function(){var x =1;return\\u2029x;var y=2;})()") does not lead to throwing exception');
}

