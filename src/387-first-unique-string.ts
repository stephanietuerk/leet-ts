function firstUniqChar(s: string): number {
    const letters = new Map<string, {i: number; count: number}>();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const curr = letters.get(char);
        if (!curr) {
            letters.set(char, {i, count: 1});
        } else {
            letters.set(char, {...curr, count: curr.count + 1});
        }
    }
    const firstUnique = Array.from(letters.values()).find((v) => v.count === 1);
    return firstUnique ? firstUnique.i : -1;
};

console.log(firstUniqChar('aabb'));