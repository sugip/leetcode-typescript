import {describe, expect, test} from "@jest/globals";

function mergeAlternately(word1: string, word2: string): string {
    const result: string[] = [];

    for (let i = 0; i < word1.length || i < word2.length; i++) {
        if (i < word1.length) result.push(word1[i]);
        if (i < word2.length) result.push(word2[i]);
    }

    return result.join('');
}


describe('mergeAlternately', () => {
    const data: string[][] = [
        ['abc', 'pqr', 'apbqcr'],
        ['ab', 'pqrs', 'apbqrs'],
        ['abcd', 'pq', 'apbqcd'],
    ]

    test.each(data)('merge %s and %s alternately should be %s', (a: string, b: string, expected: string) => {
        expect(mergeAlternately(a, b)).toBe(expected);
    });
});
