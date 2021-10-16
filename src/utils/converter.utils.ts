const indexToXY = (index: number) => {
    return { x: Math.floor(index / 3), y: index % 3 };
};

export { indexToXY };