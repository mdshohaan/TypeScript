function fun(input: string | null): void | undefined | null {
  const mult = 2 * 2;
  console.log(mult);
}
// spread
const numbers: number[] = [2, 3, 4, 5];
const numbers2: number[] = [...numbers, 6, 7];

// rest func

function resFunc(...num: number[]): void {
  console.log(num);
}
resFunc(1, 2, 3, 4);
