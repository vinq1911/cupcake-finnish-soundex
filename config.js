module.exports = {
    vowels: ['a','ä','o','e','ö','i','y','u'],
    voweltrans: ['a','a','a','i','i','i','u','u'],
    deafs: ['b', 'v', 'd', 'g'],
    deaftrans: ['p', 'f', 't', 'k'],
    specs: ['z', 'q', 'v', 'w',  'x', 'å'],
    spectrans: ['ts', 'kv', 'u', 'u', 'ks', 'o'],

    reduce: function (w) {
        const wrd = [...w.toLowerCase()];
        const ret = [];
        wrd.map((l, i) => {
            if (wrd[i-1] != l) {
                if (this.deafs.includes(l) && (i === (wrd.length-1) || ![...this.vowels, 'l','m','n','r'].includes(wrd[i+1])) ) {
                    ret.push(this.deaftrans[this.deafs.indexOf(l)]);
                } else {
                    
                    if (this.specs.includes(l)) {
                        ret.push(this.spectrans[this.specs.indexOf(l)]);
                    } else if (this.vowels.includes(l)) {
                        ret.push(this.voweltrans[this.vowels.indexOf(l)]);
                    } else {
                        ret.push(l);
                    }
                    
                }
            } 
        });
        return ret.join('');
    }


}