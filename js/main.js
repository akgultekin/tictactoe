console.log("JS Loaded!");

const playerMark = "X";
const cpuMark = "O";

const winners = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

/*-------------------------------------------*/

let takes = [
    [1, 3, 4], // 0
    [0, 2, 4], // 1
    [1, 4, 5], // 2
    [0, 4, 6], // 3
    [0, 1, 2, 3, 5, 6, 7, 8], // 4
    [2, 4, 8], // 5
    [3, 4, 7], // 6
    [4, 6, 8], // 7
    [4, 5, 7]  // 8
];

/*-------------------------------------------*/

let takesZeroOne = [
    [3, 4], // 0
    [2, 4], // 1
    [4, 5], // 2
    [4, 6], // 3
    [2, 3, 5, 6, 7, 8], // 4
    [2, 4, 8], // 5
    [3, 4, 7], // 6
    [4, 6, 8], // 7
    [4, 5, 7]  // 8
];

let takesZeroTwo = [
    [1, 3, 4], // 0
    [4], // 1
    [1, 4, 5], // 2
    [4, 6], // 3
    [1, 3, 5, 6, 7, 8], // 4
    [4, 8], // 5
    [3, 4, 7], // 6
    [4, 6, 8], // 7
    [4, 5, 7]  // 8
];

let takesZeroThree = [
    [1, 4], // 0
    [2, 4], // 1
    [1, 4, 5], // 2
    [4, 6], // 3
    [1, 2, 5, 6, 7, 8], // 4
    [2, 4, 8], // 5
    [4, 7], // 6
    [4, 6, 8], // 7
    [4, 5, 7]  // 8
];

let takesZeroFour = [
    [1, 3], // 0
    [2], // 1
    [1, 5], // 2
    [6], // 3
    [1, 2, 3, 5, 6, 7, 8], // 4
    [2, 8], // 5
    [3, 7], // 6
    [6, 8], // 7
    [5, 7]  // 8
];

let takesZeroFive = [
    [1, 3, 4], // 0
    [2, 4], // 1
    [1, 4], // 2
    [4, 6], // 3
    [1, 2, 3, 6, 7, 8], // 4
    [2, 4, 8], // 5
    [3, 4, 7], // 6
    [4, 6, 8], // 7
    [4, 7]  // 8
];

let takesZeroSix = [
    [1, 3, 4], // 0
    [2, 4], // 1
    [1, 4, 5], // 2
    [4, 6], // 3
    [1, 2, 3, 5, 7, 8], // 4
    [2, 4, 8], // 5
    [3, 4, 7], // 6
    [4, 8], // 7
    [4, 5, 7]  // 8
];

let takesZeroSeven = [
    [1, 3, 4], // 0
    [2, 4], // 1
    [1, 4, 5], // 2
    [4, 6], // 3
    [1, 2, 3, 5, 6, 8], // 4
    [2, 4, 8], // 5
    [3, 4], // 6
    [4, 6, 8], // 7
    [4, 5]  // 8
];

let takesZeroEight = [
    [1, 3, 4], // 0
    [2, 4], // 1
    [1, 4, 5], // 2
    [4, 6], // 3
    [1, 2, 3, 5, 6, 7], // 4
    [2, 4], // 5
    [3, 4, 7], // 6
    [4, 6], // 7
    [4, 5, 7]  // 8
];

/*-------------------------------------------*/

let takesOneZero = [
    [3, 4], // 0
    [2, 4], // 1
    [4, 5], // 2
    [4, 6], // 3
    [2, 3, 5, 6, 7, 8], // 4
    [2, 4, 8], // 5
    [3, 4, 7], // 6
    [4, 6, 8], // 7
    [4, 5, 7]  // 8
];

let takesOneTwo = [
    [3, 4], // 0
    [0, 2, 4], // 1
    [4, 5], // 2
    [0, 4, 6], // 3
    [0, 3, 5, 6, 7, 8], // 4
    [4, 8], // 5
    [3, 4, 7], // 6
    [4, 6, 8], // 7
    [4, 5, 7]  // 8
];

let takesOneThree = [
    [3, 4], // 0
    [0, 2, 4], // 1
    [4, 5], // 2
    [0, 4, 6], // 3
    [0, 2, 5, 6, 7, 8], // 4
    [2, 4, 8], // 5
    [4, 7], // 6
    [4, 6, 8], // 7
    [4, 5, 7]  // 8
];

let takesOneFour = [
    [3], // 0
    [0, 2], // 1
    [5], // 2
    [0, 6], // 3
    [0, 2, 3, 5, 6, 7, 8], // 4
    [2, 8], // 5
    [3, 7], // 6
    [6, 8], // 7
    [5, 7]  // 8
];

let takesOneFive = [
    [3, 4], // 0
    [0, 2, 4], // 1
    [4, 5], // 2
    [0, 4, 6], // 3
    [0, 2, 3, 6, 7, 8], // 4
    [2, 4, 8], // 5
    [3, 4, 7], // 6
    [4, 6, 8], // 7
    [4, 7]  // 8
];

let takesOneSix = [
    [3, 4], // 0
    [0, 2, 4], // 1
    [4, 5], // 2
    [0, 4], // 3
    [0, 2, 3, 5, 7, 8], // 4
    [2, 4, 8], // 5
    [3, 4, 7], // 6
    [4, 8], // 7
    [4, 5, 7]  // 8
];

let takesOneSeven = [
    [3, 4], // 0
    [0, 2, 4], // 1
    [4, 5], // 2
    [0, 4, 6], // 3
    [0, 2, 3, 5, 6, 8], // 4
    [2, 4, 8], // 5
    [3, 4], // 6
    [4, 6, 8], // 7
    [4, 5]  // 8
];

let takesOneEight = [
    [3, 4], // 0
    [0, 2, 4], // 1
    [4, 5], // 2
    [0, 4, 6], // 3
    [0, 2, 3, 5, 6, 7], // 4
    [2, 4], // 5
    [3, 4, 7], // 6
    [4, 6], // 7
    [4, 5, 7]  // 8
];

