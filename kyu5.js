// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    const words = str.split(" "); // SPLIT INTO ARRAY OF STRINGS
    let punct = []; //  EMPTY ARRAY FOR PUNCT MARK
    const solutionArr = []; //  EMPTY ARRAY FOR MUTATED WORDS
    if (
        words[words.length - 1] === "." ||
        words[words.length - 1] === "!" ||
        words[words.length - 1] === "?"
    ) {
        punct = words.pop(); // IF FOUND AT LAST INDEX, REMOVE IT AND SAVE TO VAR
    }
    for (let i = 0; i < words.length; i++) {
        const first = words[i].slice(0, 1); //  GET FIRST LETTER
        const sub = words[i].substring(1); // GET REMAINING LETTERS
        const swap = sub.concat(first, "ay"); // CONCAT FIRST + "AY" TO SUBSTRING
        solutionArr.push(swap); //  PUSH MUTATED WORDS INTO ARR
    }
    if (punct[0]) {
      //  IF THERE IS A PUNCT MARK
        solutionArr.push(punct); //  PUSH IT TO END OF ARRAY
    }
    return solutionArr.join(" "); // JOIN INTO STRING
}
  
  // pigIt("Pig latin is cool");
  // igPay atinlay siay oolcay
  
  // pigIt("Hello world !");
  // elloHay orldway !
  
  pigIt("O tempora o mores !");
  // 'Oay emporatay oay oresmay !'
  
  // ??????????????????????
  // pigIt("Hello world!");
  // ??????????????????????
  
  // ========== OTHER CODEWARS SOLUTIONS ===========
  
  // function pigIt(str){
  //   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  // }
  
  // function pigIt(str){
  //   return str.split(' ').map(word => {
  //     return word.substring(1) + word[0] + 'ay';
  //   }).join(' ');
  // }
  
  // function pigIt(str){
  //   return str
  //     .split(' ')
  //     .map((word) => word.match(/[a-z]/i) ? word.slice(1) + word.charAt(0) + 'ay' : word)
  //     .join(' ')
  // }
  
// ============================================================================
// ============================================================================