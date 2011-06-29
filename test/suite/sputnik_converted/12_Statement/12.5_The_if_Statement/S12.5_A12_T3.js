// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A12_T3;
* @section: 12.5;
* @assertion: Embedded "if/else" constructions are allowed;
* @description: Using embedded "if/else" into "if" without "else" constructions;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A12_T3",

path: "TestCases/12_Statement/12.5_The_if_Statement/S12.5_A12_T3.js",

assertion: "Embedded \"if/else\" constructions are allowed",

description: "Using embedded \"if/else\" into \"if\" without \"else\" constructions",

test: function testcase() {
   //CHECK# 1
if(true)
  if (false)
    $ERROR('#1.1: At embedded "if/else" constructions engine must select right branches');
  else
    ;

//CHECK# 2
if(true)
  if (true)
    ;
  else
    $ERROR('#2.1: At embedded "if/else" constructions engine must select right branches');

//CHECK# 3
if(false)
  if (true)
    $ERROR('#3.1: At embedded "if/else" constructions engine must select right branches');
  else
    $ERROR('#3.2: At embedded "if/else" constructions engine must select right branches');

//CHECK# 4
if(false)
  if (true)
    $ERROR('#4.1: At embedded "if/else" constructions engine must select right branches');
  else
    $ERROR('#4.2: At embedded "if/else" constructions engine must select right branches');

 }
});