/*-------------------------------------------*/

let takesTwoZero = [
    [1, 3, 4], // 0
    [4], // 1
    [1, 4, 5], // 2
    [4, 6], // 3
    [1, 3, 5, 6, 7, 8], // 4
    [4, 8], // 5
    [3, 4, 7], // 6
    [4, 6, 8], // 7
    [4, 5, 7]  // 8
];

let takesTwoOne = [
    [3, 4], // 0
    [0, 4], // 1
    [4, 5], // 2
    [0, 4, 6], // 3
    [0, 3, 5, 6, 7, 8], // 4
    [4, 8], // 5
    [3, 4, 7], // 6
    [4, 6, 8], // 7
    [4, 5, 7]  // 8
];

let takesTwoThree = [
    [1, 4], // 0
    [0, 4], // 1
    [1, 4, 5], // 2
    [0, 4, 6], // 3
    [0, 1, 5, 6, 7, 8], // 4
    [4, 8], // 5
    [4, 7], // 6
    [4, 6, 8], // 7
    [4, 5, 7]  // 8
];

let takesTwoFour = [
    [1, 3], // 0
    [0], // 1
    [1, 5], // 2
    [0, 6], // 3
    [0, 1, 3, 5, 6, 7, 8], // 4
    [8], // 5
    [3, 7], // 6
    [6, 8], // 7
    [5, 7]  // 8
];

let takesTwoFive = [
    [1, 3, 4], // 0
    [0, 4], // 1
    [1, 4], // 2
    [0, 4, 6], // 3
    [0, 1, 2, 3, 6, 7, 8], // 4
    [4, 8], // 5
    [3, 4, 7], // 6
    [4, 6, 8], // 7
    [4, 7]  // 8
];

let takesTwoSix = [
    [1, 3, 4], // 0
    [0, 4], // 1
    [1, 4, 5], // 2
    [0, 4], // 3
    [0, 1, 3, 5, 7, 8], // 4
    [4, 8], // 5
    [3, 4, 7], // 6
    [4, 8], // 7
    [4, 5, 7]  // 8
];

let takesTwoSeven = [
    [1, 3, 4], // 0
    [0, 4], // 1
    [1, 4, 5], // 2
    [0, 4, 6], // 3
    [0, 1, 3, 5, 6, 8], // 4
    [4, 8], // 5
    [3, 4], // 6
    [4, 6, 8], // 7
    [4, 5]  // 8
];

let takesTwoEight = [
    [1, 3, 4], // 0
    [0, 4], // 1
    [1, 4, 5], // 2
    [0, 4, 6], // 3
    [0, 1, 3, 5, 6, 7], // 4
    [4], // 5
    [3, 4, 7], // 6
    [4, 6], // 7
    [4, 5, 7]  // 8
];

/*-------------------------------------------*/

let takesThreeZero = [
    [1, 4], // 0
    [2, 4], // 1
    [1, 4, 5], // 2
    [4, 6], // 3
    [0, 1, 2, 5, 6, 7, 8], // 4
    [2, 4, 8], // 5
    [4, 7], // 6
    [4, 6, 8], // 7
    [4, 5, 7]  // 8
];

let takesThreeOne = [
    [4], // 0
    [0, 2, 4], // 1
    [4, 5], // 2
    [0, 4, 6], // 3
    [0, 2, 5, 6, 7, 8], // 4
    [2, 4, 8], // 5
    [4, 7], // 6
    [4, 6, 8], // 7
    [4, 5, 7]  // 8
];

let takesThreeTwo = [
    [1, 4], // 0
    [0, 4], // 1
    [1, 4, 5], // 2
    [0, 4, 6], // 3
    [0, 1, 5, 6, 7, 8], // 4
    [4, 8], // 5
    [4, 7], // 6
    [4, 6, 8], // 7
    [4, 5, 7]  // 8
];

let takesThreeFour = [
    [1], // 0
    [0, 2], // 1
    [1, 5], // 2
    [0, 6], // 3
    [0, 1, 2, 5, 6, 7, 8], // 4
    [2, 8], // 5
    [7], // 6
    [6, 8], // 7
    [5, 7]  // 8
];

let takesThreeFive = [
    [1, 4], // 0
    [0, 2, 4], // 1
    [1, 4], // 2
    [0, 4, 6], // 3
    [0, 1, 2, 6, 7, 8], // 4
    [2, 4, 8], // 5
    [4, 7], // 6
    [4, 6, 8], // 7
    [4, 7]  // 8
];

let takesThreeSix = [
    [1, 4], // 0
    [0, 2, 4], // 1
    [1, 4, 5], // 2
    [0, 4], // 3
    [0, 1, 2, 5, 7, 8], // 4
    [2, 4, 8], // 5
    [4, 7], // 6
    [4, 8], // 7
    [4, 5, 7]  // 8
];

let takesThreeSeven = [
    [1, 4], // 0
    [0, 2, 4], // 1
    [1, 4, 5], // 2
    [0, 4, 6], // 3
    [0, 1, 2, 5, 6, 8], // 4
    [2, 4, 8], // 5
    [4], // 6
    [4, 6, 8], // 7
    [4, 5]  // 8
];

let takesThreeEight = [
    [1, 4], // 0
    [0, 2, 4], // 1
    [1, 4, 5], // 2
    [0, 4, 6], // 3
    [0, 1, 2, 5, 6, 7], // 4
    [2, 4], // 5
    [4, 7], // 6
    [4, 6], // 7
    [4, 5, 7]  // 8
];

/*-------------------------------------------*/

let takesFourZero = [
    [1, 3], // 0
    [2], // 1
    [1, 5], // 2
    [6], // 3
    [1, 2, 3, 5, 6, 7, 8], // 4
    [2, 8], // 5
    [3, 7], // 6
    [6, 8], // 7
    [5, 7]  // 8
];

