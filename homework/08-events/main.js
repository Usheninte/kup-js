// win rules
const horizontalWins = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
];

const verticalWins = [
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"]
];

const diagonalWins = [
    ["1", "5", "9"],
    ["3", "5", "7"]
];

const winContext = {
    'horizontal': horizontalWins,
    // 'vertical': verticalWins,
    // 'diagonal': diagonalWins
}

// DOM extraction
const gameBoard = document.getElementById("game-board");
const boxes = gameBoard.getElementsByTagName("span");

// console.log(winContext);
// console.log(boxes[0].id);

const hExtractLoop = (contentData, startNum, endNum) => {
    let row = [];
    for (let i = startNum; i < endNum; i++) {
        row.push(contentData[i].innerText);
    }
    return row;
}

const horizontalExtract = (content) => {
    let extractedArray = [];

    let row1 = hExtractLoop(content, 0, 3);
    let row2 = hExtractLoop(content, 3, 6);
    let row3 = hExtractLoop(content, 6, 9);

    extractedArray.push(row1, row2, row3);
    return extractedArray;
}

const output = horizontalExtract(boxes);
console.log(output);

const winAnalysis = (content, winRules) => {

}