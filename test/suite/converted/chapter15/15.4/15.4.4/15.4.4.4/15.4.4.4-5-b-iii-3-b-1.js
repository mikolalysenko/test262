/// Copyright (c) 2009 Microsoft Corporation 
/// 
/// Redistribution and use in source and binary forms, with or without modification, are permitted provided
/// that the following conditions are met: 
///    * Redistributions of source code must retain the above copyright notice, this list of conditions and
///      the following disclaimer. 
///    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
///      the following disclaimer in the documentation and/or other materials provided with the distribution.  
///    * Neither the name of Microsoft nor the names of its contributors may be used to
///      endorse or promote products derived from this software without specific prior written permission.
/// 
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
/// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
/// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
/// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
/// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
/// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
/// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
/// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/**
 * @path: chapter15/15.4/15.4.4/15.4.4.4/15.4.4.4-5-b-iii-3-b-1.js;
 * @description: Array.prototype.concat will concat an Array when index property (read-only) exists in Array.prototype (Step 5.b.iii.3.b);
 */


function testcase() {
        try {
            Object.defineProperty(Array.prototype, "0", {
                value: 100,
                writable: false,
                configurable: true
            });

            var oldArr = [101];

            var newArr = Array.prototype.concat.call(oldArr);

            var verifyValue = false;
            verifyValue = newArr[0] === 101;

            var verifyEnumerable = false;
            for (var p in newArr) {
                if (p === "0" && newArr.hasOwnProperty("0")) {
                    verifyEnumerable = true;
                }
            }

            var verifyWritable = false;
            newArr[0] = 12;
            verifyWritable = newArr[0] === 12;

            var verifyConfigurable = false;
            delete newArr[0];
            verifyConfigurable = newArr.hasOwnProperty("0");

            return verifyValue && !verifyConfigurable && verifyEnumerable && verifyWritable;
        } finally {
            delete Array.prototype[0];
        }
    }
assertTrue(testcase.call(this));
