// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * First expression is evaluated first, and then second expression
 *
 * @path 11_Expressions/11.8_Relational_Operators/11.8.6_The_instanceof_operator/S11.8.6_A2.4_T2.js
 * @description Checking with "throw"
 */

//CHECK#1
var x = function () { throw "x"; };
var y = function () { throw "y"; };
try {
   x() instanceof y();
   $ERROR('#1.1: var x = function () { throw "x"; }; var y = function () { throw "y"; }; x() instanceof y() throw "x". Actual: ' + (x() instanceof y()));
} catch (e) {
   if (e === "y") {
     $ERROR('#1.2: First expression is evaluated first, and then second expression');
   } else {
     if (e !== "x") {
       $ERROR('#1.3: var x = function () { throw "x"; }; var y = function () { throw "y"; }; x() instanceof y() throw "x". Actual: ' + (e));
     }
   }
}

