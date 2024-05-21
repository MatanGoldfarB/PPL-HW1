import * as R from "ramda";
//AAAAAAAAAAAAAA
const stringToArray = R.split("");

/* Question 1 */

export const countVowels: (str:string) => number = R.pipe(
    stringToArray,
    R.reduce((acc: number, cur: string) => "aeiouAEIOU".includes(cur) ? acc+1 : acc, 0),
);

/* Question 2 */
const popPair = (stack: string[], open: string, close: string): string[] =>
    R.isEmpty(stack) ? [close] : 
    R.head(stack)===open ? R.tail(stack) : R.prepend(close, stack);

const pairCheck = (stack: string[], ch: string): string[] => 
    (ch === "(" || ch === "{"|| ch === "[") ? R.prepend(ch, stack) : 
    ch === ")" ? popPair(stack, "(", ch) :
    ch === "}" ? popPair(stack, "{", ch) :
    ch === "]" ? popPair(stack, "[", ch) :
    stack;

export const isPaired: (str:string) => boolean = R.pipe(
    stringToArray,
    R.reduce(pairCheck,[]),
    R.isEmpty
);

/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence : (tree: WordTree) => string = (tree) => 
    tree.root +tree.children.reduce((acc: string,cur: WordTree) => acc + treeToSentence(cur)," ");

