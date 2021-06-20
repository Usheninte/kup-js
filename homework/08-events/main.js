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

const hExtractLoop = (contentData, startNum, endNum) => {
    let row = [];
    for (let i = startNum; i < endNum; i++) {
        row.push(contentData[i].innerText);
    }
    return row;
}

const horizontalExtract = (content) => {
    let extractedArray = [];

    let row1 = hExtractLoop(content, 0, 8);
    let row2 = hExtractLoop(content, 2, 9);
    let row3 = hExtractLoop(content, 3, 10);

    extractedArray.push(row1, row2, row3);
    return extractedArray;
}

const vExtractLoop = (contentData, startNum, endNum) => {
    let row = [];
    for (let i = startNum; i < endNum; i += 3) {
        row.push(contentData[i].innerText);
    }
    return row;
}

const verticalExtract = (content) => {
    let extractedArray = [];

    let row1 = vExtractLoop(content, 0, 7);
    let row2 = vExtractLoop(content, 1, 8);
    let row3 = vExtractLoop(content, 2, 9);

    extractedArray.push(row1, row2, row3);
    return extractedArray;
}

const dExtractLoop = (contentData, startNum, endNum, increment) => {
    let row = [];
    for (let i = startNum; i < endNum; i += increment) {
        row.push(contentData[i].innerText);
    }
    return row;
}

const diagonalExtract = (content) => {
    let extractedArray = [];

    let row1 = dExtractLoop(content, 0, 9, 4);
    let row2 = dExtractLoop(content, 2, 8, 2);

    extractedArray.push(row1, row2);
    return extractedArray;
}

const output = diagonalExtract(boxes);
console.log(output);

// win analysis

/*
const winAnalysis = (content, winRules) => {

}
*/