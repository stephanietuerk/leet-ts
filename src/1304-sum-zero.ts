function sumZero(n: number): number[] {
  const numbers: number[] = [];
  if (n % 2 !== 0) {
    numbers.push(0);
  }
  const max = Math.floor(n / 2);
  for (let i = 0; i < max; i++) {
    numbers.push(i + 1);
    numbers.push((i + 1) * -1);
  }
  return numbers;
}

console.log(sumZero(14));
