s = "Hello World   "
var lengthOfLastWord = function(s) {
    // const words = s.trim().split(" ")
    const words = (s.trim().split(" ").slice(-1))[0].length
    // const leng = words[0].length
    console.log(words);
    // console.log(words[words.length - 1].length)
};
lengthOfLastWord(s)