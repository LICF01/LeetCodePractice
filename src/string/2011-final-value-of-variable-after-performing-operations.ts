// There is a programming language with only four operations and one variable X:
//
// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
//
// Initially, the value of X is 0.
//
// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

export default function finalValueAfterOperations(
  operations: string[],
): number {
  if (operations.length < 1 || operations.length > 100) return 0;
  const number: number = operations.reduce((acc, op) => {
    if (op === "X++" || op === "++X") return acc + 1;
    if (op === "X--" || op === "--X") return acc - 1;
    return acc;
  }, 0);

  return number;
}
