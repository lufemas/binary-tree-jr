class NodeDOM{
    constructor(val){
        this.value = val;
        this.element = document.createElement("div");
        this.element.className = "node";
        this.element.innerHTML = `                                <p><span class="value">${this.value}</span></p>
                                                                    <div class="horizontal-line-center"></div>
                                                                    <div class="left-right-container">
                                                                        <div class="left">
                                                                        </div>
                                                                        <div class="right">
                                                                        </div>
                                                                    </div>`

        this.$left = this.element.getElementsByClassName(`left`)[0];
        this.$right = this.element.getElementsByClassName(`right`)[0];
        const nodeHTML = `    <div class="node">
                                <p><span class="value">${this.value}</span></p>
                                <div class="horizontal-line-center"></div>
                                <div class="left-right-container">
                                    <div class="left">
                                    </div>
                                    <div class="right">
                                    </div>
                                </div>
                              </div>`
    }

    insert(val){
        if (val < this.value){
            if(!this.$left.children.length > 0){
                this.left = new NodeDOM(val);
                this.$left.appendChild (this.left.element);
                return this.left;
            }else{
                return this.left.insert(val);
            }
        }else if(val > this.value){
            if(!this.$right.children.length > 0){
                this.right = new NodeDOM(val);
                this.$right.appendChild (this.right.element);
                return this.right;
            }else{
                return this.right.insert(val);
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