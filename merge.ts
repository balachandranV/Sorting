module Sort {
  class merge {
    public arr;
    constructor(arr) {
      this.arr = arr;
    }

    sort(arr) {
      if (arr.length < 2) {
        return arr;
      }
      var mid = arr.length / 2
      let middle = parseInt(("" + mid));
      let left = arr.slice(0, middle);
      let right = arr.slice(middle, arr.length);
      return this.mergeArray(this.sort(left),this.sort(right));

    }

    mergeArray(a, b) {

      let result = [];
      while (a.length && b.length) {
        if (a[0] < b[0]) {
          result.push(a.shift());
        } else {
          result.push(b.shift());
        }

      }
      if (a.length) {
        result.push(...a);
      }
      if (b.length) {
        result.push(...b);
      }
      return result;
    }

  }
  debugger;
  let me = new merge([50, 20, 10, 7, 89, 62, 4]);
 console.log( me.sort(me.arr));
  //console.log(me.arr);
}
