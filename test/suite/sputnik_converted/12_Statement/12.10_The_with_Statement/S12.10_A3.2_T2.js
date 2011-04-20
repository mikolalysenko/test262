// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.10_A3.2_T2;
 * @section: 12.10;
 * @assertion: No matter how control leaves the embedded 'Statement', 
 * the scope chain is always restored to its former state;
 * @description: Declaring "with" statement within a function body, leading to normal completion by "return";
 * @strict_mode_negative
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.10_A3.2_T2",

path: "12_Statement\12.10_The_with_Statement\S12.10_A3.2_T2.js",

assertion: "No matter how control leaves the embedded \'Statement\',",

description: "Declaring \"with\" statement within a function body, leading to normal completion by \"return\"",

test: function testcase() {
   this.p1 = 1;

var result = "result";

var myObj = {
    p1: 'a', 
    value: 'myObj_value',
    valueOf : function(){return 'obj_valueOf';}
}

var f = function(){
    with(myObj){
        p1 = 'x1';
        return value;
    }
};

f();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(p1 !== 1){
    $ERROR('#1: p1 === 1. Actual:  p1 ==='+ p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(myObj.p1 !== "x1"){
    $ERROR('#1: myObj.p1 === "x1". Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////



 }
});

