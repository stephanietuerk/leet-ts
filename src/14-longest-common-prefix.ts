function longestCommonPrefix(strs: string[]): string {
    strs.sort();
    let numCommon;
    for (let i = 0; i < strs.length - 1; i++) {
        numCommon = findNumCommonChars(strs[i], strs[i + 1], numCommon);
        if (numCommon === 0) {
            return '';
        }
    }
    return strs[0].slice(0, numCommon);

}

function findNumCommonChars(a: string, b: string, endAt?: number): number {
    const maxLength = endAt ?? (a.length > b.length ? b.length: a.length);
    for (let i = 0; i < maxLength; i++) {
        if (a[i] !== b[i]) {
            return i;
        }
    }
    return maxLength;    
}


console.log(longestCommonPrefix(["flower","flow","flight"]));