// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.7_A2_T2;
* @section: 15.2.4.7;
* @assertion: When the propertyIsEnumerable method is called with argument V, the following steps are taken:
* i) Let O be this object
* ii) Call ToString(V)
* iii) If O doesn't have a property with the name given by Result(ii), return false
* iv) If the property has the DontEnum attribute, return false
* v) Return true;
* @description: Argument of the propertyIsEnumerable method is a custom boolean property;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.7_A2_T2",

path: "TestCases/15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/15.2.4.7_Object.prototype.propertyIsEnumerable/S15.2.4.7_A2_T2.js",

assertion: "When the propertyIsEnumerable method is called with argument V, the following steps are taken:",

description: "Argument of the propertyIsEnumerable method is a custom boolean property",

test: function testcase() {
   //CHECK#1
if (typeof Object.prototype.propertyIsEnumerable !== "function") {
  $ERROR('#1: propertyIsEnumerable method is defined');
}

var obj = {the_property:true};

//CHECK#2
if (typeof obj.propertyIsEnumerable !== "function") {
  $ERROR('#2: propertyIsEnumerable method is accessed');
}

//CHECK#3
if (!(obj.propertyIsEnumerable("the_property"))) {
  $ERROR('#3: propertyIsEnumerable method works properly');
}

//CHECK#4
var accum="";
for(var prop in obj) {
  accum+=prop;
}
if (accum.indexOf("the_property")!==0) {
  $ERROR('#4: enumerating works properly');
}
//

 }
});

