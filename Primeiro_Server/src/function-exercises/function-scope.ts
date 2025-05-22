let count = 0;

function increment(amount: number = 1): void {
  count += amount;
}

function decrement(amount: number = 1): void {
  count -= amount;
}

function increment2(amount: number = 0): number {
  const count = amount;
  return count;
}
increment();
increment();
decrement();
increment2(5);
console.log(count);