let takesFourOne = [
    [3], // 0
    [0, 2], // 1
    [5], // 2
    [0, 6], // 3
    [0, 2, 3, 5, 6, 7, 8], // 4
    [2, 8], // 5
    [3, 7], // 6
    [6, 8], // 7
    [5, 7]  // 8
];

let takesFourTwo = [
    [1, 3], // 0
    [0], // 1
    [1, 5], // 2
    [0, 6], // 3
    [0, 1, 3, 5, 6, 7, 8], // 4
    [8], // 5
    [3, 7], // 6
    [6, 8], // 7
    [5, 7]  // 8
];

let takesFourThree = [
    [1], // 0
    [0, 2], // 1
    [1, 5], // 2
    [0, 6], // 3
    [0, 1, 2, 5, 6, 7, 8], // 4
    [2, 8], // 5
    [7], // 6
    [6, 8], // 7
    [5, 7]  // 8
];

let takesFourFive = [
    [1, 3], // 0
    [0, 2], // 1
    [1], // 2
    [0, 6], // 3
    [0, 1, 2, 3, 6, 7, 8], // 4
    [2, 8], // 5
    [3, 7], // 6
    [6, 8], // 7
    [7]  // 8
];

let takesFourSix = [
    [1, 3], // 0
    [0, 2], // 1
    [1, 5], // 2
    [0], // 3
    [0, 1, 2, 3, 5, 7, 8], // 4
    [2, 8], // 5
    [3, 7], // 6
    [8], // 7
    [5, 7]  // 8
];

let takesFourSeven = [
    [1, 3], // 0
    [0, 2], // 1
    [1, 5], // 2
    [0, 6], // 3
    [0, 1, 2, 3, 5, 6, 8], // 4
    [2, 8], // 5
    [3], // 6
    [6, 8], // 7
    [5]  // 8
];

let takesFourEight = [
    [1, 3], // 0
    [0, 2], // 1
    [1, 5], // 2
    [0, 6], // 3
    [0, 1, 2, 3, 5, 6, 7], // 4
    [2], // 5
    [3, 7], // 6
    [6], // 7
    [5, 7]  // 8
];

/*-------------------------------------------*/

let takesFiveZero = [
    [1, 3, 4], // 0
    [2, 4], // 1
    [1, 4], // 2
    [4, 6], // 3
    [1, 2, 3, 6, 7, 8], // 4
    [2, 4, 8], // 5
    [3, 4, 7], // 6
    [4, 6, 8], // 7
    [4, 7]  // 8
];

let takesFiveOne = [
    [3, 4], // 0
    [0, 2, 4], // 1
    [4], // 2
    [0, 4, 6], // 3
    [0, 2, 3, 6, 7, 8], // 4
    [2, 4, 8], // 5
    [3, 4, 7], // 6
    [4, 6, 8], // 7
    [4, 7]  // 8
];

let takesFiveTwo = [
    [1, 3, 4], // 0
    [0, 4], // 1
    [1, 4], // 2
    [0, 4, 6], // 3
    [0, 1, 3, 6, 7, 8], // 4
    [4, 8], // 5
    [3, 4, 7], // 6
    [4, 6, 8], // 7
    [4, 7]  // 8
];

let takesFiveThree = [
    [1, 4], // 0
    [0, 2, 4], // 1
    [1, 4], // 2
    [0, 4, 6], // 3
    [0, 1, 2, 6, 7, 8], // 4
    [2, 4, 8], // 5
    [4, 7], // 6
    [4, 6, 8], // 7
    [4, 7]  // 8
];

let takesFiveFour = [
    [1, 3], // 0
    [0, 2], // 1
    [1], // 2
    [0, 6], // 3
    [0, 1, 2, 3, 6, 7, 8], // 4
    [2, 8], // 5
    [3, 7], // 6
    [6, 8], // 7
    [7]  // 8
];

let takesFiveSix = [
    [1, 3, 4], // 0
    [0, 2, 4], // 1
    [1, 4], // 2
    [0, 4], // 3
    [0, 1, 2, 3, 7, 8], // 4
    [2, 4, 8], // 5
    [3, 4, 7], // 6
    [4, 8], // 7
    [4, 7]  // 8
];

let takesFiveSeven = [
    [1, 3, 4], // 0
    [0, 2, 4], // 1
    [1, 4], // 2
    [0, 4, 6], // 3
    [0, 1, 2, 3, 6, 8], // 4
    [2, 4, 8], // 5
    [3, 4], // 6
    [4, 6, 8], // 7
    [4]  // 8
];

let takesFiveEight = [
    [1, 3, 4], // 0
    [0, 2, 4], // 1
    [1, 4], // 2
    [0, 4, 6], // 3
    [0, 1, 2, 3, 6, 7], // 4
    [2, 4, 8], // 5
    [3, 4, 7], // 6
    [4, 6], // 7
    [4, 7]  // 8
];

/*-------------------------------------------*/

let takesSixZero = [
    [1, 3, 4], // 0
    [2, 4], // 1
    [1, 4, 5], // 2
    [4], // 3
    [1, 2, 3, 5, 7, 8], // 4
    [2, 4, 8], // 5
    [3, 4, 7], // 6
    [4, 8], // 7
    [4, 5, 7]  // 8
];

let takesSixOne = [
    [3, 4], // 0
    [0, 2, 4], // 1
    [4, 5], // 2
    [0, 4], // 3
    [0, 2, 3, 5, 7, 8], // 4
    [2, 4, 8], // 5
    [3, 4, 7], // 6
    [4, 8], // 7
    [4, 5, 7]  // 8
];

let takesSixTwo = [
    [1, 3, 4], // 0
    [0, 4], // 1
    [1, 4, 5], // 2
    [0, 4, 6], // 3
    [0, 1, 3, 5, 7, 8], // 4
    [4, 8], // 5
    [3, 4, 7], // 6
    [4, 8], // 7
    [4, 5, 7]  // 8
];

