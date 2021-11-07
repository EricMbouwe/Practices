function encode(str) {
    let result = ''
    let defautResut = 'Empty Input'
    let prevChar = ''
    let counter = 0

    // check for null input
    if (str === null || str === undefined || str.length === 0) return defautResut;

    for (const char of str) {
        // Check if curr === prev => increment the counter
        if (char === prevChar) {
            counter++
        }else {
            if (prevChar !== '') {
                // append to the result string whatever the counter value is and the previous char
                result += `${counter}${prevChar}`
            }
            prevChar = char
            counter = 1
        } 
    }
    
    // handling the last char of the str
    result += `${counter}${prevChar}`

    return result
}

const str1 = 'aaaabbccc'; // 4a2b3c
const str2 = 'aaaabbccca'; // 4a2b3c1a
const str3 = 'abcd'; // 1a1b1c1d
const str4 = 'aarrnebbccdyz'; // 2a2r1n1e2b2c1d1y1z
const str5 = ''; // 'Empty String'

console.log(encode(str1));
console.log(encode(str2));
console.log(encode(str3));
console.log(encode(str4));
console.log(encode(str5));
console.log(encode());