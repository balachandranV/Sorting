module Sort {
  class insert {
    public arr;
    constructor(arr) {
      this.arr = arr;
    }

    sorting() {
      let len = this.arr.length;
      for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
          if (this.arr[i] < this.arr[j]) {
            let removed = this.arr.splice(i, 1);
            this.arr.splice(j, 0, removed[0]);
            break;
          }

        }

      }
    }

  }
  debugger;
  let ins = new insert([50, 20, 10, 7, 89, 62, 4]);
  ins.sorting();
  console.log(ins.arr);
}
