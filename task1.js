let count = process.argv[2];

function getSimples(count) {
    
    if (count < 1) return [];
    
    let simples = [ 2 ];
    
    for (let n = 3; simples.length < count; n += 2) { 
        let p = true, max_m = Math.sqrt(n);
        for (let i = 0; (m = simples[i++]) <= max_m; )
            if (!(n % m)) { p = false; break; }
        p && simples.push(n);
    }
    
    return simples;
}
console.log(getSimples(count));
