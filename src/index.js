class Sorter {
    constructor() {
        this.a = [];
        this.sortNumDesc = (a, b) => {
            return a - b
        };
        this.comparator = null;
    }

    add(element) {
        this.a.push(element);
    }

    at(index) {
        return this.a[index];
    }

    get length() {
        return this.a.length;
    }

    toArray() {
        return Array.from(this.a);
    }

    sort(indices) {
        let a = this.a;
        let t = [];
        indices.sort(this.sortNumDesc);
        indices.forEach(function (i) {
            t.push(a[i])
        });
        t.sort(this.comparator === null ? this.sortNumDesc : this.comparator);
        indices.forEach((v, i) => {
            a[v] = t[i]
        })

    }

    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
}

module.exports = Sorter;