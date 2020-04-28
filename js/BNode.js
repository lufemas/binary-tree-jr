class BNode {
    constructor(val){
        this.value = val;
    }

    insert(val){
        if (val < this.value){
            if(!this.left){
                this.left = new BNode(val);
                return this.left;
            }else{
                this.left.insert(val);
            }

        }else{
            if(!this.right){
                this.right = new BNode(val);
                return this.right;
            }else{
                this.right.insert(val)
            }

        }
        return 0;
    }

    search(val){
        if(this.value === val){
            console.log("OK")
            return this;
        }else if(this.value > val){
            console.log("going left");   
            return this.left ?  this.left.search(val) : false;
        }else if(this.value < val){
            console.log("going right");   
            return this.right ? this.right.search(val) : false;
        }
    }

    traverse(){
        this.left? this.left.traverse() : null;
        console.log(this.value);
        this.right? this.right.traverse() : null;
    }
}