let takesSixThree = [
    [1, 4], // 0
    [0, 2, 4], // 1
    [1, 4, 5], // 2
    [0, 4], // 3
    [0, 1, 2, 5, 7, 8], // 4
    [2, 4, 8], // 5
    [4, 7], // 6
    [4, 8], // 7
    [4, 5, 7]  // 8
];

let takesSixFour = [
    [1, 3], // 0
    [0, 2], // 1
    [1, 5], // 2
    [0], // 3
    [0, 1, 2, 3, 5, 7, 8], // 4
    [2, 8], // 5
    [3, 7], // 6
    [8], // 7
    [5, 7]  // 8
];

let takesSixFive = [
    [1, 3, 4], // 0
    [0, 2, 4], // 1
    [1, 4], // 2
    [0, 4], // 3
    [0, 1, 2, 3, 7, 8], // 4
    [2, 4, 8], // 5
    [3, 4, 7], // 6
    [4, 8], // 7
    [4, 7]  // 8
];

let takesSixSeven = [
    [1, 3, 4], // 0
    [0, 2, 4], // 1
    [1, 4, 5], // 2
    [0, 4], // 3
    [0, 1, 2, 3, 5, 8], // 4
    [2, 4, 8], // 5
    [3, 4], // 6
    [4, 8], // 7
    [4, 5]  // 8
];

let takesSixEight = [
    [1, 3, 4], // 0
    [0, 2, 4], // 1
    [1, 4, 5], // 2
    [0, 4], // 3
    [0, 1, 2, 3, 5, 7], // 4
    [2, 4], // 5
    [3, 4, 7], // 6
    [4], // 7
    [4, 5, 7]  // 8
];

/*-------------------------------------------*/

let takesSevenZero = [
    [1, 3, 4], // 0
    [2, 4], // 1
    [1, 4, 5], // 2
    [4, 6], // 3
    [1, 2, 3, 5, 6, 8], // 4
    [2, 4, 8], // 5
    [3, 4], // 6
    [4, 6, 8], // 7
    [4, 5]  // 8
];

let takesSevenOne = [
    [3, 4], // 0
    [0, 2, 4], // 1
    [4, 5], // 2
    [0, 4, 6], // 3
    [0, 2, 3, 5, 6, 8], // 4
    [2, 4, 8], // 5
    [3, 4], // 6
    [4, 6, 8], // 7
    [4, 5]  // 8
];

let takesSevenTwo = [
    [1, 3, 4], // 0
    [0, 4], // 1
    [1, 4, 5], // 2
    [0, 4, 6], // 3
    [0, 1, 3, 5, 6, 8], // 4
    [4, 8], // 5
    [3, 4], // 6
    [4, 6, 8], // 7
    [4, 5]  // 8
];

let takesSevenThree = [
    [1, 4], // 0
    [0, 2, 4], // 1
    [1, 4, 5], // 2
    [0, 4, 6], // 3
    [0, 1, 2, 5, 6, 8], // 4
    [2, 4, 8], // 5
    [4], // 6
    [4, 6, 8], // 7
    [4, 5]  // 8
];

let takesSevenFour = [
    [1, 3], // 0
    [0, 2], // 1
    [1, 5], // 2
    [0, 6], // 3
    [0, 1, 2, 3, 5, 6, 8], // 4
    [2, 8], // 5
    [3], // 6
    [6, 8], // 7
    [5]  // 8
];

let takesSevenFive = [
    [1, 3, 4], // 0
    [0, 2, 4], // 1
    [1, 4], // 2
    [0, 4, 6], // 3
    [0, 1, 2, 3, 6, 8], // 4
    [2, 4, 8], // 5
    [3, 4], // 6
    [4, 6, 8], // 7
    [4]  // 8
];

let takesSevenSix = [
    [1, 3, 4], // 0
    [0, 2, 4], // 1
    [1, 4, 5], // 2
    [0, 4], // 3
    [0, 1, 2, 3, 5, 8], // 4
    [2, 4, 8], // 5
    [3, 4], // 6
    [4, 8], // 7
    [4, 5]  // 8
];

let takesSevenEight = [
    [1, 3, 4], // 0
    [0, 2, 4], // 1
    [1, 4, 5], // 2
    [0, 4, 6], // 3
    [0, 1, 2, 3, 5, 6], // 4
    [2, 4], // 5
    [3, 4], // 6
    [4, 6], // 7
    [4, 5]  // 8
];

/*-------------------------------------------*/

let takesEightZero = [
    [1, 3, 4], // 0
    [2, 4], // 1
    [1, 4, 5], // 2
    [4, 6], // 3
    [1, 2, 3, 5, 6, 7], // 4
    [2, 4], // 5
    [3, 4, 7], // 6
    [4, 6], // 7
    [4, 5, 7]  // 8
];

let takesEightOne = [
    [3, 4], // 0
    [0, 2, 4], // 1
    [4, 5], // 2
    [0, 4, 6], // 3
    [0, 2, 3, 5, 6, 7], // 4
    [2, 4], // 5
    [3, 4, 7], // 6
    [4, 6], // 7
    [4, 5, 7]  // 8
];

let takesEightTwo = [
    [1, 3, 4], // 0
    [0, 4], // 1
    [1, 4, 5], // 2
    [0, 4, 6], // 3
    [0, 1, 3, 5, 6, 7], // 4
    [4], // 5
    [3, 4, 7], // 6
    [4, 6], // 7
    [4, 5, 7]  // 8
];

let takesEightThree = [
    [1, 4], // 0
    [0, 2, 4], // 1
    [1, 4, 5], // 2
    [0, 4, 6], // 3
    [0, 1, 2, 5, 6, 7], // 4
    [2, 4], // 5
    [4, 7], // 6
    [4, 6], // 7
    [4, 5, 7]  // 8
];

