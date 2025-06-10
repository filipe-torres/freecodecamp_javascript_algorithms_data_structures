const button = document.querySelector('#check-btn'),
  inputText = document.querySelector('#text-input'),
  result = document.querySelector('#result');

/**
 * Checks if the given text is a palindrome.
 *
 * @param {string} text - The text to be checked.
 * @returns {string} The given text with ' is a palindrome' or ' is not a palindrome' appended.
 */
function checkPalindrome(text) {
  let cleanedText = text
    .toLowerCase()
    .match(/[a-zA-Z]|[à-ü]|[À-Ü]|[0-9]/g)
    .join('');
  cleanedText === cleanedText.split('').reverse().join('')
    ? (text += ' is a palindrome')
    : (text += ' is not a palindrome');
  return text;
}

button.addEventListener('click', () => {
  result.innerHTML = '';
  inputText.value === ''
    ? alert('Please input a value')
    : (result.innerHTML = checkPalindrome(inputText.value));
});
