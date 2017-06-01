module Sort {
  class selection {
    public arr;
    constructor(arr) {
      this.arr = arr;
    }

    sorting() {
      let len = this.arr.length;
      let minIndex;
      let minValue;
      for (let i = 0; i < len; i++) {
        minValue = this.arr[i];
        minIndex = i;
        for (let j = i; j < len - 1; j++) {
          if (minValue > this.arr[j + 1]) {
            minIndex = j + 1;
            minValue = this.arr[j + 1]
          }
        }
        let tmp = this.arr[i];
        this.arr[i] = this.arr[minIndex];
        this.arr[minIndex] = tmp;
      }
    }

  }
  debugger;
  let se = new selection([50, 20, 10, 7, 89, 62, 4]);
  se.sorting();
  console.log(se.arr);
}
