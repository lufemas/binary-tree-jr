class BTree {
    constructor(){
    }

    insert(val){
        if(!this.root){
            this.root = new BNode(val)
        }else{
            this.root.insert(val);
        }
    }

    search(val){
       return this.root.search(val);
    }

    traverse(){
        this.root.traverse()
    }
}