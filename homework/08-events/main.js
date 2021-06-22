// DOM extraction

const gameBoard = document.getElementById("game-board");
const boxes = gameBoard.getElementsByClassName("box");
const results = document.getElementById("results");

// position analysis

const hExtractLoop = (contentData, startNum, endNum) => {
    let row = [];
    for (let i = startNum; i < endNum; i++) {
        row.push(contentData[i]);
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

const vExtractLoop = (contentData, startNum, endNum) => {
    let row = [];
    for (let i = startNum; i < endNum; i += 3) {
        row.push(contentData[i]);
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
        row.push(contentData[i]);
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

// win assessment

const verdict = (positions) => {
    let factsOfGame = [];

    for (let arr of positions) {
        if (arr.every(play => play === arr[0] && play !== "")) {
            factsOfGame.push([true, arr[0]]);
        } else {
            factsOfGame.push([false]);
        }
    }

    return factsOfGame;
}

const winAnalysis = (content) => {
    const horizontals = horizontalExtract(content);
    const verticals = verticalExtract(content);
    const diagonals = diagonalExtract(content);

    const horizontalVerdict = verdict(horizontals);
    const verticalVerdict = verdict(verticals);
    const diagonalVerdict = verdict(diagonals);

    const verdicts = [horizontalVerdict, verticalVerdict, diagonalVerdict];

    const isAllFalseInner = (el) => el[0] === false;

    // `true` is the result of the prior `false` check
    const areAllVerdictsFalse = (el) => el === true;

    let falseBucket = [];

    for (let decision of verdicts) {
        for (let el of decision) {
            if (el[0]) {
                return `${el[1]} has won!`;
            } else {
                continue;
            }
        }

        if (decision.every(isAllFalseInner)) {
            falseBucket.push(decision.every(isAllFalseInner))
        }
    }

    if (falseBucket.every(areAllVerdictsFalse)) {
        return 'Cats game!';
    }
}

// click awareness

let playHistory = [];
const playerX = "X";
const playerO = "O";

// results.addEventListener('click', () => {
// });

const showResponse = (str) => {
    let response = str.split(' ');
    // search for 'won!' string in response
    let show = response.some((char) => char === 'won!');

    if (show) {
        alert(str);
        setTimeout(() => location.reload(), 2000);
    }
}

gameBoard.addEventListener("click", (e) => {
    let lastPlayer = playHistory[playHistory.length - 1];
    if (e.target.innerText === "RESULTS") {
        e.target.innerText = "RESULTS";
    } else if (e.target.innerText === playerX) {
        e.target.innerText = playerX;
    } else if (e.target.innerText === playerO) {
        e.target.innerText = playerO;
    } else {
        if (lastPlayer === undefined) {
            e.target.innerText = playerX;
            e.target.style.color = 'red';
            playHistory.push(playerX);
        } else if (lastPlayer === playerX) {
            e.target.innerText = playerO;
            e.target.color = 'black';
            playHistory.push(playerO);
        } else if (lastPlayer === playerO) {
            e.target.innerText = playerX;
            e.target.style.color = 'red';
            playHistory.push(playerX);
        } else {
            null
        }
    }

    let playerPositions = [];

    for (let box of boxes) {
        playerPositions.push(box.innerText);
    }

    // console.log(analysisFilter(playerPositions));
    showResponse(
        winAnalysis(playerPositions)
    );
});
