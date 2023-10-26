function reverseWords(sentence) {
    let reversedSentence = '';
    let word = '';
    let reversedWord = '';

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char !== ' ') {
            word += char;
        } else {
            reversedWord = reverseWord(word);
            reversedSentence += reversedWord + ' ';
            word = '';
        }
    }
    reversedWord = reverseWord(word);
    reversedSentence += reversedWord;

    return reversedSentence;
}

function reverseWord(word) {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}
const inputSentence = "This is a sunny day";
const reversed = reverseWords(inputSentence);
console.log(reversed);
