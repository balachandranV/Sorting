module HashTables {

    class hasTable {
        public value = [];
        public size;
        constructor(size) {
            this.size = size;
        }

        addItem(key, value) {
            let hash = this.getHashValue(key);
            if (!this.value[hash]) {
                this.value[hash] = {};
            }
            if (!this.value[hash] && !this.value[hash][key]) {

            }
            this.value[hash][key] = value;

        }
        getHashValue(key) {
            return key.length % this.size;
        }
        deleteItem(key) {
            let hash = this.getHashValue(key);
            if (this.value[hash] && this.value[hash][key]) {
                delete this.value[hash][key];

            }
        }
        searchItem(key) {
            let hash = this.getHashValue(key);
            if (this.value[hash] && this.value[hash][key]) {
                return this.value[hash][key];
            }
        }

    }

 var ht=new hasTable(3);
 debugger;

ht.addItem("bala",{x:10});
ht.addItem("ravi",{y:100});
ht.addItem("paiya",{z:1000});
ht.addItem("meera",{x1:10000});
ht.addItem("ramya",{x2:1000000});
ht.addItem("ramya",{x2:1000000});
ht.searchItem("meera");
}