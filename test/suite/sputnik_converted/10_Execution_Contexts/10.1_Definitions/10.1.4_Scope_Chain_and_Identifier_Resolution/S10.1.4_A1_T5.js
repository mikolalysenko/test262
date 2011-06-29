// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.4_A1_T5;
 * @section: 10.1.4;
 * @assertion: Every execution context has associated with it a scope chain. 
 * A scope chain is a list of objects that are searched when evaluating an 
 * Identifier;
 * @description: Checking scope chain containing function declarations and "with";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.4_A1_T5",

path: "TestCases/10_Execution_Contexts/10.1_Definitions/10.1.4_Scope_Chain_and_Identifier_Resolution/S10.1.4_A1_T5.js",

assertion: "Every execution context has associated with it a scope chain.",

description: "Checking scope chain containing function declarations and \"with\"",

test: function testcase() {
   var x = 0;

var myObj = {x : "obj"};

function f1(){
  var x = 1;
  function f2(){
    with(myObj){
      return x;
    }
  };
  return f2();
}

if(!(f1() === "obj")){
  $ERROR("#1: Scope chain disturbed");
}

 }
});