let takesEightFour = [
    [1, 3], // 0
    [0, 2], // 1
    [1, 5], // 2
    [0, 6], // 3
    [0, 1, 2, 3, 5, 6, 7], // 4
    [2], // 5
    [3, 7], // 6
    [6], // 7
    [5, 7]  // 8
];

let takesEightFive = [
    [1, 3, 4], // 0
    [0, 2, 4], // 1
    [1, 4], // 2
    [0, 4, 6], // 3
    [0, 1, 2, 3, 6, 7], // 4
    [2, 4], // 5
    [3, 4, 7], // 6
    [4, 6], // 7
    [4, 7]  // 8
];

let takesEightSix = [
    [1, 3, 4], // 0
    [0, 2, 4], // 1
    [1, 4, 5], // 2
    [0, 4], // 3
    [0, 1, 2, 3, 5, 7], // 4
    [2, 4], // 5
    [3, 4, 7], // 6
    [4], // 7
    [4, 5, 7]  // 8
];

let takesEightSeven = [
    [1, 3, 4], // 0
    [0, 2, 4], // 1
    [1, 4, 5], // 2
    [0, 4, 6], // 3
    [0, 1, 2, 3, 5, 6], // 4
    [2, 4], // 5
    [3, 4], // 6
    [4, 6], // 7
    [4, 5]  // 8
];

/*-------------------------------------------*/

const options = ["", "", "", "", "", "", "", "", ""];

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector(".status-text")

cells.forEach(cell => cell.addEventListener("click", clickCell))
cells.forEach(cell => cell.addEventListener("mouseover", onHover))
cells.forEach(cell => cell.addEventListener("mouseout", outHover))

function onHover() {
    const index = this.getAttribute("index");
    const cell = cells[index];

    if (options[index] == "") {
        cell.classList.add("onhover");
    }
}

function outHover() {
    const index = this.getAttribute("index");
    const cell = cells[index];

    cell.classList.remove("onhover");
}

function clickCell() {
    const index = this.getAttribute("index");
    const cell = cells[index];

    cell.removeEventListener("click", clickCell);
    cell.classList.remove("onhover");

    options[index] = playerMark;
    cell.textContent = playerMark;

    checkWinner();
    cpuTurn(index);

    console.log(options);
}

function cpuTurn(index) {
    const nextindex = takes[index][Math.floor(Math.random() * takes[index].length)];
    const cell = cells[nextindex];

    cell.removeEventListener("click", clickCell)

    if (options[nextindex] != "") {
        return;
    } 

    options[nextindex] = cpuMark;
    cell.textContent = cpuMark;

    checkWinner();
    deleteCell(index, nextindex);

}

