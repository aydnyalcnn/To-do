var kutu=document.querySelector("Liste");
var ad=document.querySelector("#task");
var items=document.querySelectorAll("#List li"),
tab=[],liIndex;


for(var i=0;i<items.length;i++){
    tab.push(items[i].innerHTML);
}

for (var i = 0; i < items.length; i++) {
    items[i].onclick=function(){
        liIndex=tab.indexOf(this.innerHTML);
        console.log(this.innerHTML+ " " +liIndex)
    };
    
}

function removeLI(){
    items[liIndex].parentNode.removeChild(items[liIndex]);

}
function newElement(){
    let eleman=document.createElement("li");
    eleman.textContent=ad.value;
    //console.log(eleman);
    kutu.appendChild(eleman);
    

}