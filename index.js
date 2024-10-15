function sumOfDistinctElements(set1, set2) {

    const uniqueSet1 = new Set(set1);
    const uniqueSet2 = new Set(set2);
    
    const distinctElements = [...uniqueSet1].filter(x => !uniqueSet2.has(x))
        .concat([...uniqueSet2].filter(x => !uniqueSet1.has(x)));
    
    const totalSum = distinctElements.reduce((acc, val) => acc + val, 0);
    return totalSum;
}

