module Sort {
  class bubble {
    public arr;
    constructor(arr) {
      this.arr = arr;
    }

    sorting() {
      let len = this.arr.length;
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
          if (this.arr[j] > this.arr[j + 1]) {
            let tmp = this.arr[j + 1];
            this.arr[j + 1] = this.arr[j];
            this.arr[j] = tmp;
          }
        }
      }
    }
    
  }
  debugger;
  let bub=new bubble([50,20,10,7,89,62,4]);
  bub.sorting();
  console.log(bub.arr);
}
