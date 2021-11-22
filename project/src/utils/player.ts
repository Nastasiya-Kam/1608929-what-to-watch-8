const calculateProgress = (totalTime: number, currentTime: number): number => {
  if (!totalTime || !currentTime) {
    return 0;
  }

  return currentTime / totalTime * 100;
};

export {calculateProgress};
