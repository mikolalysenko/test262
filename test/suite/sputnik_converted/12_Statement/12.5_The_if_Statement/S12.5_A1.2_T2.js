// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A1.2_T2;
* @section: 12.5;
* @assertion: 1, true, non-empty string and others in expression is evaluated to true when using operator "new";
* @description: Using "if/else" construction;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A1.2_T2",

path: "TestCases/12_Statement/12.5_The_if_Statement/S12.5_A1.2_T2.js",

assertion: "1, true, non-empty string and others in expression is evaluated to true when using operator \"new\"",

description: "Using \"if/else\" construction",

test: function testcase() {
   var c=0;
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(!(new Number(1)))
	$ERROR('#1.1: new 1 in expression is evaluated to true');
else
  c++;
if (c!=1) $ERROR('#1.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(!(new Boolean(true)))
	$ERROR('#2.1: new true in expression is evaluated to true');
else
  c++;
if (c!=2) $ERROR('#2.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(!(new String("1")))
	$ERROR('#3.1: new "1" in expression is evaluated to true');
else
  c++;
if (c!=3) $ERROR('#3.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(!(new String("A")))
	$ERROR('#4.1: new "A" in expression is evaluated to true');
else
  c++;
if (c!=4) $ERROR('#4.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if(!(new Boolean(false)))
    $ERROR('#5.1: new false in expression is evaluated to true ');
else
  c++;
if (c!=5) $ERROR('#5.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#6
if(!(new Number(NaN)))
    $ERROR('#6.1: new NaN in expression is evaluated to true ');
else
  c++;
if (c!=6) $ERROR('#6.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#7
if(!(new Number(null)))
  $ERROR('#7.1: new null in expression is evaluated to true ');
else
  c++;
if (c!=7) $ERROR('#7.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#8
if(!(new String(undefined)))
  $ERROR('#8.1: new undefined in expression is evaluated to true ');
else
  c++;
if (c!=8) $ERROR('#8.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#9
if(!(new String("")))
    $ERROR('#9.1: new empty string in expression is evaluated to true ');
else
  c++;
if (c!=9) $ERROR('#9.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

 }
});

