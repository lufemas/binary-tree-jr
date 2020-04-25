const nodeHTML = `    <div class="node">
<p><span class="value">10</span></p>
<div class="horizontal-line-center"></div>
<div class="left-right-container">
    <div class="left">
    </div>
    <div class="right">
    </div>
</div>
</div>`




const bTree = new Tree();

bTree.insert(10);
bTree.insert(15);
bTree.insert(3);
bTree.insert(8);

console.log(bTree)

console.log(bTree.search(10));

console.log("\n--------")
bTree.traverse()


