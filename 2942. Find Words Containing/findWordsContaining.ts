function findWordsContaining(words: string[], x: string): number[] {
    let result: number[] = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            result.push(i);
        }
    }
    return result;
}
console.log(findWordsContaining(["leet", "code"], "e")); // [0, 1]

// create array to hold results
// loop over words
// if words[i] (each word) includes x -> push index (i) to result array
// return result array
