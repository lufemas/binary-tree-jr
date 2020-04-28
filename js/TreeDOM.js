class TreeDOM {
    constructor($tree){
        this.$tree = $tree;
    }

    insert(val){
        if(!this.$tree.children.length > 0){
            this.root = new NodeDOM(val);
            this.$tree.appendChild(this.root.element)
            return this.root;
        }else{
            return this.root.insert(val);
        }
    }

    search(val){
       return this.root.search(val);
    }

    traverse(){
        this.root.traverse()
    }
}