const canMoveKnight = (oldPosition, newPosition) => {
  console.log(oldPosition);
  console.log(newPosition);
  const {x, y} = oldPosition;
  const {x: toX, y: toY} = newPosition;
  console.log('canMoveKnight', x, y, toX, toY);
  const dx = toX - x;
  const dy = toY - y;
  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

export {
  canMoveKnight
}
