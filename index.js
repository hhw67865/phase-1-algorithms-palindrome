function isPalindrome(word) {
  let wordLC = word.toLowerCase();
  return wordLC === wordLC.split('').reverse().join('');

  // for (let i=0; i<wordLC.length; i++) {
  //   const string1 = wordLC.substr(i,1);
  //   const string2 = wordLC.substr(wordLC.length-1-i,1);
  //   if (string1 !== string2) {
  //     return false;
  //   }
  // }
  // return true;

}


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
