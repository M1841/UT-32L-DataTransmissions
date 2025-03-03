function getFibonacci(n) {
  if (typeof n !== "number" || n < 1 || n > 10) {
    return "not allowed";
  }
  switch (n) {
    case 1: {
      return [1];
    }
    case 2: {
      return [1, 1];
    }
    default: {
      const previous = getFibonacci(n - 1);
      return [...previous, previous.at(-1) + previous.at(-2)];
    }
  }
}
