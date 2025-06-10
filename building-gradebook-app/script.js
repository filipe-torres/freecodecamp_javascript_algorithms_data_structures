// Review JavaScript Fundamentals by Building a Gradebook App
/**
 * Part 1 - Returns the average of an array of scores.
 *
 * @param {number[]} scores - The array of scores to calculate the average of.
 * @returns {number} - The average of the scores.
 */
function getAverage(scores) {
  return scores.reduce((total, num) => total + num, 0) / scores.length;
}

// Tests
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]));

let textarea1 = document.getElementById('textarea1');
textarea1.value =
  getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]) +
  '\r\n' +
  getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]) +
  '\r\n' +
  getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]) +
  '\r\n';

// Test form
document.querySelector('#submit-scores1').addEventListener('click', () => {
  let scoresValue = document.querySelector('#scores1').value;
  if (scoresValue === '') {
    alert('Please input scores separated by commas');
  } else {
    textarea1.value += getAverage(scoresValue.split(',').map(Number)) + '\r\n';
    console.log(getAverage(scoresValue.split(',').map(Number)));
  }
});
// End of Part 1

/**
 *  Part 2 - Converting the student score to a letter grade.
 * @param {number} score - The score to get a letter grade for.
 * @returns {string} - The letter grade for the given score.
 */
function getGrade(score) {
  if (score === 100) {
    return 'A++';
  } else if (score >= 90 && score <= 99) {
    return 'A';
  } else if (score >= 80 && score <= 89) {
    return 'B';
  } else if (score >= 70 && score <= 79) {
    return 'C';
  } else if (score >= 60 && score <= 69) {
    return 'D';
  }
  return 'F';
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

let textarea2 = document.getElementById('textarea2');
textarea2.value =
  getGrade(96) + '\r\n' + getGrade(82) + '\r\n' + getGrade(56) + '\r\n';

// Test form
document.querySelector('#submit-scores2').addEventListener('click', () => {
  let scoreValue = document.querySelector('#scores2').value;
  if (scoreValue === '') {
    alert('Please enter a valid score between 0 and 100');
  } else {
    textarea2.value += getGrade(scoreValue) + '\r\n';
    console.log(getGrade(scoreValue));
  }
});
// End of Part 2

/**
 * Part 3 - Determines if the given score is a passing grade.
 *
 * @param {number} score - The score to evaluate.
 * @returns {boolean} - True if the score is passing, otherwise false.
 */
function hasPassingGrade(score) {
  if (getGrade(score) === 'F') {
    return false;
  }
  return true;
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

let textarea3 = document.getElementById('textarea3');
textarea3.value =
  hasPassingGrade(100) +
  '\r\n' +
  hasPassingGrade(53) +
  '\r\n' +
  hasPassingGrade(87) +
  '\r\n';

// Test form
document.querySelector('#submit-scores3').addEventListener('click', () => {
  let scoreValue = document.querySelector('#scores3').value;
  if (scoreValue === '') {
    alert('Please enter a valid score between 0 and 100');
  } else {
    textarea3.value += hasPassingGrade(scoreValue) + '\r\n';
    console.log(hasPassingGrade(scoreValue));
  }
});
// End of Part 3

/**
 * Part 4 - Returns a message indicating the class average and whether the student passed or failed based on their grade.
 *
 * @param {number[]} totalScores - An array of scores for the class to calculate the average.
 * @param {number} studentScore - The student's individual score to determine the grade.
 * @returns {string} - A message containing the class average and the student's grade, indicating pass or fail.
 */
function studentMsg(totalScores, studentScore) {
  let average = getAverage(totalScores);
  let grade = getGrade(studentScore);
  return (
    'Class average: ' +
    average +
    '. Your grade: ' +
    grade +
    (grade !== 'F' ? '. You passed the course.' : '. You failed the course.')
  );
}

let studentMsgValue = studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37);

console.log(studentMsgValue);

let textarea4 = document.querySelector('#textarea4');
textarea4.value = studentMsgValue + '\r\n';

// Test form
document.querySelector('#submit-scores4').addEventListener('click', () => {
  let totalScore = document
    .querySelector('#scores4a')
    .value.split(',')
    .map(Number);
  let studentScore = parseInt(document.querySelector('#scores4b').value);
  if (totalScore === '') {
    alert('Please input Total Scores separated by commas');
  } else if (studentScore === '') {
    alert('Please enter a valid score between 1 and 100');
  } else {
    studentMsgValue = studentMsg(totalScore, studentScore);
    textarea4.value += studentMsgValue + '\r\n';
    console.log(studentMsgValue);
  }
});
