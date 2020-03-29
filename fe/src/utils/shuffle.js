export default function (arr = [], randomFn = Math.random) {
  const shuffledArr = [...arr];

  for (let i = 0; i < shuffledArr.length; i++) {
    const pos = Math.floor(randomFn() * shuffledArr.length);
    const swap = shuffledArr[pos];
    shuffledArr[pos] = shuffledArr[i];
    shuffledArr[i] = swap;
  }

  return shuffledArr;
}
