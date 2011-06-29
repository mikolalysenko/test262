// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.4_A1.4_T4;
* @section: 11.2.4, 11.2.3, 10.1.8;
* @assertion: Arguments : (ArgumentList : ArgumentList, AssignmentExpression);
* @description: Return an internal list whose length is one greater than the 
* length of ArgumentList and whose items are the items of ArgumentList, in order, 
* followed at the end by GetValue(AssignmentExpression), which is the last item of 
* the new list;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.4_A1.4_T4",

path: "TestCases/11_Expressions/11.2_Left_Hand_Side_Expressions/11.2.4_Argument_Lists/S11.2.4_A1.4_T4.js",

assertion: "Arguments : (ArgumentList : ArgumentList, AssignmentExpression)",

description: "Return an internal list whose length is one greater than the",

test: function testcase() {
   var x = function () { throw "x"; };
var y = function () { throw "y"; };

function f_arg() {
}

//CHECK#1
try {
  f_arg(x(),y());
  $ERROR('#1.1: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; function f_arg() {} f_arg(x(),y()) throw "x". Actual: ' + (f_arg(x(),y())));  
}
catch (e) {
  if (e === "y") {
     $ERROR('#1.2: First argument is evaluated first, and then second argument');
   } else {
     if (e !== "x") {
       $ERROR('#1.3: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; function f_arg() {} f_arg(x(),y()) throw "x". Actual: ' + (e));
     }
   }
}

 }
});

