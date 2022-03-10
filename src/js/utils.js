export function calcTileType(index, boardSize) {
  return cardinalPoints(index, boardSize);
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

/**
 * Возвращает строки для отрисовки полей на основе индекса массива поля
 * @param {*} index 
 * @param {*} boardSize 
 * @returns 
 */
function cardinalPoints(index, boardSize) {
  let point = "center";
  const powsBoard = Math.pow(boardSize, 2);
  const powBoardNegativeIndex = powsBoard - index;

  if(index === 0) {
    point = "top-left";
  }
  if(index === boardSize - 1) {
    point = "top-right";
  }
  if(index === powsBoard - 1) {
    point = "bottom-right";
  }
  if(index === powsBoard - boardSize) {
    point = "bottom-left";
  }
  if(index === boardSize - 1) {
    point = "top-right";
  }

  if(index > 0 && index < boardSize - 1) {
    point = "top";
  }
  if(index > powsBoard - boardSize && index < powsBoard - 1) {
    point = "bottom";
  }
  
  if(powBoardNegativeIndex % boardSize == 0 
    && powBoardNegativeIndex > boardSize 
    && index > boardSize - 1) {
    point = "left";
  }
  if(powBoardNegativeIndex % boardSize == 1 
    && powBoardNegativeIndex > boardSize 
    && index > boardSize - 1) {
    point = "right";
  }
  return point;
}
