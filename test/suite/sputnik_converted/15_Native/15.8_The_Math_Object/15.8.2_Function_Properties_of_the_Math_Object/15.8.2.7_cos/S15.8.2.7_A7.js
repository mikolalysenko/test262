// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.7_A7;
 * @section: 15.8.2.7;
 * @assertion: Math.cos it is recommended that implementations use the approximation algorithms for IEEE 754 arithmetic contained in fdlibm;
 * @description: Checking if Math.cos is approximately equals to its mathematical values on the set of 64 argument values; all the sample values is calculated with LibC;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.7_A7",

path: "TestCases/15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.7_cos/S15.8.2.7_A7.js",

assertion: "Math.cos it is recommended that implementations use the approximation algorithms for IEEE 754 arithmetic contained in fdlibm",

description: "Checking if Math.cos is approximately equals to its mathematical values on the set of 64 argument values; all the sample values is calculated with LibC",

test: function testcase() {
   $INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js");

// CHECK#1
vnum = 64;
var x = new Array();
x[0] = -3.14159265358979310000;
x[1] = -3.04185955347583150000;
x[2] = -2.94212645336186980000;
x[3] = -2.84239335324790820000;
x[4] = -2.74266025313394660000;
x[5] = -2.64292715301998450000;
x[6] = -2.54319405290602290000;
x[7] = -2.44346095279206120000;
x[8] = -2.34372785267809960000;
x[9] = -2.24399475256413790000;
x[10] = -2.14426165245017630000;
x[11] = -2.04452855233621470000;
x[12] = -1.94479545222225280000;
x[13] = -1.84506235210829120000;
x[14] = -1.74532925199432950000;
x[15] = -1.64559615188036790000;
x[16] = -1.54586305176640600000;
x[17] = -1.44612995165244440000;
x[18] = -1.34639685153848280000;
x[19] = -1.24666375142452110000;
x[20] = -1.14693065131055950000;
x[21] = -1.04719755119659740000;
x[22] = -0.94746445108263622000;
x[23] = -0.84773135096867458000;
x[24] = -0.74799825085471250000;
x[25] = -0.64826515074075086000;
x[26] = -0.54853205062678922000;
x[27] = -0.44879895051282759000;
x[28] = -0.34906585039886595000;
x[29] = -0.24933275028490431000;
x[30] = -0.14959965017094268000;
x[31] = -0.04986655005698104000;
x[32] = 0.04986655005698104000;
x[33] = 0.14959965017094268000;
x[34] = 0.24933275028490431000;
x[35] = 0.34906585039886595000;
x[36] = 0.44879895051282759000;
x[37] = 0.54853205062678922000;
x[38] = 0.64826515074075086000;
x[39] = 0.74799825085471250000;
x[40] = 0.84773135096867414000;
x[41] = 0.94746445108263533000;
x[42] = 1.04719755119659830000;
x[43] = 1.14693065131055950000;
x[44] = 1.24666375142452070000;
x[45] = 1.34639685153848280000;
x[46] = 1.44612995165244400000;
x[47] = 1.54586305176640600000;
x[48] = 1.64559615188036810000;
x[49] = 1.74532925199432930000;
x[50] = 1.84506235210829140000;
x[51] = 1.94479545222225260000;
x[52] = 2.04452855233621470000;
x[53] = 2.14426165245017670000;
x[54] = 2.24399475256413790000;
x[55] = 2.34372785267810000000;
x[56] = 2.44346095279206120000;
x[57] = 2.54319405290602240000;
x[58] = 2.64292715301998450000;
x[59] = 2.74266025313394660000;
x[60] = 2.84239335324790780000;
x[61] = 2.94212645336186980000;
x[62] = 3.04185955347583100000;
x[63] = 3.14159265358979310000;


var y = new Array();
y[0] = -1.00000000000000000000;
y[1] = -0.99503077536540141000;
y[2] = -0.98017248784854383000;
y[3] = -0.95557280578614079000;
y[4] = -0.92147621187040774000;
y[5] = -0.87822157337022844000;
y[6] = -0.82623877431599468000;
y[7] = -0.76604444311897790000;
y[8] = -0.69823681808607274000;
y[9] = -0.62348980185873348000;
y[10] = -0.54254626386575933000;
y[11] = -0.45621065735316296000;
y[12] = -0.36534102436639487000;
y[13] = -0.27084046814300500000;
y[14] = -0.17364817766693030000;
y[15] = -0.07473009358642426800;
y[16] = 0.02493069173807303500;
y[17] = 0.12434370464748527000;
y[18] = 0.22252093395631445000;
y[19] = 0.31848665025168443000;
y[20] = 0.41128710313061151000;
y[21] = 0.50000000000000033000;
y[22] = 0.58374367223478973000;
y[23] = 0.66168583759685928000;
y[24] = 0.73305187182982645000;
y[25] = 0.79713250722292250000;
y[26] = 0.85329088163215572000;
y[27] = 0.90096886790241915000;
y[28] = 0.93969262078590832000;
y[29] = 0.96907728622907796000;
y[30] = 0.98883082622512852000;
y[31] = 0.99875692121892234000;
y[32] = 0.99875692121892234000;
y[33] = 0.98883082622512852000;
y[34] = 0.96907728622907796000;
y[35] = 0.93969262078590832000;
y[36] = 0.90096886790241915000;
y[37] = 0.85329088163215572000;
y[38] = 0.79713250722292250000;
y[39] = 0.73305187182982645000;
y[40] = 0.66168583759685962000;
y[41] = 0.58374367223479051000;
y[42] = 0.49999999999999950000;
y[43] = 0.41128710313061151000;
y[44] = 0.31848665025168482000;
y[45] = 0.22252093395631445000;
y[46] = 0.12434370464748572000;
y[47] = 0.02493069173807303500;
y[48] = -0.07473009358642449000;
y[49] = -0.17364817766693008000;
y[50] = -0.27084046814300522000;
y[51] = -0.36534102436639465000;
y[52] = -0.45621065735316296000;
y[53] = -0.54254626386575977000;
y[54] = -0.62348980185873348000;
y[55] = -0.69823681808607307000;
y[56] = -0.76604444311897790000;
y[57] = -0.82623877431599446000;
y[58] = -0.87822157337022844000;
y[59] = -0.92147621187040774000;
y[60] = -0.95557280578614057000;
y[61] = -0.98017248784854383000;
y[62] = -0.99503077536540141000;
y[63] = -1.00000000000000000000;


var val;
for (i = 0; i < vnum; i++)
{
	val = Math.cos(x[i]);
	if (!isEqual(val, y[i]))
	{
		$ERROR("\nx = " + x[i] + "\nlibc.cos(x) = " + y[i] + "\nMath.cos(x) = " + Math.cos(x[i]) + "\nMath.abs(libc.cos(x) - Math.cos(x)) > " + prec + "\n\n"); 
	}
}

 }
});

