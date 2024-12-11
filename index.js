class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) throw new Error("OutOfBounds");
    return this.items.at(pos);
  }

  max() {
    if (this.length == 0) throw new Error("EmptySortedList");
    return Math.max(...this.items);
  }

  min() {
    if (this.length == 0) throw new Error("EmptySortedList");
    return Math.min(...this.items);
  }

  sum() {
    if (this.length == 0) return 0;
    return this.items.reduce((acc, item) => acc + item, 0);
  }

  avg() {
    if (this.length == 0) throw new Error("EmptySortedList");
    return this.items.reduce((acc, item) => acc + item, 0) / this.length;
  }
}

module.exports = SortedList;

// console.log([6, 8, 2, 5].sort((a, b) => a - b));