function deleteCell(index, nextindex) {
    cells[index];
    cells[nextindex];

    if (index == 0 && nextindex == 1) {
        takes = takesZeroOne;
    } else if (index == 0 && nextindex == 2) {
        takes = takesZeroTwo;
    } else if (index == 0 && nextindex == 3) {
        takes = takesZeroThree;
    } else if (index == 0 && nextindex == 4) {
        takes = takesZeroFour;
    } else if (index == 0 && nextindex == 5) {
        takes = takesZeroFive;
    } else if (index == 0 && nextindex == 6) {
        takes = takesZeroSix;
    } else if (index == 0 && nextindex == 7) {
        takes = takesZeroSeven;
    } else if (index == 0 && nextindex == 8) {
        takes = takesZeroEight;
    }

    if (index == 0 && index == 1) {
        takes = takesZeroOne;
    } else if (index == 0 && index == 2) {
        takes = takesZeroTwo;
    } else if (index == 0 && index == 3) {
        takes = takesZeroThree;
    } else if (index == 0 && index == 4) {
        takes = takesZeroFour;
    } else if (index == 0 && index == 5) {
        takes = takesZeroFive;
    } else if (index == 0 && index == 6) {
        takes = takesZeroSix;
    } else if (index == 0 && index == 7) {
        takes = takesZeroSeven;
    } else if (index == 0 && index == 8) {
        takes = takesZeroEight;
    }

    if (nextindex == 0 && nextindex == 1) {
        takes = takesZeroOne;
    } else if (nextindex == 0 && nextindex == 2) {
        takes = takesZeroTwo;
    } else if (nextindex == 0 && nextindex == 3) {
        takes = takesZeroThree;
    } else if (nextindex == 0 && nextindex == 4) {
        takes = takesZeroFour;
    } else if (nextindex == 0 && nextindex == 5) {
        takes = takesZeroFive;
    } else if (nextindex == 0 && nextindex == 6) {
        takes = takesZeroSix;
    } else if (nextindex == 0 && nextindex == 7) {
        takes = takesZeroSeven;
    } else if (nextindex == 0 && nextindex == 8) {
        takes = takesZeroEight;
    }

    /*-------------------------------------------*/

    if (index == 1 && nextindex == 0) {
        takes = takesOneZero;
    } else if (index == 1 && nextindex == 2) {
        takes = takesOneTwo;
    } else if (index == 1 && nextindex == 3) {
        takes = takesOneThree;
    } else if (index == 1 && nextindex == 4) {
        takes = takesOneFour;
    } else if (index == 1 && nextindex == 5) {
        takes = takesOneFive;
    } else if (index == 1 && nextindex == 6) {
        takes = takesOneSix;
    } else if (index == 1 && nextindex == 7) {
        takes = takesOneSeven;
    } else if (index == 1 && nextindex == 8) {
        takes = takesOneEight;
    }

    if (index == 1 && index == 0) {
        takes = takesOneZero;
    } else if (index == 1 && index == 2) {
        takes = takesOneTwo;
    } else if (index == 1 && index == 3) {
        takes = takesOneThree;
    } else if (index == 1 && index == 4) {
        takes = takesOneFour;
    } else if (index == 1 && index == 5) {
        takes = takesOneFive;
    } else if (index == 1 && index == 6) {
        takes = takesOneSix;
    } else if (index == 1 && index == 7) {
        takes = takesOneSeven;
    } else if (index == 1 && index == 8) {
        takes = takesOneEight;
    }

    if (nextindex == 1 && nextindex == 0) {
        takes = takesOneZero;
    } else if (nextindex == 1 && nextindex == 2) {
        takes = takesOneTwo;
    } else if (nextindex == 1 && nextindex == 3) {
        takes = takesOneThree;
    } else if (nextindex == 1 && nextindex == 4) {
        takes = takesOneFour;
    } else if (nextindex == 1 && nextindex == 5) {
        takes = takesOneFive;
    } else if (nextindex == 1 && nextindex == 6) {
        takes = takesOneSix;
    } else if (nextindex == 1 && nextindex == 7) {
        takes = takesOneSeven;
    } else if (nextindex == 1 && nextindex == 8) {
        takes = takesOneEight;
    }

    /*-------------------------------------------*/

    if (index == 2 && nextindex == 0) {
        takes = takesTwoZero;
    } else if (index == 2 && nextindex == 1) {
        takes = takesTwoOne;
    } else if (index == 2 && nextindex == 3) {
        takes = takesTwoThree;
    } else if (index == 2 && nextindex == 4) {
        takes = takesTwoFour;
    } else if (index == 2 && nextindex == 5) {
        takes = takesTwoFive;
    } else if (index == 2 && nextindex == 6) {
        takes = takesTwoSix;
    } else if (index == 2 && nextindex == 7) {
        takes = takesTwoSeven;
    } else if (index == 2 && nextindex == 8) {
        takes = takesTwoEight;
    }

    if (index == 2 && index == 0) {
        takes = takesTwoZero;
    } else if (index == 2 && index == 1) {
        takes = takesTwoOne;
    } else if (index == 2 && index == 3) {
        takes = takesTwoThree;
    } else if (index == 2 && index == 4) {
        takes = takesTwoFour;
    } else if (index == 2 && index == 5) {
        takes = takesTwoFive;
    } else if (index == 2 && index == 6) {
        takes = takesTwoSix;
    } else if (index == 2 && index == 7) {
        takes = takesTwoSeven;
    } else if (index == 2 && index == 8) {
        takes = takesTwoEight;
    }

    if (nextindex == 2 && nextindex == 0) {
        takes = takesTwoZero;
    } else if (nextindex == 2 && nextindex == 1) {
        takes = takesTwoOne;
    } else if (nextindex == 2 && nextindex == 3) {
        takes = takesTwoThree;
    } else if (nextindex == 2 && nextindex == 4) {
        takes = takesTwoFour;
    } else if (nextindex == 2 && nextindex == 5) {
        takes = takesTwoFive;
    } else if (nextindex == 2 && nextindex == 6) {
        takes = takesTwoSix;
    } else if (nextindex == 2 && nextindex == 7) {
        takes = takesTwoSeven;
    } else if (nextindex == 2 && nextindex == 8) {
        takes = takesTwoEight;
    }

     /*-------------------------------------------*/

    if (index == 3 && nextindex == 0) {
        takes = takesThreeZero;
    } else if (index == 3 && nextindex == 1) {
        takes = takesThreeOne;
    } else if (index == 3 && nextindex == 2) {
        takes = takesThreeTwo;
    } else if (index == 3 && nextindex == 4) {
        takes = takesThreeFour;
    } else if (index == 3 && nextindex == 5) {
        takes = takesThreeFive;
    } else if (index == 3 && nextindex == 6) {
        takes = takesThreeSix;
    } else if (index == 3 && nextindex == 7) {
        takes = takesThreeSeven;
    } else if (index == 3 && nextindex == 8) {
        takes = takesThreeEight;
    }

    if (index == 3 && index == 0) {
        takes = takesThreeZero;
    } else if (index == 3 && index == 1) {
        takes = takesThreeOne;
    } else if (index == 3 && index == 2) {
        takes = takesThreeTwo;
    } else if (index == 3 && index == 4) {
        takes = takesThreeFour;
    } else if (index == 3 && index == 5) {
        takes = takesThreeFive;
    } else if (index == 3 && index == 6) {
        takes = takesThreeSix;
    } else if (index == 3 && index == 7) {
        takes = takesThreeSeven;
    } else if (index == 3 && index == 8) {
        takes = takesThreeEight;
    }

    if (index == 3 && index == 0) {
        takes = takesThreeZero;
    } else if (nextindex == 3 && nextindex == 1) {
        takes = takesThreeOne;
    } else if (nextindex == 3 && nextindex == 2) {
        takes = takesThreeTwo;
    } else if (nextindex == 3 && nextindex == 4) {
        takes = takesThreeFour;
    } else if (nextindex == 3 && nextindex == 5) {
        takes = takesThreeFive;
    } else if (nextindex == 3 && nextindex == 6) {
        takes = takesThreeSix;
    } else if (nextindex == 3 && nextindex == 7) {
        takes = takesThreeSeven;
    } else if (nextindex == 3 && nextindex == 8) {
        takes = takesThreeEight;
    }

    /*-------------------------------------------*/

    if (index == 4 && nextindex == 0) {
        takes = takesFourZero;
    } else if (index == 4 && nextindex == 1) {
        takes = takesFourOne;
    } else if (index == 4 && nextindex == 2) {
        takes = takesFourTwo;
    } else if (index == 4 && nextindex == 3) {
        takes = takesFourThree;
    } else if (index == 4 && nextindex == 5) {
        takes = takesFourFive;
    } else if (index == 4 && nextindex == 6) {
        takes = takesFourSix;
    } else if (index == 4 && nextindex == 7) {
        takes = takesFourSeven;
    } else if (index == 4 && nextindex == 8) {
        takes = takesFourEight;
    }

    if (index == 4 && index == 0) {
        takes = takesFourZero;
    } else if (index == 4 && index == 1) {
        takes = takesFourOne;
    } else if (index == 4 && index == 2) {
        takes = takesFourTwo;
    } else if (index == 4 && index == 3) {
        takes = takesFourThree;
    } else if (index == 4 && index == 5) {
        takes = takesFourFive;
    } else if (index == 4 && index == 6) {
        takes = takesFourSix;
    } else if (index == 4 && index == 7) {
        takes = takesFourSeven;
    } else if (index == 4 && index == 8) {
        takes = takesFourEight;
    }

    if (nextindex == 4 && nextindex == 0) {
        takes = takesFourZero;
    } else if (nextindex == 4 && nextindex == 1) {
        takes = takesFourOne;
    } else if (nextindex == 4 && nextindex == 2) {
        takes = takesFourTwo;
    } else if (nextindex == 4 && nextindex == 3) {
        takes = takesFourThree;
    } else if (nextindex == 4 && nextindex == 5) {
        takes = takesFourFive;
    } else if (nextindex == 4 && nextindex == 6) {
        takes = takesFourSix;
    } else if (nextindex == 4 && nextindex == 7) {
        takes = takesFourSeven;
    } else if (nextindex == 4 && nextindex == 8) {
        takes = takesFourEight;
    }

    /*-------------------------------------------*/

    if (index == 5 && nextindex == 0) {
        takes = takesFiveZero;
    } else if (index == 5 && nextindex == 1) {
        takes = takesFiveOne;
    } else if (index == 5 && nextindex == 2) {
        takes = takesFiveTwo;
    } else if (index == 5 && nextindex == 3) {
        takes = takesFiveThree;
    } else if (index == 5 && nextindex == 4) {
        takes = takesFiveFour;
    } else if (index == 5 && nextindex == 6) {
        takes = takesFiveSix;
    } else if (index == 5 && nextindex == 7) {
        takes = takesFiveSeven;
    } else if (index == 5 && nextindex == 8) {
        takes = takesFiveEight;
    }

    if (index == 5 && index == 0) {
        takes = takesFiveZero;
    } else if (index == 5 && index == 1) {
        takes = takesFiveOne;
    } else if (index == 5 && index == 2) {
        takes = takesFiveTwo;
    } else if (index == 5 && index == 3) {
        takes = takesFiveThree;
    } else if (index == 5 && index == 4) {
        takes = takesFiveFour;
    } else if (index == 5 && index == 6) {
        takes = takesFiveSix;
    } else if (index == 5 && index == 7) {
        takes = takesFiveSeven;
    } else if (index == 5 && index == 8) {
        takes = takesFiveEight;
    }

    if (nextindex == 5 && nextindex == 0) {
        takes = takesFiveZero;
    } else if (nextindex == 5 && nextindex == 1) {
        takes = takesFiveOne;
    } else if (nextindex == 5 && nextindex == 2) {
        takes = takesFiveTwo;
    } else if (nextindex == 5 && nextindex == 3) {
        takes = takesFiveThree;
    } else if (nextindex == 5 && nextindex == 4) {
        takes = takesFiveFour;
    } else if (nextindex == 5 && nextindex == 6) {
        takes = takesFiveSix;
    } else if (nextindex == 5 && nextindex == 7) {
        takes = takesFiveSeven;
    } else if (nextindex == 5 && nextindex == 8) {
        takes = takesFiveEight;
    }

    /*-------------------------------------------*/

    if (index == 6 && nextindex == 0) {
        takes = takesSixZero;
    } else if (index == 6 && nextindex == 1) {
        takes = takesSixOne;
    } else if (index == 6 && nextindex == 2) {
        takes = takesSixTwo;
    } else if (index == 6 && nextindex == 3) {
        takes = takesSixThree;
    } else if (index == 6 && nextindex == 4) {
        takes = takesSixFour;
    } else if (index == 6 && nextindex == 5) {
        takes = takesSixFive;
    } else if (index == 6 && nextindex == 7) {
        takes = takesSixSeven;
    } else if (index == 6 && nextindex == 8) {
        takes = takesSixEight;
    }

    if (index == 6 && index == 0) {
        takes = takesSixZero;
    } else if (index == 6 && index == 1) {
        takes = takesSixOne;
    } else if (index == 6 && index == 2) {
        takes = takesSixTwo;
    } else if (index == 6 && index == 3) {
        takes = takesSixThree;
    } else if (index == 6 && index == 4) {
        takes = takesSixFour;
    } else if (index == 6 && index == 5) {
        takes = takesSixFive;
    } else if (index == 6 && index == 7) {
        takes = takesSixSeven;
    } else if (index == 6 && index == 8) {
        takes = takesSixEight;
    }

    if (nextindex == 6 && nextindex == 0) {
        takes = takesSixZero;
    } else if (nextindex == 6 && nextindex == 1) {
        takes = takesSixOne;
    } else if (nextindex == 6 && nextindex == 2) {
        takes = takesSixTwo;
    } else if (nextindex == 6 && nextindex == 3) {
        takes = takesSixThree;
    } else if (nextindex == 6 && nextindex == 4) {
        takes = takesSixFour;
    } else if (nextindex == 6 && nextindex == 5) {
        takes = takesSixFive;
    } else if (nextindex == 6 && nextindex == 7) {
        takes = takesSixSeven;
    } else if (nextindex == 6 && nextindex == 8) {
        takes = takesSixEight;
    }

    /*-------------------------------------------*/

    if (index == 7 && nextindex == 0) {
        takes = takesSevenZero;
    } else if (index == 7 && nextindex == 1) {
        takes = takesSevenOne;
    } else if (index == 7 && nextindex == 2) {
        takes = takesSevenTwo;
    } else if (index == 7 && nextindex == 3) {
        takes = takesSevenThree;
    } else if (index == 7 && nextindex == 4) {
        takes = takesSevenFour;
    } else if (index == 7 && nextindex == 5) {
        takes = takesSevenFive;
    } else if (index == 7 && nextindex == 6) {
        takes = takesSevenSix;
    } else if (index == 7 && nextindex == 8) {
        takes = takesSevenEight;
    }

    if (index == 7 && index == 0) {
        takes = takesSevenZero;
    } else if (index == 7 && index == 1) {
        takes = takesSevenOne;
    } else if (index == 7 && index == 2) {
        takes = takesSevenTwo;
    } else if (index == 7 && index == 3) {
        takes = takesSevenThree;
    } else if (index == 7 && index == 4) {
        takes = takesSevenFour;
    } else if (index == 7 && index == 5) {
        takes = takesSevenFive;
    } else if (index == 7 && index == 6) {
        takes = takesSevenSix;
    } else if (index == 7 && index == 8) {
        takes = takesSevenEight;
    }

    if (nextindex == 7 && nextindex == 0) {
        takes = takesSevenZero;
    } else if (nextindex == 7 && nextindex == 1) {
        takes = takesSevenOne;
    } else if (nextindex == 7 && nextindex == 2) {
        takes = takesSevenTwo;
    } else if (nextindex == 7 && nextindex == 3) {
        takes = takesSevenThree;
    } else if (nextindex == 7 && nextindex == 4) {
        takes = takesSevenFour;
    } else if (nextindex == 7 && nextindex == 5) {
        takes = takesSevenFive;
    } else if (nextindex == 7 && nextindex == 6) {
        takes = takesSevenSix;
    } else if (nextindex == 7 && nextindex == 8) {
        takes = takesSevenEight;
    }

    /*-------------------------------------------*/

    if (index == 8 && nextindex == 0) {
        takes = takesEightZero;
    } else if (index == 8 && nextindex == 1) {
        takes = takesEightOne;
    } else if (index == 8 && nextindex == 2) {
        takes = takesEightTwo;
    } else if (index == 8 && nextindex == 3) {
        takes = takesEightThree;
    } else if (index == 8 && nextindex == 4) {
        takes = takesEightFour;
    } else if (index == 8 && nextindex == 5) {
        takes = takesEightFive;
    } else if (index == 8 && nextindex == 6) {
        takes = takesEightSix;
    } else if (index == 8 && nextindex == 7) {
        takes = takesEightSeven;
    }

    if (index == 8 && index == 0) {
        takes = takesEightZero;
    } else if (index == 8 && index == 1) {
        takes = takesEightOne;
    } else if (index == 8 && index == 2) {
        takes = takesEightTwo;
    } else if (index == 8 && index == 3) {
        takes = takesEightThree;
    } else if (index == 8 && index == 4) {
        takes = takesEightFour;
    } else if (index == 8 && index == 5) {
        takes = takesEightFive;
    } else if (index == 8 && index == 6) {
        takes = takesEightSix;
    } else if (index == 8 && index == 7) {
        takes = takesEightSeven;
    }

    if (nextindex == 8 && nextindex == 0) {
        takes = takesEightZero;
    } else if (nextindex == 8 && nextindex == 1) {
        takes = takesEightOne;
    } else if (nextindex == 8 && nextindex == 2) {
        takes = takesEightTwo;
    } else if (nextindex == 8 && nextindex == 3) {
        takes = takesEightThree;
    } else if (nextindex == 8 && nextindex == 4) {
        takes = takesEightFour;
    } else if (nextindex == 8 && nextindex == 5) {
        takes = takesEightFive;
    } else if (nextindex == 8 && nextindex == 6) {
        takes = takesEightSix;
    } else if (nextindex == 8 && nextindex == 7) {
        takes = takesEightSeven;
    }

    console.log(takes);
}

