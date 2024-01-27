// 2942. Find Words Containing Character
//
// You are given a 0-indexed array of strings words and a character x.
// Return an array of indices representing the words that contain the character x.
// Note that the returned array may be in any order.

export default function findWordsContaining(
  words: string[],
  x: string,
): number[] {
  let i = 0;
  let len = words.length;
  let arr: number[] = [];

  while (i < len) {
    if (words[i].includes(x)) arr.push(i);
    i++;
  }

  return arr;
}
