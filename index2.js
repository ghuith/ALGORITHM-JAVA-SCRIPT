function areOrthogonal(vectors) {
    const orthogonalPairs = [];
    
    vectors.forEach(([v1, v2]) => {


        if (dotProduct(v1, v2) === 0) {
            orthogonalPairs.push([v1, v2]);
        }
    });
    
    return orthogonalPairs;
}

