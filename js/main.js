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

const $ = document;
const $tree = $.getElementById(`tree`);

const $inputValue = $.getElementById(`input-value`);
const $insertBtn = $.getElementById(`insert-btn`)
const $searchBtn = $.getElementById(`search-btn`);
const $randomBtn = $.getElementById(`random-btn`);
const $traverseBtn = $.getElementById(`traverse-btn`);


tree = new TreeDOM($tree);
const bTree = new BTree();

function resetSearch(){
    const $values = $.getElementsByClassName(`value`);
    for( $item of $values){
        $item.classList.remove(`found`);
    }
}


function insertValue(val){
    resetSearch()
    const node =  tree.insert( val );
    bTree.insert(val)
    node ? node.element.getElementsByClassName(`value`)[0].classList.add(`found`) :  null;
    return node;
}

$traverseBtn.addEventListener(`click`, (e) => {
    bTree.traverse()
    alert(tree.traverse())
})

$insertBtn.addEventListener(`click`, (e) => {
   insertValue(parseInt ($inputValue.value));
})

$searchBtn.addEventListener(`click`, (e) => {
    resetSearch()
    console.log(bTree.search(parseInt ($inputValue.value)));
   let result = tree.search( parseInt ($inputValue.value));
   if(result){
       result.element.getElementsByClassName(`value`)[0].classList.add(`found`);
       window.scrollTo(result.element.offsetLeft, result.element.offsetTop)
   }else{
       alert("Not found")
   }
})

$randomBtn.addEventListener(`click`, (e) => {
    const value = Math.round(Math.random() * 100);
    insertValue(  value );
})



// document.getElementById('asd').appendChild



