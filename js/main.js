'use strict';

// Reto VI Generación K

const sideSize = 6;
const gridPosBase = [
  [1, 1],
  [4, 1],
  [2, 2],
  [6, 2],
  [5, 3],
  [1, 4],
  [4, 4],
  [3, 5],
  [6, 5],
];
const encriptedMessage = 'lróaon. sg sdersoildsu.:.cc kiomamii';

/***/

const createCharactersGrid = (characters) => {
  const newArray = [];
  let newRow = [];
  let counter = 0;

  for (let i = 0; i < sideSize; i++) {
    newRow = [];
    for (let j = counter; j < sideSize + counter; j++) {
      newRow.push(characters[j]);
    }
    newArray.push(newRow);
    counter += sideSize;
  }

  return newArray;
};

const createPositionsGrid = (positions) => {
  const newArray = [];
  let newRow = [];

  for (let i = 0; i < sideSize; i++) {
    newRow = [];
    for (let j = 0; j < sideSize; j++) {
      newRow.push(false);
    }
    newArray.push(newRow);
  }

  for (const position of positions) {
    newArray[position[0] - 1][position[1] - 1] = true;
  }

  return newArray;
};

const rotateGrid = (grid) => {
  const newArray = [];
  let newRow = [];

  for (let i = 0; i < grid.length; i++) {
    newRow = [];
    for (let j = 0; j < grid[i].length; j++) {
      newRow.push(grid[j][i]);
    }
    newArray.push(newRow);
  }

  newArray.reverse();

  return newArray;
};

const getSolutionPart = (characters, positions) => {
  let result = '';

  for (let i = 0; i < characters.length; i++) {
    for (let j = 0; j < characters[i].length; j++) {
      if (positions[j][i]) {
        result += characters[i][j];
      }
    }
  }

  return result;
};

const decrypt = (encriptedMessage, gridPosBase) => {
  const charactersGrid = createCharactersGrid(encriptedMessage.split(''));
  console.log(charactersGrid);

  let positionsGrid = createPositionsGrid(gridPosBase);
  console.log(positionsGrid);

  let result = '';

  for (let i = 0; i < encriptedMessage.length; i = i + gridPosBase.length) {
    result += getSolutionPart(charactersGrid, positionsGrid);
    positionsGrid = rotateGrid([...positionsGrid]);
  }

  return result;
};

/***/

const decryptedMessage = decrypt(encriptedMessage, gridPosBase);
console.log(decryptedMessage);
