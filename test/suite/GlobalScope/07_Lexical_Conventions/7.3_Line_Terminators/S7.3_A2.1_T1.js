// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.


// Converted for Test262 from original Sputnik source

 // CHECK#1
if (eval("'\u000Astr\u000Aing\u000A'") === "\u000Astr\u000Aing\u000A") {
  $ERROR('#1: eval("\'\\u000Astr\\u000Aing\\u000A\'") === "\\u000Astr\\u000Aing\\u000A"');
}
 