function checkWinner() {
    if (options[0] == playerMark && options[4] == playerMark && options[8] == playerMark) {
        statusText.textContent = "Je hebt gewonnen!";
    } else if (options[0] == cpuMark && options[1] == cpuMark && options[8] == cpuMark) {
        statusText.textContent = "Cpu heeft gewonnen!";
    }

    if (options[0] == playerMark && options[4] == playerMark && options[8] == playerMark) {
        statusText.textContent = "Je hebt gewonnen!";
    } else if (options[0] == cpuMark && options[4] == cpuMark && options[8] == cpuMark) {
        statusText.textContent = "Cpu heeft gewonnen!";
    }

    if (options[0] == playerMark && options[3] == playerMark && options[6] == playerMark) {
        statusText.textContent = "Je hebt gewonnen!";
    } else if (options[0] == cpuMark && options[3] == cpuMark && options[6] == cpuMark) {
        statusText.textContent = "Cpu heeft gewonnen!";
    }

    if (options[1] == playerMark && options[4] == playerMark && options[7] == playerMark) {
        statusText.textContent = "Je hebt gewonnen!";
    } else if (options[1] == cpuMark && options[4] == cpuMark && options[7] == cpuMark) {
        statusText.textContent = "Cpu heeft gewonnen!";
    }

    if (options[2] == playerMark && options[4] == playerMark && options[6] == playerMark) {
        statusText.textContent = "Je hebt gewonnen!";
    } else if (options[2] == cpuMark && options[4] == cpuMark && options[6] == cpuMark) {
        statusText.textContent = "Cpu heeft gewonnen!";
    }

    if (options[2] == playerMark && options[5] == playerMark && options[8] == playerMark) {
        statusText.textContent = "Je hebt gewonnen!";
    } else if (options[2] == cpuMark && options[5] == cpuMark && options[8] == cpuMark) {
        statusText.textContent = "Cpu heeft gewonnen!";
    }

    if (options[3] == playerMark && options[4] == playerMark && options[5] == playerMark) {
        statusText.textContent = "Je hebt gewonnen!";
    } else if (options[3] == cpuMark && options[4] == cpuMark && options[5] == cpuMark) {
        statusText.textContent = "Cpu heeft gewonnen!";
    }   

    if (options[6] == playerMark && options[7] == playerMark && options[8] == playerMark) {
        statusText.textContent = "Je hebt gewonnen!";
    } else if (options[6] == cpuMark && options[7] == cpuMark && options[8] == cpuMark) {
        statusText.textContent = "Cpu heeft gewonnen!";
    }
}