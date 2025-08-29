function lengthOfLongestSubstring(s) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let seen = "";
        for (let j = i; j < s.length; j++) {
            if (seen.includes(s[j])) {
                break; 
            }
            seen += s[j];
            maxLength = Math.max(maxLength, seen.length);
        }
    }

    return maxLength;
}


console.log(lengthOfLongestSubstring("abcabcbb"));
