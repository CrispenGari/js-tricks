const draw = ({ position, velocity }) => {
  return {
    position,
    velocity,
  };
};

console.log(
  draw({
    velocity: {
      x: 10,
      y: 0,
    },
  })
);
