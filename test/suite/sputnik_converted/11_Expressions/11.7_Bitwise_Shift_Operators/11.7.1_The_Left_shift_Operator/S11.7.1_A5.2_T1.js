// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.7.1_A5.2_T1;
 * @section: 11.7.1, 9.5;
 * @assertion: Operator x << y uses ToUint32(AdditiveExpression) & 31;
 * @description: Checking distinct points;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.7.1_A5.2_T1",

path: "TestCases/11_Expressions/11.7_Bitwise_Shift_Operators/11.7.1_The_Left_shift_Operator/S11.7.1_A5.2_T1.js",

assertion: "Operator x << y uses ToUint32(AdditiveExpression) & 31",

description: "Checking distinct points",

test: function testcase() {
   //CHECK#1
if (1 << -32.1 !== 1) { 
  $ERROR('#1: 1 << -32.1 === 1. Actual: ' + (1 << -32.1)); 
} 

//CHECK#2
if (1 << -31.1 !== 2) { 
  $ERROR('#2: 1 << -31.1 === 2. Actual: ' + (1 << -31.1)); 
} 

//CHECK#3
if (1 << -30.1 !== 4) { 
  $ERROR('#3: 1 << -30.1 === 4. Actual: ' + (1 << -30.1)); 
} 

//CHECK#4
if (1 << -29.1 !== 8) { 
  $ERROR('#4: 1 << -29.1 === 8. Actual: ' + (1 << -29.1)); 
} 

//CHECK#5
if (1 << -28.1 !== 16) { 
  $ERROR('#5: 1 << -28.1 === 16. Actual: ' + (1 << -28.1)); 
} 

//CHECK#6
if (1 << -27.1 !== 32) { 
  $ERROR('#6: 1 << -27.1 === 32. Actual: ' + (1 << -27.1)); 
} 

//CHECK#7
if (1 << -26.1 !== 64) { 
  $ERROR('#7: 1 << -26.1 === 64. Actual: ' + (1 << -26.1)); 
} 

//CHECK#8
if (1 << -25.1 !== 128) { 
  $ERROR('#8: 1 << -25.1 === 128. Actual: ' + (1 << -25.1)); 
} 

//CHECK#9
if (1 << -24.1 !== 256) { 
  $ERROR('#9: 1 << -24.1 === 256. Actual: ' + (1 << -24.1)); 
} 

//CHECK#10
if (1 << -23.1 !== 512) { 
  $ERROR('#10: 1 << -23.1 === 512. Actual: ' + (1 << -23.1)); 
} 

//CHECK#11
if (1 << -22.1 !== 1024) { 
  $ERROR('#11: 1 << -22.1 === 1024. Actual: ' + (1 << -22.1)); 
} 

//CHECK#12
if (1 << -21.1 !== 2048) { 
  $ERROR('#12: 1 << -21.1 === 2048. Actual: ' + (1 << -21.1)); 
} 

//CHECK#13
if (1 << -20.1 !== 4096) { 
  $ERROR('#13: 1 << -20.1 === 4096. Actual: ' + (1 << -20.1)); 
} 

//CHECK#14
if (1 << -19.1 !== 8192) { 
  $ERROR('#14: 1 << -19.1 === 8192. Actual: ' + (1 << -19.1)); 
} 

//CHECK#15
if (1 << -18.1 !== 16384) { 
  $ERROR('#15: 1 << -18.1 === 16384. Actual: ' + (1 << -18.1)); 
} 

//CHECK#16
if (1 << -17.1 !== 32768) { 
  $ERROR('#16: 1 << -17.1 === 32768. Actual: ' + (1 << -17.1)); 
} 

//CHECK#17
if (1 << -16.1 !== 65536) { 
  $ERROR('#17: 1 << -16.1 === 65536. Actual: ' + (1 << -16.1)); 
} 

//CHECK#18
if (1 << -15.1 !== 131072) { 
  $ERROR('#18: 1 << -15.1 === 131072. Actual: ' + (1 << -15.1)); 
} 

//CHECK#19
if (1 << -14.1 !== 262144) { 
  $ERROR('#19: 1 << -14.1 === 262144. Actual: ' + (1 << -14.1)); 
} 

//CHECK#20
if (1 << -13.1 !== 524288) { 
  $ERROR('#20: 1 << -13.1 === 524288. Actual: ' + (1 << -13.1)); 
} 

//CHECK#21
if (1 << -12.1 !== 1048576) { 
  $ERROR('#21: 1 << -12.1 === 1048576. Actual: ' + (1 << -12.1)); 
} 

//CHECK#22
if (1 << -11.1 !== 2097152) { 
  $ERROR('#22: 1 << -11.1 === 2097152. Actual: ' + (1 << -11.1)); 
} 

//CHECK#23
if (1 << -10.1 !== 4194304) { 
  $ERROR('#23: 1 << -10.1 === 4194304. Actual: ' + (1 << -10.1)); 
} 

//CHECK#24
if (1 << -9.1 !== 8388608) { 
  $ERROR('#24: 1 << -9.1 === 8388608. Actual: ' + (1 << -9.1)); 
} 

//CHECK#25
if (1 << -8.1 !== 16777216) { 
  $ERROR('#25: 1 << -8.1 === 16777216. Actual: ' + (1 << -8.1)); 
} 

//CHECK#26
if (1 << -7.1 !== 33554432) { 
  $ERROR('#26: 1 << -7.1 === 33554432. Actual: ' + (1 << -7.1)); 
} 

//CHECK#27
if (1 << -6.1 !== 67108864) { 
  $ERROR('#27: 1 << -6.1 === 67108864. Actual: ' + (1 << -6.1)); 
} 

//CHECK#28
if (1 << -5.1 !== 134217728) { 
  $ERROR('#28: 1 << -5.1 === 134217728. Actual: ' + (1 << -5.1)); 
} 

//CHECK#29
if (1 << -4.1 !== 268435456) { 
  $ERROR('#29: 1 << -4.1 === 268435456. Actual: ' + (1 << -4.1)); 
} 

//CHECK#30
if (1 << -3.1 !== 536870912) { 
  $ERROR('#30: 1 << -3.1 === 536870912. Actual: ' + (1 << -3.1)); 
} 

//CHECK#31
if (1 << -2.1 !== 1073741824) { 
  $ERROR('#31: 1 << -2.1 === 1073741824. Actual: ' + (1 << -2.1)); 
} 

//CHECK#32
if (1 << -1.1 !== -2147483648) { 
  $ERROR('#32: 1 << -1.1 === -2147483648. Actual: ' + (1 << -1.1)); 
} 

//CHECK#33
if (1 << 32.1 !== 1) { 
  $ERROR('#33: 1 << 32.1 === 1. Actual: ' + (1 << 32.1)); 
} 

//CHECK#34
if (1 << 33.1 !== 2) { 
  $ERROR('#34: 1 << 33.1 === 2. Actual: ' + (1 << 33.1)); 
} 

//CHECK#35
if (1 << 34.1 !== 4) { 
  $ERROR('#35: 1 << 34.1 === 4. Actual: ' + (1 << 34.1)); 
} 

//CHECK#36
if (1 << 35.1 !== 8) { 
  $ERROR('#36: 1 << 35.1 === 8. Actual: ' + (1 << 35.1)); 
} 

//CHECK#37
if (1 << 36.1 !== 16) { 
  $ERROR('#37: 1 << 36.1 === 16. Actual: ' + (1 << 36.1)); 
} 

//CHECK#38
if (1 << 37.1 !== 32) { 
  $ERROR('#38: 1 << 37.1 === 32. Actual: ' + (1 << 37.1)); 
} 

//CHECK#39
if (1 << 38.1 !== 64) { 
  $ERROR('#39: 1 << 38.1 === 64. Actual: ' + (1 << 38.1)); 
} 

//CHECK#40
if (1 << 39.1 !== 128) { 
  $ERROR('#40: 1 << 39.1 === 128. Actual: ' + (1 << 39.1)); 
} 

//CHECK#41
if (1 << 40.1 !== 256) { 
  $ERROR('#41: 1 << 40.1 === 256. Actual: ' + (1 << 40.1)); 
} 

//CHECK#42
if (1 << 41.1 !== 512) { 
  $ERROR('#42: 1 << 41.1 === 512. Actual: ' + (1 << 41.1)); 
} 

//CHECK#43
if (1 << 42.1 !== 1024) { 
  $ERROR('#43: 1 << 42.1 === 1024. Actual: ' + (1 << 42.1)); 
} 

//CHECK#44
if (1 << 43.1 !== 2048) { 
  $ERROR('#44: 1 << 43.1 === 2048. Actual: ' + (1 << 43.1)); 
} 

//CHECK#45
if (1 << 44.1 !== 4096) { 
  $ERROR('#45: 1 << 44.1 === 4096. Actual: ' + (1 << 44.1)); 
} 

//CHECK#46
if (1 << 45.1 !== 8192) { 
  $ERROR('#46: 1 << 45.1 === 8192. Actual: ' + (1 << 45.1)); 
} 

//CHECK#47
if (1 << 46.1 !== 16384) { 
  $ERROR('#47: 1 << 46.1 === 16384. Actual: ' + (1 << 46.1)); 
} 

//CHECK#48
if (1 << 47.1 !== 32768) { 
  $ERROR('#48: 1 << 47.1 === 32768. Actual: ' + (1 << 47.1)); 
} 

//CHECK#49
if (1 << 48.1 !== 65536) { 
  $ERROR('#49: 1 << 48.1 === 65536. Actual: ' + (1 << 48.1)); 
} 

//CHECK#50
if (1 << 49.1 !== 131072) { 
  $ERROR('#50: 1 << 49.1 === 131072. Actual: ' + (1 << 49.1)); 
} 

//CHECK#51
if (1 << 50.1 !== 262144) { 
  $ERROR('#51: 1 << 50.1 === 262144. Actual: ' + (1 << 50.1)); 
} 

//CHECK#52
if (1 << 51.1 !== 524288) { 
  $ERROR('#52: 1 << 51.1 === 524288. Actual: ' + (1 << 51.1)); 
} 

//CHECK#53
if (1 << 52.1 !== 1048576) { 
  $ERROR('#53: 1 << 52.1 === 1048576. Actual: ' + (1 << 52.1)); 
} 

//CHECK#54
if (1 << 53.1 !== 2097152) { 
  $ERROR('#54: 1 << 53.1 === 2097152. Actual: ' + (1 << 53.1)); 
} 

//CHECK#55
if (1 << 54.1 !== 4194304) { 
  $ERROR('#55: 1 << 54.1 === 4194304. Actual: ' + (1 << 54.1)); 
} 

//CHECK#56
if (1 << 55.1 !== 8388608) { 
  $ERROR('#56: 1 << 55.1 === 8388608. Actual: ' + (1 << 55.1)); 
} 

//CHECK#57
if (1 << 56.1 !== 16777216) { 
  $ERROR('#57: 1 << 56.1 === 16777216. Actual: ' + (1 << 56.1)); 
} 

//CHECK#58
if (1 << 57.1 !== 33554432) { 
  $ERROR('#58: 1 << 57.1 === 33554432. Actual: ' + (1 << 57.1)); 
} 

//CHECK#59
if (1 << 58.1 !== 67108864) { 
  $ERROR('#59: 1 << 58.1 === 67108864. Actual: ' + (1 << 58.1)); 
} 

//CHECK#60
if (1 << 59.1 !== 134217728) { 
  $ERROR('#60: 1 << 59.1 === 134217728. Actual: ' + (1 << 59.1)); 
} 

//CHECK#61
if (1 << 60.1 !== 268435456) { 
  $ERROR('#61: 1 << 60.1 === 268435456. Actual: ' + (1 << 60.1)); 
} 

//CHECK#62
if (1 << 61.1 !== 536870912) { 
  $ERROR('#62: 1 << 61.1 === 536870912. Actual: ' + (1 << 61.1)); 
} 

//CHECK#63
if (1 << 62.1 !== 1073741824) { 
  $ERROR('#63: 1 << 62.1 === 1073741824. Actual: ' + (1 << 62.1)); 
} 

//CHECK#64
if (1 << 63.1 !== -2147483648) { 
  $ERROR('#64: 1 << 63.1 === -2147483648. Actual: ' + (1 << 63.1)); 
} 

 }
});

