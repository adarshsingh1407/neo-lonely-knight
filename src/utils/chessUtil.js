const canMoveKnight = (oldPosition, newPosition) => {
  const {x, y} = oldPosition;
  const {x: toX, y: toY} = newPosition;
  const dx = toX - x;
  const dy = toY - y;
  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

export {
  canMoveKnight
}
